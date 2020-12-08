import React, { Component } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Nav from './nav.js';
import {Grid, Card,CardContent,CardActionArea, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Divider} from '@material-ui/core';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.getdata = this.getdata.bind(this);
        this.state = {
            orderDatas: [],
            productDatas: []
        }
    }
    componentDidMount = () => {
        this.getdata();
    }
    getdata = () => {
        axios.get('http://localhost:5000/database/getProducts')
            .then((response) => {
                const data = response.data;
                this.setState({productDatas:data});
                console.log("Product data has been recieved");
            })
            .catch(() => {
                console.log('Error recieving data');
            });
        
        axios.get('http://localhost:5000/database/getOrders')
            .then((response) => {
                const data = response.data;
                this.setState({orderDatas:data});
                console.log("Order data has been recieved");
            })
            .catch(() => {
                console.log('Error recieving data');
            });
    }
    render(){
        const {orderDatas, productDatas} = this.state;
        var todayDate = new Date();
        var todayMonth = todayDate.getMonth();
        const productThisMonth = productDatas.filter(d => {var date = new Date(d.createdAt);
                                                            var month = date.getMonth();
                                                            return (month == todayMonth);
                                                        });
        var orderData5 = orderDatas;
        if (orderDatas.length > 5){
            orderData5 = orderDatas.slice(0,5);
        }
        var productData5 = productDatas;
        if (productDatas.length > 5){
            productData5 = productDatas.slice(0,5);
        }
        
        return(
            <div>
                <Nav />
            <div className="container">
                <DashboardIcon style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', fontSize:"25px"}} /><h2 style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', marginLeft:"10px"}}>Dashboard</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <h3 style={{textAlign:'center', color:'#0D0D9C'}}>Overview of Incomming Requests</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Link className='navStyle' to='/admin/client-request'>
                                    <Card>
                                        <CardActionArea>
                                            <h3 style={{textAlign:'center', color:'#0D0D9C', fontSize:'15px'}}>Client Request</h3>
                                            <CardContent>
                                            <TableContainer>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                <TableRow >
                                                    <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>S.N.</TableCell>
                                                    <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Company</TableCell>
                                                    <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Product Name</TableCell>
                                                </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                {productData5.map((items,index)=>
                                                    <TableRow>
                                                    <TableCell >{index+1}</TableCell>
                                                    <TableCell >{items.company_name}</TableCell>
                                                    <TableCell >{items.product_name}</TableCell>
                                                    </TableRow>
                                                )}
                                                </TableBody>
                                            </Table>
                                            </TableContainer>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Link className='navStyle' to='/admin/order-request'>
                                <Card>
                                    <CardActionArea>
                                        <h3 style={{textAlign:'center', color:'#0D0D9C', fontSize:'15px'}}>Order Request</h3>
                                        <CardContent>
                                        <TableContainer>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                            <TableRow >
                                                <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>S.N.</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Customer</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Product Name</TableCell>
                                                <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Quantity</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {orderData5.map((items,index)=>
                                                    <TableRow>
                                                    <TableCell >{index+1}</TableCell>
                                                    <TableCell >{items.customer_name}</TableCell>
                                                    <TableCell >{items.product_name}</TableCell>
                                                    <TableCell >{items.quantity}</TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                </Link>
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
                                                <h1 style={{color:'#0C077D', textAlign:'center', fontSize:'30px', fontFamily:'Lucida Console'}}>{productDatas.length}</h1>
                                <CardContent>
                                    <h3 style={{ color:'#0D0D9C', textAlign:'center', fontSize:'15px', marginTop:'-25px'}}>Products on Sale</h3>
                                    <Divider style={{}}/>
                                    <h1 style={{color:'#0C077D', textAlign:'center', fontSize:'30px', fontFamily:'Lucida Console'}}>{productThisMonth.length}</h1>
                                    <h3 style={{ color:'#0D0D9C', textAlign:'center', fontSize:'15px', marginTop:'-10px'}}>This month</h3>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
            </div>
        )
    }
}
