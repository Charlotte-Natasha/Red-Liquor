import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

const Search = styled("div")({
    background: 'white',
    padding: '0 10px',
    borderRadius: '20px',
    width: '40%'
});

const Icons = styled(Box)(({
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
}));

const UserBox = styled(Box)(({
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
}));

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block' }}}>
                    Red Liquor
                    <SportsBarIcon sx={{display: {xs: 'none', sm: 'block' }}}/>
                </Typography>
                <Search>
                    <InputBase placeholder='Search..'/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications/>
                    </Badge>
                </Icons>
                <UserBox>
                <Avatar sx={{width:30, height:30}}>RL</Avatar>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
