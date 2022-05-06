import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import { PersonaBusiness } from '../../actions/personaBusiness';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4aabe2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const rows = [
  { id: "1", nombre: 'Jorge', apellido: 'Parrado', email: 'jparrado@uniempresarial.edu.co', telefono: '3185253303' }
];

export function PersonaGrid() {
  const { handleCreateOpenModal, openEdit, handleDeleteModal } = PersonaBusiness()
  return (
    <div>
      <Button onClick={handleCreateOpenModal} variant="contained" style={{ background: '#3dbc07', marginBottom: '0px', zIndex: '0' }}>Crear</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Apellido</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Telefono</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.nombre}</StyledTableCell>
                <StyledTableCell align="center">{row.apellido}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.telefono}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton onClick={() => openEdit(row)} style={{ color: 'black' }} >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteModal(true)} style={{ color: 'red' }}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
