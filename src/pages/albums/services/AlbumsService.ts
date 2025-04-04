import axios from "axios";
import { AlbumInfo } from "../interface/AlbumsIntrface";

export const getAlbums = async (filter: AlbumInfo) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums", {
        params: {
            userId: filter.userId,
            id: filter.id,
            title: filter.title
        }
    });
    return response;
}
