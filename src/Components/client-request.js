import React, { Component } from 'react';
import axios from 'axios';
import Nav from './nav.js';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import StorageIcon from '@material-ui/icons/Storage';
import { Card,CardContent, TableCell, TableContainer, Button, Table, TableHead, TableRow, TableBody} from '@material-ui/core';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.getdata = this.getdata.bind(this);
        this.state = {
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
    }
    render(){
        const {productDatas} = this.state;
        return(
            <div>
                <Nav />
            <div className="container">
                <StorageIcon style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', fontSize:"25px"}} /><h2 style={{display:'inline-block', verticalAlign:'middle', color:'#0C077D', marginLeft:"10px"}}>Client Incoming Requests</h2>
                <Card>
                    <CardContent>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>S.N.</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Company</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Product Name</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Color</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Size</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Description</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Quantity</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Price</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Image</TableCell>
                                        <TableCell style={{fontWeight:'bold', color:'#0D0D9C'}}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productDatas.map((items,index)=>
                                        <TableRow>
                                            <TableCell >{index+1}</TableCell>
                                            <TableCell >{items.company_name}</TableCell>
                                            <TableCell >{items.product_name}</TableCell>
                                            <TableCell >{items.color}</TableCell>
                                            <TableCell >{items.size}</TableCell>
                                            <TableCell >{items.description}</TableCell>
                                            <TableCell >{items.quantity}</TableCell>
                                            <TableCell >{items.price}</TableCell>
                                            <TableCell >{items.image}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" style={{ fontSize:'10px', fontWeight:'bold', width:'80px', heigt:'40px'}} color="primary" startIcon={<ThumbUpAltIcon style={{fontSize:'15px'}} />}>Accept</Button>
                                                <br />
                                                <br/>
                                                <Button variant="contained" style={{ fontSize:'10px', fontWeight:'bold', width:'80px', heigt:'40px'}} color="secondary" startIcon={<ThumbDownAltIcon style={{fontSize:'15px'}} />}>Reject</Button>
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
