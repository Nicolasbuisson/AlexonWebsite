export interface StillImage {
    imageUrl: string;
}
  
export interface WorkItemProps {
    route: string;
    title: string;
    client: string;
    description: string;
    videoUrl: string;
    gridImage: string;
    logoImage: string;
    services: string;
    stills: StillImage[];
    displayOnHomePage?: boolean;
}