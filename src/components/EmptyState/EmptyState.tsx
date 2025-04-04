import { Stack } from "@mui/material"
import { EmptyStateProps } from "./interface"

const EmptyState = (props: EmptyStateProps) => {
    const {
        subtitle="",
        title="",
        img=""
    } = props;
  return (
    <Stack >
        {subtitle}
        {title}
        {img}
    </Stack>
  )
}

export default EmptyState