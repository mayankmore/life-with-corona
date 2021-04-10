import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from './Context';

const styles = {
    padding: 10,
    margin: 5,
}

const Notifications = () => {
  const { answerCall, call, callAccepted, declineCall } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h2 style = {styles}>{call.name || 'Anonymous'} is calling:</h2>

          <Button variant="outlined" color="primary" onClick={answerCall} style = {styles}>
            Answer
          </Button>
          <Button variant="outlined" color="secondary" onClick={declineCall} style = {styles}>
            Decline
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
