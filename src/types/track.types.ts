export interface TrackData {
    id: number;
    title: string;
    duration: number;
    preview: string;
    artist: ArtistData;
    album: AlbumData
}

export interface ArtistData {
    id: number;
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
}

export interface AlbumData {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
}
