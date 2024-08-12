// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  // ** Var

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Creado por  `}
       
        <Link target='_blank' href='https://4bprogramming.com'>
          4B programming
        </Link>
      </Typography>
    
    </Box>
  )
}

export default FooterContent
