import { Container, Grid, Stack } from "@mui/material";
import { RoutesName } from "../data/routesName";
import ItemList from "./ItemList";

export const IndexPage = () => {
  return (
    <Container maxWidth="lg">
      <Stack pt={10} pb={4}>
      <Grid
        container
        spacing={2}
        gap={5}
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {RoutesName.map((props, index) => (
          <Grid
            key={index}
          >
            <ItemList {...props} />
          </Grid>
        ))}
      </Grid>
      </Stack>
    </Container>
  );
};

export default IndexPage;