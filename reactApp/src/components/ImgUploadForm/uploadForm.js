import React, { useState } from 'react';
import ProgressBar from '../ImgProgressBar/ProgressBar';
import { Typography, Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import useStyles from './styles';

const font =  "'Sora', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    textTransform: "none"
    }
  });

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid image file type (png or jpg)');
    }
  };

  if (!user?.result?.name) {
    return (
      <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          Artists: Please sign in or register a new account to upload images from your machine to the gallery.
        </Typography>
      </Paper>
      </ThemeProvider>
    );
  }

    return (
        <form>
          <h1 className="pageHeader">Artists: Click the button below to upload an image from your machine</h1>
          <label className="image-form">
            <input type="file" onChange={handleChange} />
            <span>+</span>
          </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm