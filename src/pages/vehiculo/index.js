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

const rows = [
  {
    age: 2022,
    status: 'Refinanciado',
    date: 'Explorer',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'Ford',
    designation: 'Acesor 1'
  },
  {
    age: 2023,
    date: 'Forrunner',
    salary: '$23896.35',
    status: 'Activo',
    name: 'Margaret Bowers',
    email: 'Toyota',
    designation: 'Acesor 2'
  },
  {
    age: 2020,
    date: 'Centra',
    name: 'Minnie Roy',
    status: 'Secuestrado',
    salary: '$18991.67',
    email: 'Nissan',
    designation: 'Acesor 1'
  },
  {
    age: 2024,
    date: 'Corola',
    status: 'Secuestrado',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: 'Toyota',
    designation: 'Acesor 3'
  },
  {
    age: 2019,
    status: 'mora',
    date: 'Fiesta',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Acesor 4',
    email: 'Ford'
  },
  {
    age: 2018,
    date: 'Palio',
    salary: '$10909.52',
    name: 'Adeline Day',
    status: 'Activo',
    email: 'Fiat',
    designation: 'Acesor 3'
  },
  {
    age: 2020,
    status: 'Refinanciado',
    date: 'Elantra',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Acesor 2',
    email: 'hyundai'
  },
  {
    age: 2015,
    date: 'Aveo',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'Activo',
    designation: 'Acesor 1',
    email: 'Chevrolet'
  }
]

const statusObj = {
  mora: { color: 'info' },
  Secuestrado: { color: 'error' },
  Refinanciado: { color: 'primary' },
  resigned: { color: 'warning' },
  Activo: { color: 'success' }
}


function Vehiculo() {
  return (
    <Card>
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
            <TableCell>Persona</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Año</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Estatus</TableCell>
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
              <TableCell>{row.salary}</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}

export default Vehiculo