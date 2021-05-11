import React from 'react'
import {Grid,Paper,Avatar,Button}from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import MailIcon from '@material-ui/icons/Mail';

const Profile=()=>{
const paperStyle={padding:40,height:'60vh',width:270,margin:"20px auto",background:'#c5cae9'}
const btnStyle={margin:'6px 0'}
const divstyle={color:'grey'}
return(
    <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar fontsize={60} icon="user" />
            </Grid>
            <div style={divstyle}>Flo_tyx</div>
            <h4>Florence Tiong</h4>
            <h5>101 Followers </h5>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            }}>
        <LocationOnOutlinedIcon />
        <div>Malaysia</div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            }}>
        <CakeOutlinedIcon/>
        <div>32/13/2020</div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            }}>
        <MailIcon/>
        <div>ABC123@gmail.com</div>
        </div>
        <Button variant="contained" type='submit' color='#3f51b5' style={btnStyle}fullWidth>Edit Profile </Button>
    </Paper>
    </Grid>  
)
}
export default Profile