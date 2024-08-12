// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

const Trophy = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Button size='small' variant='contained'>
          Dashboard
        </Button>
      </CardContent>
    </Card>
  )
}

export default Trophy
