export interface PanelOptionsProps  {
    rute:string,
    image:string,
    description: string
}

export interface ItemListProps extends PanelOptionsProps {
    imageSize?:string | number,
} 
