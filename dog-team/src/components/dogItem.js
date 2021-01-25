import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PetsIcon from '@material-ui/icons/Pets';

// Style
const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: '20px',
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: 'inherit',
  },
  li: {
    listStyle: 'none',
  },
  dogItem: {
    width: '300px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textDecoration: 'none',
    paddingTop: '10px',
  },
}));

function DogItem({item}) {
  const classes = useStyles();

  return (
    <Link to={{pathname: `/dog/${item}`}} className={classes.link}>
      <li  className={classes.li}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={4}>
                  <Avatar >
                    <PetsIcon />
                  </Avatar>
                </Grid>
                <Grid item xs={8}>
                  <Typography className={classes.dogItem}>
                    {item}
                  </Typography>
                </Grid>
        </Grid>
        </Paper>
      </li>
    </Link>
  )
}

export default DogItem;
