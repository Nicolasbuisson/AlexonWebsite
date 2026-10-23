import "./productionsItem.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navigation } from "../../../components/navigation/navigation";
import projectsJSON from "../../../resources/projects.json";
import type { Metadata } from "next";
import { ProductionItemDetails } from "../../../components/productionItemDetails/productionItemDetails";
import { ProductionsCarousel } from "../../../components/productionsCarousel/productionsCarousel";
import { ProductionItemServices } from "../../../components/productionItemServices/productionItemServices";

interface productionsStaticParams {
  productionsRoute: string;
}

// every production is known at build time, so anything outside
// generateStaticParams is a bad URL and should 404 rather than be rendered
export const dynamicParams = false;

export async function generateStaticParams(): Promise<
  productionsStaticParams[]
> {
  const staticRoutes = projectsJSON.projects.map((project: WorkItemProps) => ({
    productionsRoute: project.route,
  }));
  return staticRoutes;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<productionsStaticParams>;
}): Promise<Metadata> {
  const { productionsRoute } = await params;
  const productionItem = projectsJSON.projects.find(
    (project: WorkItemProps) => project.route === productionsRoute,
  );
  if (!productionItem) {
    notFound();
  }
  return {
    title: productionItem.title,
    description: productionItem.metaDescription,
    keywords: ["video production", "Alexon Media"],
  };
}

export default async function productionsItem({
  params,
}: {
  params: Promise<productionsStaticParams>;
}) {
  const { productionsRoute } = await params;
  const productionItem = projectsJSON.projects.find(
    (project: WorkItemProps) => project.route === productionsRoute,
  );
  if (!productionItem) {
    notFound();
  }
  const {
    title,
    client,
    description,
    videos,
    gridImage,
    services,
    stills,
    photos,
    bts,
    credits,
  } = productionItem;

  return (
    <div className="productionsItem-container">
      <Navigation transparent></Navigation>
      <section className="productionsItem-section">
        <div
          className={`productionsItem-title-background${gridImage ? " has-image" : ""}`}
        >
          {gridImage ? (
            <Image
              src={gridImage}
              alt=""
              className="productionsItem-title-image"
              fill
              sizes="100vw"
              priority
            />
          ) : (
            <></>
          )}
          {/* the gradient lives here so the image filter doesn't affect the title */}
          <div className="productionsItem-title-overlay">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="video-container">
          {videos.map((vid) => {
            return (
              <iframe
                key={"production-item-video-" + vid}
                src={vid}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="video"
              ></iframe>
            );
          })}
          <div className="video-details">
            <p className="video-details-label">Client:</p>
            <p className="video-details-client">{client}</p>
            <p className="video-details-label video-details-description">
              Description:
            </p>
            <p className="video-details-description">{description}</p>
            <p className="video-details-label">Services:</p>
            <ProductionItemServices services={services} />
          </div>
        </div>
      </section>
      <section className="productions-item-details-section">
        <ProductionItemDetails
          stills={stills}
          photos={photos}
          bts={bts}
          credits={credits}
        />
      </section>
      <section className="productions-item-carousel-section">
        <ProductionsCarousel productionToExclude={productionItem.title} />
      </section>
    </div>
  );
}
