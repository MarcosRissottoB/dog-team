import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FAFAFA',
    height: 'auto',
    margin: '20px',
    justifyContent: 'center',
  }
}));

function Content({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container} >
        {children}
      </Container>
    </div>
  )
};

export default Content;