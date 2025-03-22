export interface StillImage {
    imageUrl: string;
}

export interface CreditEntry {
    title: string;
    name: string;
}

export type ServiceType = "Video Production" | "Short-Form Content" | "Commercial Photograhpy" | "Event Photography" | "Concert Videography" | "Passion Project"
  
export interface WorkItemProps {
    route: string;
    title: string;
    client: string;
    description: string;
    videos: string[];
    gridVideoPreview?: string;
    gridImage: string;
    logoImage: string;
    services: string[];
    stills: StillImage[];
    credits: CreditEntry[];
    displayOnHomePage?: boolean;
}