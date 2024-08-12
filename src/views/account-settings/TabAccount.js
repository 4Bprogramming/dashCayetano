// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
           
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Nombre' placeholder='Nombre' defaultValue='Nombre' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Apellido' placeholder='Apellido' defaultValue='Apellido' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='example@example.com'
              defaultValue='example@example.com'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Select label='Role' defaultValue='admin'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='cajero'>Cajero</MenuItem>
                <MenuItem value='auditor'>Auditor</MenuItem>
                <MenuItem value='prestamista'>Prestamista</MenuItem>
                <MenuItem value='cobrador'>Cobrador</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label='Status' defaultValue='active'>
                <MenuItem value='active'>Activo</MenuItem>
                <MenuItem value='inactive'>Inactivo</MenuItem>
                <MenuItem value='pending'>Pendiente</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Sede' placeholder='Mendoza' defaultValue='Mendoza' />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Crear
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Resetear
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
