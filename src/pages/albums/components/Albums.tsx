import { useEffect, useState } from "react"
import { getAlbums } from "../services/AlbumsService"
import Filtercomponent from "./Filtercomponent";
import { Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { AlbumInfo } from "../interface/AlbumsIntrface";

const Albums = () => {

  const [data, setData] = useState<AlbumInfo[]>([])
  // const [dataYaconsultada, setConsultada] = useState<boolean>(true)
  const [filters, setfilters] = useState<AlbumInfo>({})

  const fetchAlbums = async (filters: AlbumInfo) => {
    const response = await getAlbums(filters);
    if (response && response.data) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchAlbums(filters)
  }, [data])

  return (
    <>
      <Filtercomponent onClickButton={(data) => setfilters(data)} />
      <Container maxWidth="xl">
        <Stack py={1}>
          {
            data.length > 0 ? 
              <TableContainer component={Paper} sx={{ maxHeight: "calc(100vh - 140px)" }}>
                <Table size="small">
                  <TableHead>
                    <TableCell align="center">UserId</TableCell>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Title</TableCell>
                  </TableHead>
                  <TableBody>
                    {
                      data.map((data,index) => (
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
            <Stack height={"calc(100vh - 140px)"} border={"1px solid red"}>
              <p>aaa</p>
            </Stack>
          }
        </Stack>
      </Container>
    </>
  )
}

export default Albums