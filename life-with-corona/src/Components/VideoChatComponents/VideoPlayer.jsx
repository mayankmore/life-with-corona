import React, { useContext } from 'react';
import { Grid, Typography, Paper, Button, makeStyles } from '@material-ui/core';

import { SocketContext } from './Context';

const fullScreen = (user) => {
    const id = document.getElementById(user);
    id.requestFullscreen();
};

const mute = (user, element) => {
    const id = document.getElementById(user);
    const now = document.getElementById(element);
    if (id.muted){
        // console.log(now.textContent);
        now.textContent = 'Mute';
        id.muted = false;
    }
    else{
        now.textContent = 'Un-mute';
        id.muted = true;
    }
};

const useStyles = makeStyles((theme) => ({
  video: {
    width: '570px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  padding: {
      margin: '5px',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  paper: {
    borderRadius: 10,
    padding: '10px',
    border: '1px solid black',
    margin: '10px',
  },
}));


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} id = 'my'/>
          </Grid>
          <Button variant="outlined" color="secondary" className={classes.padding} onClick={() => fullScreen('my')}>
            Full screen
          </Button>
          <Button variant="outlined" color="secondary" id = 'mybtn' className={classes.padding} onClick={() => mute('my', 'mybtn')}>
            Mute
          </Button>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} id = 'user'/>
          </Grid>
          <Button variant="outlined" color="secondary"className={classes.padding} onClick={() => fullScreen('user')}>
            Full screen
          </Button>
          <Button variant="outlined" color="secondary" className={classes.padding} id = 'userbtn' onClick={() => mute('user', 'userbtn')}>
            Mute
          </Button>
        </Paper>
      )}

    </Grid>
  );
};

export default VideoPlayer;
