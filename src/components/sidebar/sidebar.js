import * as React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../static/css/sidebar.css'
import SidebarBottom from './sidebar-bottom';


function Sidebar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const list = () => (
        <div style={{ width: 550 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            <List>
                {['Home', 'About', 'Resume', 'Contact'].map((text) => (
                    <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                        <ListItemText>
                            <Typography className="sidebar-item">
                                {text}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <AppBar position="static" sx={{ height: 90, fontSize: 20, backgroundColor: '#2C3E50' }}>
                <Toolbar className='toolbar'>
                    <IconButton sx={{ paddingLeft: '0' }} edge="start" color="inherit" aria- label="menu" size="large" onClick={toggleDrawer}>
                        <MenuIcon sx={{ fontSize: 50, color: '#fff', paddingLeft: '0' }} />
                    </IconButton>
                    <div className="div-name">
                        <Typography variant="h4"><span className='name'>Inusha Pandey</span></Typography>
                        <div className='profile-photo'>
                            <img
                                src="/Inusha.jpg"
                                alt="Profile"
                                className="profile-pic"
                            />
                        </div>

                    </div>
                </Toolbar>
            </AppBar >
            <Drawer sx={{ fontSize: 30 }} anchor="left" open={open} onClose={toggleDrawer}>
                <div className='sidebar-items'>
                    {list()}
                </div>
                <SidebarBottom />
            </Drawer>
        </div >
    );
}


export default Sidebar;
