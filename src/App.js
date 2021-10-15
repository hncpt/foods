import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Table from './components/Table'
import Card from './components/Card'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './App.css';



function App() {

  return (
    <div className="App">
     
        <AppBar position="static" className='app-bar'>
          <Container fixed>
            <Toolbar>
              <Typography variant="h6" className='header' align="center" >
              WELCOME TO POLVIET FOODS AND DRINKS SHOP !!!!
              </Typography>
            </Toolbar>
           </Container>
        </AppBar>
      
     
        <Grid container>
          <Grid item style={{ paddingRight: '1rem' }} xs={4} sm={4} md={4} lg={4} xl={4}>
            <Box mt={2} className='main-bill'>
              <Paper elevation={3} className='bill-title'>
                  <Typography variant="h6">POLVIET FOODS AND DRINKS </Typography>
                  <Typography variant="p" component='p'>Facebook.com/polvietfoodsanddrinks</Typography>
                  <Typography variant="p" component='p'>Fesh-Delivery-Good Price</Typography>
                  <Typography variant="p" component='p' className='hotline'>Hotline: 0903344921 (Mr. Mac) - English</Typography>
                  <Typography variant="p" component='p' className='hotline'>Hotline: 0903737373 (Mrs. Tuyen) - Vietnamese</Typography>

                <Box mt={2}>
                  <TextField id="outlined-basic" label="PUT YOUR NAME-PHONE" variant="outlined" fullWidth={true} />
                </Box>

                <Box mt={2}>
                  <TextField id="outlined-basic" label="PUT YOUR ADDRESS" variant="outlined" fullWidth={true} />
                </Box>

                <Box mt={2}>
                  <Table/>
                </Box>

                <Box mt={2}>
                  <Typography variant="h7">Please take picture of receipt. Message us at fb.com/polvietfoodsanddrinks</Typography>
                  
                </Box>

                <Box mt={2} display='flex' justifyContent='center' border={1}>
                  <IconButton color='primary' aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Paper>              
            </Box>
          </Grid>
        
          <Grid item xs={4} sm={4} md={4} lg={8} xl={8} >
            <Box className='style-card' mt={2} display='flex' flexWrap='wrap' justifyContent='space-between'>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </Box>
          </Grid>
        </Grid>
     
    </div>
  );
}

export default App;





