import { AppBar, Toolbar, Typography,  Stack, Button } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ApiIcon from '@mui/icons-material/Api';
import PageviewIcon from '@mui/icons-material/Pageview';

const AppBarStyled = () => {
  return (
    <AppBar component="nav" position="fixed" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Stack flex={1} justifyContent="space-between" direction="row" >
          <Typography variant="h6">Prueba Técnica Frontend</Typography>
          <Stack direction="row" display="flex" gap={1}>
            <Button size="small" sx={{ color: '#fff' }} LinkComponent={"a"} href="https://github.com/jaisemberg2022/linktic-prueba-t-cnica" endIcon={<GitHubIcon fontSize="small" />}>
              Repositorio
            </Button>
            <Button size="small" sx={{ color: '#fff' }} LinkComponent={"a"} href="https://jsonplaceholder.typicode.com/" endIcon={<ApiIcon fontSize="small"/>}>
              Api origen
            </Button>
            <Button size="small" sx={{ color: '#fff' }} LinkComponent={"a"} href="https://mui.com/" endIcon={<PageviewIcon fontSize="small"/>}>
              Material Ui
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarStyled