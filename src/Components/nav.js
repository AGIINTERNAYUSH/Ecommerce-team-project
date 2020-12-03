import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

function nav(){
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                    <div className='logo'/>
                    </Typography>
                    <div style={{marginLeft:'15%'}}>
                        <Link className='navStyle' to='/'>
                            <Button color="inherit" style={{ width:"150px"}}>Dashboard</Button>
                        </Link>
                        <Link className='navStyle' to='/orders'>
                            <Button color="inherit" style={{ width:"150px"}}>Orders</Button>
                        </Link>
                        <Link className='navStyle' to='/products'>
                            <Button color="inherit" style={{ width:"150px"}}>Products</Button>
                        </Link>
                        <Link className='navStyle' to='/clients'>
                            <Button color="inherit" style={{ width:"150px"}}>Clients</Button>
                        </Link>
                    </div>        
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
export default nav;