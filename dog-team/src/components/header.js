import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none',
    fontSize: '24px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px'
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            Dog Team
          </Link>
          <Link to="/team" className={classes.link}>
            Team
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
