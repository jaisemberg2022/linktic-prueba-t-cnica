import { useState } from "react"
import { getAlbums } from "../services/AlbumsService"
import Filtercomponent from "./Filtercomponent";
import { Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { AlbumInfo } from "../interface/AlbumsIntrface";
import EmptyState from "../../../components/EmptyState/EmptyState";

const Albums = () => {

  const [data, setData] = useState<AlbumInfo[]>([])
  const [dataConsultada, setConsultada] = useState<boolean>(false)
  const fetchAlbums = async (filters: AlbumInfo) => {
    const response = await getAlbums(filters);
    if (response && response.data) {
      setData(response.data);
      setConsultada(true);
    }
  };
  const dataYaConsultada: boolean = (dataConsultada && data.length === 0);
  return (
    <>
      <Filtercomponent onClickButton={(data) => fetchAlbums(data)} />
      <Container maxWidth="xl">
        <Stack py={1}>
          {
            data.length > 0 ?
              <TableContainer component={Paper} sx={{ maxHeight: "calc(100vh - 140px)" }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">UserId</TableCell>
                      <TableCell align="center">Id</TableCell>
                      <TableCell align="center">Title</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      data.map((data, index) => (
                        <TableRow key={index} >
                          <TableCell align="center">{data.userId}</TableCell>
                          <TableCell align="center">{data.id}</TableCell>
                          <TableCell align="center">{data.title}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
              :
              <Stack height={"calc(100vh - 140px)"} >
                <EmptyState type={!dataYaConsultada ? "empty" : "noResults"} />
              </Stack>
          }
        </Stack>
      </Container>
    </>
  )
}

export default Albums