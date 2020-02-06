import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography>
            COMICS STORE
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
}
