import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

// Style
const useStyles = makeStyles((theme) => ({
  div: {
    margin: '5px',
  },
  rootImages: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  img: {
    display: 'block',
    width: '80%',
  },
  icon: {
    color: 'white',
  },
  link: {
    width: '230px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    underline: 'none'
  }
}));

function Breed({id, dogImages}) {
  const classes = useStyles();
  console.log('dogImages', dogImages);

  return (
    <div className={classes.div}>
      {dogImages ? 
        <div className={classes.rootImages}>
          <GridList cellHeight={160} className={classes.gridList} cols={2}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Images of the breed</ListSubheader>
            </GridListTile>
            {dogImages.map((tile) => (
              <GridListTile key={tile} cols={tile.cols || 1}>
                <img src={tile} alt={id} />
                <GridListTileBar
                  style={{textTransform: 'capitalize'}}
                  title={id}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <AddAPhotoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        : <div>
            <Typography variant="h2">
              Not found dog 
            </Typography>
            <Typography >
              Try with the australian breed
            </Typography>
            <Button color="inherit">
              <Link to="/" className={classes.link}>
                Go home
              </Link>
            </Button>
        </div>
      }
    </div>
  )
}

export default Breed;
