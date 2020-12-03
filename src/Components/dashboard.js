import React, { Component } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Grid, Card,CardContent,CardActionArea, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Divider} from '@material-ui/core';

export default class Contact extends Component {

    render(){
        return(
            <div className="container">
                <DashboardIcon style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', fontSize:"25px"}} /><h2 style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', marginLeft:"10px"}}>Dashboard</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <h3 style={{textAlign:'center', color:'#0D0D9C'}}>Overview of Incomming Requests</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardActionArea>
                                        <h3 style={{textAlign:'center', color:'#0D0D9C', fontSize:'15px'}}>Client Request</h3>
                                        <CardContent>
                                        <TableContainer>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                            <TableRow >
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>S.N.</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>Company</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>Product Name</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                <TableCell >1.</TableCell>
                                                <TableCell >Mynasdfasdf</TableCell>
                                                <TableCell >Jackeasdfasdfasdt</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                <TableCell >2.</TableCell>
                                                <TableCell >Masd</TableCell>
                                                <TableCell >Jackeas</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                <TableCell >3.</TableCell>
                                                <TableCell >Mynasdfasdf</TableCell>
                                                <TableCell >Jackeasdfasdfasdt</TableCell>
                                                </TableRow>
                                                
                                                <TableRow>
                                                <TableCell >4.</TableCell>
                                                <TableCell >Masd</TableCell>
                                                <TableCell >Jackeas</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                <TableCell >5.</TableCell>
                                                <TableCell >Masd</TableCell>
                                                <TableCell >Jackeas</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardActionArea>
                                        <h3 style={{textAlign:'center', color:'#0D0D9C', fontSize:'15px'}}>Order Request</h3>
                                        <CardContent>
                                        <TableContainer>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                            <TableRow >
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>S.N.</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>Customer</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>Product Name</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#2910B7'}}>Quantity</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                <TableCell >1.</TableCell>
                                                <TableCell >Mynasdfasdf</TableCell>
                                                <TableCell >Jackeasdfasdt</TableCell>
                                                <TableCell >5</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                <TableCell >2.</TableCell>
                                                <TableCell >Masd</TableCell>
                                                <TableCell >Jackeas</TableCell>
                                                <TableCell >10</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                <TableCell >3.</TableCell>
                                                <TableCell >Mynasdfasdf</TableCell>
                                                <TableCell >Jackeasdfasdt</TableCell>
                                                <TableCell >1</TableCell>
                                                </TableRow>
                                                
                                                <TableRow>
                                                <TableCell >4.</TableCell>
                                                <TableCell >Masd</TableCell>
                                                <TableCell >Jackeas</TableCell>
                                                <TableCell >9</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                <TableCell >5.</TableCell>
                                                <TableCell >Masd</TableCell>
                                                <TableCell >Jackeas</TableCell>
                                                <TableCell >4</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid> 
                        
                        
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardActionArea>
                                <h4 style={{marginLeft:'20px', color:'#0D0D9C', fontWeight:'normal'}}>Today's Total Sales:</h4>
                                <h1 style={{color:'#0C077D', textAlign:'center', fontSize:'40px', fontFamily:'Lucida Console'}}>Rs 25,789</h1>
                                <CardContent>
                                    <Divider style={{marginTop:'-20px'}}/>
                                    <h3 style={{ color:'#0D0D9C', fontSize:'15px'}}>24 Total Orders</h3>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{marginTop:'20px'}}>
                            <CardActionArea>
                                <h4 style={{marginLeft:'20px', color:'#0D0D9C', fontWeight:'normal'}}>General Statistics</h4>
                                <h1 style={{color:'#0C077D', textAlign:'center', fontSize:'30px', fontFamily:'Lucida Console'}}>157</h1>
                                <CardContent>
                                    <h3 style={{ color:'#0D0D9C', textAlign:'center', fontSize:'15px', marginTop:'-25px'}}>Products on Sale</h3>
                                    <Divider style={{}}/>
                                    <h1 style={{color:'#0C077D', textAlign:'center', fontSize:'30px', fontFamily:'Lucida Console'}}>49</h1>
                                    <h3 style={{ color:'#0D0D9C', textAlign:'center', fontSize:'15px', marginTop:'-10px'}}>This month</h3>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
