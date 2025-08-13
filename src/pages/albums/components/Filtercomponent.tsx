import { Fab, Stack, TextField } from '@mui/material'
import { AlbumInfo, FiltercomponentProps } from '../interface/AlbumsIntrface'
import { ChangeEvent, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const Filtercomponent = (props: FiltercomponentProps) => {
  const [filters, setFilter] = useState<AlbumInfo>({
    userId: undefined,
    id: undefined,
    title: undefined,
  })
  const {onClickButton} = props;

  const handdleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFilter({
      ...filters,
      [name]: value.length > 0 ? value : undefined
    })
  }

  return (
    <Stack flex={1} mt={9} py={2} direction="row" justifyContent="end">
      <Stack flexWrap="wrap" px={1} gap={1} direction="row" alignItems="center">
        <TextField slotProps={{
            htmlInput: {
              min: 1,
            },
            inputLabel: {
              shrink: true
            }
          }}
          placeholder='buscar por usuario'
          size='small'
          type='number'
          name='userId'
          label="usuario"
          variant="outlined"
          onChange={handdleChange}
        />
        <TextField slotProps={{
            htmlInput: {
              min: 1,
            },
            inputLabel: {
              shrink:true
            }
         }}
          placeholder='buscar por identificador'
          name='id'
          size='small'
          type='number'
          label="identificador"
          variant="outlined"
          onChange={handdleChange}
        />
        <TextField
           slotProps={{
            inputLabel: {
              shrink:true
            }
          }}
          placeholder='buscar por titulo'
          size='small'
          label="titulo"
          variant="outlined"
          name='title'
          onChange={handdleChange}
        />
        <Fab variant="extended" color="primary"size="medium" onClick={() => onClickButton(filters)}>
          <SendIcon sx={{ mr: 1 }} />
          Buscar
        </Fab>
      </Stack>
    </Stack>
  )
}

export default Filtercomponent