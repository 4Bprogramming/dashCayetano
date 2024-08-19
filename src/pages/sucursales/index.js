import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'

const rows = [
  {
    age: 27,
    status: 'Mantenimiento',
    date: '09/27/2018',
    name: 'Buenos Aires',
    salary: '$19586.23',
    email: 'hols@hola.com',
    designation: 'Jose luis',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'Abierta',
    name: 'Mendoza',
    email: 'hols@hola.com',
    designation: 'Juan Carlos',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Santa Fe',
    status: 'Cerrada',
    salary: '$18991.67',
    email: 'hols@hola.com',
    designation: 'Carlos',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'Reubicandose',
    salary: '$19252.12',
    name: 'Tucumán',
    email: 'hols@hola.com',
    designation: 'Jose',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 66,
    status: 'Proximamente',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'La Pampa',
    designation: 'Yolanda',
    email: 'hols@hola.com',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Córdoba',
    status: 'Abierta',
    email: 'hols@hola.com',
    designation: 'Samuel',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 61,
    status: 'Mantenimiento',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Entre Ríos',
    designation: 'Guillermo',
    email: 'hols@hola.com',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Jujuy',
    status: 'Abierta',
    designation: 'Ismael',
    email: 'hols@hola.com',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  }
]

const statusObj = {
  Proximamente: { color: 'info' },
  Cerrada: { color: 'error' },
  Mantenimiento: { color: 'primary' },
  Reubicandose: { color: 'warning' },
  Abierta: { color: 'success' }
}


function Sucursales() {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Dirección</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>estatus</TableCell>
              <TableCell>Accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
               
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell styles={{cursor : "pointer"}}>{row.edit}, {row.delete}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default Sucursales