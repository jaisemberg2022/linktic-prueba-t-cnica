import { AppBar, Toolbar, Typography } from "@mui/material"

const AppBarStyled = () => {
  return (
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      <Toolbar variant="dense" >
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', sm: 'block' } 
          }}
        >
          JSON-Placeholder
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarStyled