// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

const columns = [
  { id: 'name', label: 'Concepto', minWidth: 170 },
  { id: 'code', label: 'Fecha', minWidth: 100 },
  { id: 'area', label: 'Area', minWidth: 100 },
  {
    id: 'population',
    label: 'Egresos',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Ingresos',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Total',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(2)
  }
]
function createData(name, code,area, population, size) {
  const density = population - size

  return { name, code, area ,population, size, density }
}

const rows = [
  createData('Nombre de la persona', '25/12/2024',"Creditos" ,1324171354, 3287263),
  createData('', '25/12/2024',"Cuotas" ,1403500365, 9596961),
  createData('', '25/12/2024', "Cuotas" ,60483973, 301340),
  createData('', '25/12/2024',"Punitorio" ,327167434, 9833520),
  createData('', '25/12/2024', "Cuotas" ,37602103, 9984670),
  createData('', '25/12/2024', "Cuotas" ,25475400, 7692024),
  createData('', '25/12/2024', "Cuotas" ,83019200, 357578),
  createData('', '25/12/2024', "Punitorio" ,4857000, 70273),
  createData('', '25/12/2024', "Punitorio" ,126577691, 1972550),
  createData('', '25/12/2024', "Cuotas" ,126317000, 377973),
  createData('', '25/12/2024', "Cuotas" ,67022000, 640679),
  createData('', '25/12/2024', "Cuotas" ,67545757, 242495),
  createData('', '25/12/2024', "Seguro" ,146793744, 17098246),
  createData('', '25/12/2024', "Judiciales", 200962417, 923768),
  createData('', '25/12/2024', "Judiciales", 210147125, 8515767)
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
