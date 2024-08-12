// ** MUI Imports
import Grid from '@mui/material/Grid'
import TablesTotal from '../tables/TablesTotal'
import DashboardTable from 'src/views/dashboard/Table'

const TypographyPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <DashboardTable   />
      </Grid>
      
    </Grid>
  )
}

export default TypographyPage
