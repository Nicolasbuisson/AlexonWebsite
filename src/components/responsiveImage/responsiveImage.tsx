import { Ref } from "react";
import { getImageProps, ImageProps } from "next/image";

// at and below this width the portrait "-mobile" assets are served instead
export const MOBILE_MEDIA_QUERY = "(max-width: 620px)";

interface IResponsiveImageProps extends Omit<ImageProps, "src"> {
  desktopSrc: string;
  mobileSrc: string;
  ref?: Ref<HTMLImageElement>;
}

// art direction through <picture>: the browser picks the file from the media
// query before anything downloads, so a phone never fetches the desktop image
// and the server HTML is already right on first paint. getImageProps does not
// inject a <link rel="preload"> for priority (it would preload both), it only
// drops loading="lazy", so pass fetchPriority="high" alongside it if needed.
export const ResponsiveImage = (props: IResponsiveImageProps) => {
  const { desktopSrc, mobileSrc, ref, ...imageProps } = props;

  const { props: desktop } = getImageProps({ ...imageProps, src: desktopSrc });
  const { props: mobile } = getImageProps({ ...imageProps, src: mobileSrc });

  return (
    <picture>
      {/* srcSet is undefined while images are unoptimized, fall back to src */}
      <source media={MOBILE_MEDIA_QUERY} srcSet={mobile.srcSet ?? mobile.src} />
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img ref={ref} {...desktop} />
    </picture>
  );
};
