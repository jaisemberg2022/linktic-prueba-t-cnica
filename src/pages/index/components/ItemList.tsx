import {  Card, CardActions, CardContent, CardMedia, IconButton, Stack, styled, Typography, useTheme } from '@mui/material';
import { ItemListProps } from '../interface/Index'
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';

const StyledCard = styled(Card)({
    transition: "transform .2s",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ":hover": {
        transform: "scale(1.1)",
    },
});

const ItemList = (props: ItemListProps) => {
    const { 
        image, 
        rute, 
        description, 
        imageSize = 170
    } = props;
    const theme = useTheme()
    const [propsDefinition, setPropsDefinition] = useState(false)
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/${rute}`, {
            preventScrollReset: true,
        });
    };

    return (
        <StyledCard 
            elevation={propsDefinition ? 12 : 3} 
            onMouseOver={() => setPropsDefinition(true)}
            onMouseLeave={() => setPropsDefinition(false)}
            >
            <CardMedia
                component="img"
                height={imageSize}
                image={image}
            />
            <CardContent>
                <Typography textAlign="center" gutterBottom variant="h5" color={propsDefinition ? "primary" : "text.primary"}>{rute}</Typography>
                <Typography textAlign="justify" variant="subtitle2" color={propsDefinition ? theme.palette.grey[500] : "text.secondary"}>{description}</Typography>
            </CardContent>
            <CardActions
                sx={{
                    marginTop: "auto",
                }}
            >
                <Stack flex={1} direction="row" justifyContent="center">
                    <IconButton size='large' color={propsDefinition ? "primary" :"default"} onClick={redirect} >
                        <AddCircleOutlineIcon fontSize='large' />
                    </IconButton>
                </Stack>
            </CardActions>
        </StyledCard>
    );
};

export default ItemList;