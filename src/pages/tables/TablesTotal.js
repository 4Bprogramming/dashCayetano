// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableCustomized from 'src/views/tables/TableCustomized'

const TablesTotal = () => {
  return (
    <Grid container spacing={6}>
      
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ANALISIS GENERAL' titleTypographyProps={{ variant: 'h6' }} />
          <TableCustomized />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ANALISIS MENSUAL' titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
     
     
    </Grid>
  )
}

export default TablesTotal
