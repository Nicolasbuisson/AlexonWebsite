export interface StillImage {
    imageUrl: string;
  }
  
export interface WorkItemProps {
    title: string;
    client: string;
    description: string;
    videoUrl: string;
    gridImage: string;
    stills: StillImage[];
}