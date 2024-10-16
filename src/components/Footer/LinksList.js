import React from 'react'    
import {Grid, List, ListItemIcon, ListItem, ListItemText} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function LinksList({data}) {
  return (
    <Grid item > 
  
            <List dense={false}>
            {data.map((link, index)=>(
                <ListItem key={index} sx={{color:"#fff"}}>
                <ListItemIcon sx={{minWidth:"20px"}}>
                    <ArrowForwardIosIcon sx={{color:"#fff",fontSize:".875rem"}} />
                </ListItemIcon>
                <ListItemText
                    primary={link} 
                />
                </ListItem>
            ))}
            </List>
     
    </Grid> 
  )
}

export default LinksList