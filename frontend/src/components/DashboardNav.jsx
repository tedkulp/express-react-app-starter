import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@material-ui/icons/ExitToApp';

const closeDrawer = props => {
    if (props.handleDrawerClose) props.handleDrawerClose();
};

const DashboardNav = props => {
    return (
        <>
            <ListItem button component={Link} onClick={() => closeDrawer(props)} to="/">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} onClick={() => closeDrawer(props)} to="/logout">
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </>
    );
};

export default DashboardNav;
