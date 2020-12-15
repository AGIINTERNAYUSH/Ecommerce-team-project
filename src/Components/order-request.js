import React, { Component } from 'react';
import axios from 'axios';
import Nav from './nav.js';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import StorageIcon from '@material-ui/icons/Storage';
import { Card,CardContent, TableCell, TableContainer, Button, Table, TableHead, TableRow, TableBody} from '@material-ui/core';

export default class Order_request extends Component {
    constructor(props) {
        super(props);
        this.getdata = this.getdata.bind(this);
        this.state = {
            orderDatas: []
        }
    }
    acceptOrder(e, items) {
        e.preventDefault();
        const id = items._id;
        axios.patch('http://localhost:5000/database/updateOrder/'+id, {"status": "waiting for Delivery"})
                .then(res => console.log(res.data));
        window.location.reload(false);
    }
    rejectOrder(e, items) {
        e.preventDefault();
        const id = items._id;
        axios.patch('http://localhost:5000/database/updateOrder/'+id, {"status": "rejected"})
                .then(res => console.log(res.data));
        window.location.reload(false);
    }
    componentDidMount = () => {
        this.getdata();
    }
    getdata = () => {
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
        const {orderDatas} = this.state;
        const orderReq = orderDatas.filter(d => {return (d.status == "unverified");});
        return(
            <div>
                <Nav />
            <div className="container">
                <StorageIcon style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', fontSize:"25px"}} /><h2 style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', marginLeft:"10px"}}>Incoming Order Requests</h2>
                <Card>
                    <CardContent>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>S.N.</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Customer</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Number</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Product</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Color</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Size</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Quantity</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Price</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Image</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Delivery Address</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderReq.map((items,index)=>
                                        <TableRow>
                                            <TableCell >{index+1}</TableCell>
                                            <TableCell >{items.customer_name}</TableCell>
                                            <TableCell >{items.customer_number}</TableCell>
                                            <TableCell >{items.product_name}</TableCell>
                                            <TableCell >{items.color}</TableCell>
                                            <TableCell >{items.size}</TableCell>
                                            <TableCell >{items.quantity}</TableCell>
                                            <TableCell >{items.price}</TableCell>
                                            <TableCell >{items.image}</TableCell>
                                            <TableCell >{items.delivery_address}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" onClick={(e) => {this.acceptOrder(e, items)}} style={{ fontSize:'10px', fontWeight:'bold', width:'80px', heigt:'40px'}} color="primary" startIcon={<ThumbUpAltIcon style={{fontSize:'15px'}} />}>Accept</Button>
                                                <br />
                                                <br/>
                                                <Button variant="contained" onClick={(e) => {this.rejectOrder(e, items)}} style={{ fontSize:'10px', fontWeight:'bold', width:'80px', heigt:'40px'}} color="secondary" startIcon={<ThumbDownAltIcon style={{fontSize:'15px'}} />}>Reject</Button>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
                
            </div>
            </div>
        )
    }
}
