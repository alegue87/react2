import React from 'react';
import LeftDrawer from '../leftDrawer/leftDrawer';
import TopAppBar from '../topAppBar/topAppBar';

export default function LoggedTemplate (props){
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return(
        <div style={{display:"flex", height:'100%', width:'100%', overflow:'hidden'}}>
            <TopAppBar open={open} handleDrawerOpen={handleDrawerOpen}/>
            <LeftDrawer open={open} handleDrawerClose={handleDrawerClose}/>
            {props.children}
        </div>
    )
}