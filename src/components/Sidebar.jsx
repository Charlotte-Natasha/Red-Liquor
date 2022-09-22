import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Collections, ContactPage, Reviews } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <Box flex={1} bgcolor='green' p={2} sx={{display:{xs:'none', sm:'block'}}}>
            <List>
                <ListItem>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Homepage'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component='a' href='#about'>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary='About'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component='a' href='#gallery'>
                        <ListItemIcon>
                            <Collections/>
                        </ListItemIcon>
                        <ListItemText primary='Gallery'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component='a' href='#contacts'>
                        <ListItemIcon>
                            <ContactPage/>
                        </ListItemIcon>
                        <ListItemText primary='Contact'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component='a' href='#reviews'>
                        <ListItemIcon>
                            <Reviews/>
                        </ListItemIcon>
                        <ListItemText primary='Reviews'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar