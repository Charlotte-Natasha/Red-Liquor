import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Collections, ContactPage, DarkMode, Reviews } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Homepage'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#about'>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='About'/>
                            </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#gallery'>
                            <ListItemIcon>
                                <Collections/>
                            </ListItemIcon>
                            <ListItemText primary='Gallery'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#contacts'>
                            <ListItemIcon>
                                <ContactPage/>
                            </ListItemIcon>
                            <ListItemText primary='Contact'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#friends'>
                            <ListItemIcon>
                                <Reviews/>
                            </ListItemIcon>
                            <ListItemText primary='Friends'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#reviews'>
                            <ListItemIcon>
                                <DarkMode/>
                            </ListItemIcon>
                                <Switch/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar