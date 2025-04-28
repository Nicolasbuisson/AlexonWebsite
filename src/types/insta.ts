export type MediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

export interface InstaItemProps {
    permaLink: string;
    mediaURL: string;
    mediaType: MediaType;
    caption: string;
    thumbnailURL?: string;
}

export interface SvgProps {
    className: string;
} 