// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

const salesData = [
  {
    stats: '$958',
    title: 'Dolar Oficial',
    color: 'primary',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$1355',
    title: 'Dólar Blue',
    color: 'success',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$1293.2',
    color: 'warning',
    title: 'Dólar Bolsa',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$1311',
    color: 'info',
    title: 'Dólar Cripto',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = () => {
  return (
    <Card>

      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
