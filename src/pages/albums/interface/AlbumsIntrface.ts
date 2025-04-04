export interface AlbumInfo {
    userId?:string,
    id?:string,
    title?:string
}

export interface FiltercomponentProps {
    onClickButton: (filters: AlbumInfo) => void, 
}