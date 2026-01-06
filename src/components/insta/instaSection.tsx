import { InstaItemProps, MediaType } from "../../types/insta";
import { Insta } from "./insta";
import { config } from "../../config/config";
import "./instaSection.css";
import { isIgMediaUrlValid } from "../../utils/instaUrl";
import { revalidateTag } from "next/cache";

interface IInstaSection {
  additionalTitle?: string;
}

export const InstaSection = async (props: IInstaSection) => {
  const { additionalTitle = "" } = props;

  const TOTAL_INSTA_ITEMS = 25;
  const userId = config.INSTA_USER_ID;
  const accessToken = config.INSTA_ACCESS_TOKEN;

  const fetchInstaItem = async (itemId: string): Promise<InstaItemProps> => {
    const instaItemURL = `https://graph.instagram.com/${itemId}?access_token=${accessToken}&fields=media_url,permalink,caption,media_type,thumbnail_url`;

    // cache individual insta item for 1 day
    let res = await fetch(instaItemURL, {next: {revalidate: 86400, tags: [`instaItem-id-${itemId}`]}});
    let json = await res.json();
    
    // instagram graph api media urls and thumbnail urls expire over time (usually within a few days)
    // must do revalidation if notice that media_url is expired for images and carousels
    // or if thumbnail_url is expired for videos
    if (!isIgMediaUrlValid((json.media_type as MediaType) === "VIDEO" ? json.thumbnail_url : json.media_url)) {
      // revalidate tag to fetch fresh data with non-expired media_url/thumbnail_url
      revalidateTag(`instaItem-id-${itemId}`); 
      res = await fetch(instaItemURL, {next: {revalidate: 86400, tags: [`instaItem-id-${itemId}`]}});
      json = await res.json();
    }
    
    const instaItem: InstaItemProps = {
      permaLink: json.permalink,
      mediaURL: json.media_url,
      mediaType: json.media_type,
      caption: json.caption,
      thumbnailURL:
      (json.media_type as MediaType) === "VIDEO" ? json.thumbnail_url : "",
    };
    return instaItem;
  };

  const fetchInstaItemList = async () => {
    if (!userId || !accessToken) {
      return;
    }

    const instaItemListURL = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;

    // insta item list cached for 4 hours
    const res = await fetch(instaItemListURL, {next: {revalidate: 14400}});
    const { data } = await res.json();

    const itemPromises: Promise<InstaItemProps>[] = [];

    for (let i = 0; i < TOTAL_INSTA_ITEMS; i++) {
      const itemId = data?.[i]?.id;
      const instaItemPromise = fetchInstaItem(itemId);
      itemPromises.push(instaItemPromise);
    }
    const items = await Promise.all(itemPromises);
    return items;
  };

  const instaItems = (await fetchInstaItemList()) ?? [];

  return (
    <section className="insta-section">
      {additionalTitle && (
        <h3 className="insta-section-additional-title">{additionalTitle}</h3>
      )}
      <div>
        <a
          href="https://www.instagram.com/alexoonnn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="insta-title">@Alexoonnn</h4>
        </a>
        <Insta
          instaItems={instaItems}
          totalItems={instaItems.length ? TOTAL_INSTA_ITEMS : 0}
        ></Insta>
      </div>
    </section>
  );
};
