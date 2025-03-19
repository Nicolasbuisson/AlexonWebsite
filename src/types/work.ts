export interface StillImage {
    imageUrl: string;
}

export interface CreditEntry {
    title: string;
    name: string;
  }
  
export interface WorkItemProps {
    route: string;
    title: string;
    client: string;
    description: string;
    videoUrl: string;
    gridVideoPreview?: string;
    gridImage: string;
    logoImage: string;
    services: string;
    stills: StillImage[];
    credits: CreditEntry[];
    displayOnHomePage?: boolean;
}