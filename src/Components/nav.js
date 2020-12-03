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
                    <div style={{marginLeft:'3%'}}>
                        <Link className='navStyle' to='/'>
                            <Button color="inherit" style={{ width:"100px"}}>Home</Button>
                        </Link>
                        <Link className='navStyle' to='/price'>
                            <Button color="inherit" style={{ width:"100px"}}>Price</Button>
                        </Link>
                        <Link className='navStyle' to='/about'>
                            <Button color="inherit" style={{ width:"100px"}}>About</Button>
                        </Link>
                        <Link className='navStyle' to='/contact'>
                            <Button color="inherit" style={{ width:"100px"}}>Contact</Button>
                        </Link>
                    </div>        
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
export default nav;