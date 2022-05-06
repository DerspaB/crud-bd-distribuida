import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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

export function UsuarioModal() {
    const { state } = useUsuario()
    const { usuarioCurrent, isModalOpen } = state
    const { handleOpenModal, handleChangeUsuario } = UsuarioBusiness()

    return (
        <Modal
            open={isModalOpen}
            onClose={() => handleOpenModal(false)}
        >
            <Box sx={style}>
                <Typography style={{ marginBottom: '30px', marginTop: '10px' }} id="modal-modal-title" variant="h4" component="h2">
                    {usuarioCurrent.id === "" ? "Agregar Usuario" : "Editar Usuario"}
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <TextField
                            name='idPerson'
                            value={usuarioCurrent.idPerson}
                            onChange={handleChangeUsuario}
                            fullWidth
                            label="ID Persona"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='nickname'
                            value={usuarioCurrent.nickname}
                            onChange={handleChangeUsuario}
                            fullWidth
                            label="Nickname"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='password'
                            value={usuarioCurrent.password}
                            onChange={handleChangeUsuario}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                name='status'
                                label="Status"
                                onChange={handleChangeUsuario}
                                value={usuarioCurrent.status}
                                InputLabelProps={{ shrink: true }}
                            >
                                <MenuItem value={true}>Activo</MenuItem>
                                <MenuItem value={false}>Inactivo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Button style={{ marginTop: '20px', background: '#3dbc07' }} variant='contained'>Guardar</Button>
            </Box>
        </Modal>
    );
}
