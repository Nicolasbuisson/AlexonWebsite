export type MediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

export interface InstaItemResponse {
    permaLink: string;
    mediaURL: string;
    mediaType: MediaType;
    caption: string;
}

export interface SvgProps {
    className: string;
} 