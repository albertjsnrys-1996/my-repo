import React from 'react'
import theme from './utils/theme.js';
import {ThemeProvider, createMuiTheme} from "@mui/material/styles";
import { Button } from '@mui/material';
export default function App() {
  return <ThemeProvider theme ={theme}>
    <Button variant='contained' color='primary'>Default </Button>

  </ThemeProvider>
}
