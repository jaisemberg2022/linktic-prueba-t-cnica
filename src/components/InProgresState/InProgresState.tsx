import { Button, Container, Stack } from '@mui/material'
import EmptyState from '../EmptyState/EmptyState'
import { useNavigate } from 'react-router-dom';

const InProgresState = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/Index`, {
            preventScrollReset: true,
        });
    }
    return (
        <Container maxWidth="lg" sx={{
            height: ("calc(100vh - 32px)"),
            pt: 10
        }}>
            <EmptyState
                title='!Pagina en desarrollo¡'
                subtitle='Estamos trabajando para mejorar esta sección. ¡Vuelve pronto!'
                url='src/assets/images/buildIdea.avif'
                extraComponent={
                    <Stack py={2}>
                        <Button variant='contained' color='primary' size='small' onClick={redirect}>Volver</Button>
                    </Stack>
                }
            />
        </Container>
    )
}

export default InProgresState