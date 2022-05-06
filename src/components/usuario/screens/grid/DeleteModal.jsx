import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { UsuarioBusiness } from '../../actions/usuarioBusiness';
import { useUsuario } from '../../context/useUsuario';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    textAlign: 'center',
    padding: '20px'
};

export function DeleteModal() {
    const { state } = useUsuario()
    const { handleDeleteModal } = UsuarioBusiness()

    return (
        <Modal
            open={state.isDeleteModal}
            onClose={() => handleDeleteModal(false)}
        >
            <Box sx={style}>
                <Typography style={{ marginBottom: '30px', marginTop: '10px' }} id="modal-modal-title" variant="h4" component="h2">
                    Esta seguro de eliminar?
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <Button fullWidth onClick={() => handleDeleteModal(false)} style={{ marginTop: '20px', background: 'red' }} variant='contained'>Cancelar</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button fullWidth style={{ marginTop: '20px', background: '#3dbc07' }} variant='contained'>Aceptar</Button>
                    </Grid>
                </Grid>


            </Box>
        </Modal>
    );
}
