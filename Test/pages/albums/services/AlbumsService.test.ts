import axios from "axios";
import { getAlbums } from "../../../../src/pages/albums/services/AlbumsService";
import { AlbumInfo } from "../../../../src/pages/albums/interface/AlbumsIntrface";

jest.mock("axios");

describe("getAlbums", () => {
    
    it("debería devolver los datos filtrados correctamente", async () => {
        const mockResponse = {
            data: [
                { userId: "1", id: "1", title: "" },
                { userId: "1", id: "2", title: "" },
            ],
        };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);
        const filter: AlbumInfo = { userId: "1", id: undefined, title: undefined };
        const response = await getAlbums(filter);
        expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/albums", {
            params: {
                userId: "1",
                id: undefined,
                title: undefined,
            },
        });
        expect(response.data).toEqual(mockResponse.data);
    });

    it("debería lanzar un error si la solicitud falla", async () => {
        const mockError = new Error("Error en la solicitud");
        (axios.get as jest.Mock).mockRejectedValue(mockError);
        const filter: AlbumInfo = { userId: "1", id: undefined, title: undefined };
        await expect(getAlbums(filter)).rejects.toThrow("Error en la solicitud");
    });
});