interface StillImage {
  imageUrl: string;
}

interface CreditEntry {
  title: string;
  name: string;
}

type ServiceType =
  | "Video Production"
  | "Short-Form Content"
  | "Commercial Photograhpy"
  | "Event Photography"
  | "Concert Videography"
  | "Passion Project";

interface WorkItemProps {
  route: string;
  title: string;
  client: string;
  description: string;
  // short, SEO-length (<160 chars) version of description used for meta tags
  metaDescription: string;
  videos: string[];
  gridVideoPreview?: string;
  gridImage?: string;
  logoImage: string;
  services: string[];
  stills: StillImage[];
  photos: StillImage[];
  bts: StillImage[];
  credits: CreditEntry[];
  displayOnHomePage?: boolean;
  hideFromProductions?: boolean;
}
