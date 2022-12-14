import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
            <Typography variant="h6" fontWeight={100}>
                Online Friends
            </Typography>    
                <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
                    />
                </AvatarGroup>
            <Typography variant="h6" fontWeight={100}>
                Latest Photos
            </Typography> 
            <ImageList>
                <ImageListItem >

                </ImageListItem>
            </ImageList>
        </Box>
    </Box>
    );
}

export default Rightbar