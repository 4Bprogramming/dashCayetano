// ** MUI Imports
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
    status: 'Mora',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: '$5.000',
    designation: 'Human Resources Assistant',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'Pagado',
    name: 'Margaret Bowers',
    email: '$3.000',
    designation: 'Nuclear Power Engineer',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'cancelado',
    salary: '$18991.67',
    email: '$2.000',
    designation: 'Environmental Specialist',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'reasignado',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: '$1.000',
    designation: 'Sales Representative',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 66,
    status: 'Vencido',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    email: '$1.000',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adeline Day',
    status: 'Pagado',
    email: '$3.000',
    designation: 'Senior Cost Accountant',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 61,
    status: 'Mora',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    email: '$.000',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'Pagado',
    designation: 'Cost Accountant',
    email: '$1.000',
    edit: <BorderColorIcon />,
    delete: <DeleteIcon />
  }
]

const statusObj = {
  Vencido: { color: 'info' },
  cancelado: { color: 'error' },
  Mora: { color: 'primary' },
  reasignado: { color: 'warning' },
  Pagado: { color: 'success' }
}

function Inversor() {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Inversión</TableCell>
              <TableCell>Fecha de pago</TableCell>
              <TableCell>Valor de Pago</TableCell>
              <TableCell>estatus</TableCell>
              <TableCell>Acciones</TableCell>
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
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.email}</TableCell>

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
                <TableCell styles={{ cursor: 'pointer' }}>
                  {row.edit}, {row.delete}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default Inversor
