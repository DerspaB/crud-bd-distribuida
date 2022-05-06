import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { PersonaBusiness } from '../../actions/personaBusiness';
import { usePersona } from '../../context/usePersona';

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

export function PersonaModal() {
    const { state } = usePersona()
    const { personaCurrent, isModalOpen } = state
    const { handleOpenModal, handleChangePersona } = PersonaBusiness()

    return (
        <Modal
            open={isModalOpen}
            onClose={() => handleOpenModal(false)}
        >
            <Box sx={style}>
                <Typography style={{ marginBottom: '30px', marginTop: '10px' }} id="modal-modal-title" variant="h4" component="h2">
                    {personaCurrent.id === "" ? "Agregar Persona" : "Editar Persona"}
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <TextField name='nombre' value={personaCurrent.nombre} onChange={handleChangePersona} fullWidth label="Nombre" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name='apellido' value={personaCurrent.apellido} onChange={handleChangePersona} fullWidth label="Apellido" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name='email' value={personaCurrent.email} onChange={handleChangePersona} fullWidth label="Email" type={'email'} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name='telefono' value={personaCurrent.telefono} onChange={handleChangePersona} fullWidth label="Telefono" type={'number'} variant="outlined" />
                    </Grid>
                </Grid>

                <Button style={{ marginTop: '20px', background: '#3dbc07' }} variant='contained'>Guardar</Button>
            </Box>
        </Modal>
    );
}
