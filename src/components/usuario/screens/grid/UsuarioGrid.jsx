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
import { UsuarioBusiness } from '../../actions/usuarioBusiness';

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
  { id: "1", idPerson: '1', nickname: 'DerspaB', password: '1234567', status: true }
];

export function UsuarioGrid() {
  const { handleCreateOpenModal, openEdit, handleDeleteModal } = UsuarioBusiness()
  return (
    <div>
      <Button onClick={handleCreateOpenModal} variant="contained" style={{ background: '#3dbc07', marginBottom: '0px', zIndex: '0' }}>Crear</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID Persona</StyledTableCell>
              <StyledTableCell align="center">Nickname</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align='center'>
                  {row.idPerson}
                </StyledTableCell>
                <StyledTableCell align="center">{row.nickname}</StyledTableCell>
                <StyledTableCell align="center">{row.password}</StyledTableCell>
                <StyledTableCell align="center">{row.status ? 'Activo' : 'Inactivo'}</StyledTableCell>
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
