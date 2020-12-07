import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

function nav(){
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" >
                    <div className='logo'/>
                    </Typography>
                    <div style={{marginLeft:'15%'}}>
                        <Link className='navStyle' to='/admin'>
                            <Button color="inherit" style={{ width:"150px"}}>Dashboard</Button>
                        </Link>
                        <Link className='navStyle' to='/admin/orders'>
                            <Button color="inherit" style={{ width:"150px"}}>Orders</Button>
                        </Link>
                        <Link className='navStyle' to='/admin/products'>
                            <Button color="inherit" style={{ width:"150px"}}>Products</Button>
                        </Link>
                        <Link className='navStyle' to='/admin/clients'>
                            <Button color="inherit" style={{ width:"150px"}}>Clients</Button>
                        </Link>
                    </div>        
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
export default nav;