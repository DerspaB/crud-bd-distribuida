import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { ProductoBusiness } from '../../actions/productoBusiness';
import { useProducto } from '../../context/useProducto';

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

export function ProductoModal() {
    const { state } = useProducto()
    const { productoCurrent, isModalOpen } = state
    const { handleOpenModal, handleChangeProducto } = ProductoBusiness()

    return (
        <Modal
            open={isModalOpen}
            onClose={() => handleOpenModal(false)}
        >
            <Box sx={style}>
                <Typography style={{ marginBottom: '30px', marginTop: '10px' }} id="modal-modal-title" variant="h4" component="h2">
                    {productoCurrent.id === "" ? "Agregar Producto" : "Editar Producto"}
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <TextField
                            name='nombreProducto'
                            value={productoCurrent.nombreProducto}
                            onChange={handleChangeProducto}
                            fullWidth
                            label="Nombre Producto"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='precio'
                            value={productoCurrent.precio}
                            onChange={handleChangeProducto}
                            fullWidth
                            label="Precio"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            name='categoria'
                            value={productoCurrent.categoria}
                            onChange={handleChangeProducto}
                            fullWidth
                            label="Categoria"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

                <Button style={{ marginTop: '20px', background: '#3dbc07' }} variant='contained'>Guardar</Button>
            </Box>
        </Modal>
    );
}
