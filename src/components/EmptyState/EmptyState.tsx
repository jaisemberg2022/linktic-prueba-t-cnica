import { Stack, Typography } from "@mui/material"
import { EmptyStateProps } from "./interface"

const EmptyState = (props: EmptyStateProps) => {
  const {
    type = "empty",
    subtitle = "",
    title = "",
    url,
    extraComponent,
  } = props;
  const tipoImagen:string = type === "empty" ? "EmptyState" : "Box";
  const imagenPorDefecto:string = `url('public/assets/images/${tipoImagen}.svg')`
  const imagenFinal: string = url ? `url(${url})` : imagenPorDefecto

  console.log(imagenFinal)
  return (
    <Stack height="100%" border="1px solid" borderColor="grey.200" flex={1} direction={"column"} justifyContent={"space-between"}>
      <Stack height="80%" sx={{
        backgroundImage: imagenFinal,
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
      }}>

      </Stack>
      <Stack flex={1} justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography textAlign="center" color="text.primary" variant="h6">
          {
            title.length > 0 ? title : (type === "empty" ? "!Vacio por el momento¡" : "!Sin informacion relacionada¡")
          }
        </Typography>
        <Typography textAlign="center" color="text.secondary" variant="body2">
          {
            subtitle.length > 0 ? subtitle : (type === "empty" ? "!Utiliza los filtros para consultar informacion¡" : "!No existe informacion relacionada con los filtros ingresados¡")
          }
        </Typography>
          {
            extraComponent && extraComponent
          }
      </Stack>
    </Stack>
  )
}

export default EmptyState