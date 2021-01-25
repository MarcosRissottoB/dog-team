import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';

// Style
const useStyles = makeStyles((theme) => ({
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
    underline: 'none',
  }
}));

function DogPictures({id, dogImages, action}) {
  const classes = useStyles();
  console.log('DogPictures dogImages', dogImages);

  return (
    <div className={classes.rootImages}>
    <GridList cellHeight={160} className={classes.gridList} cols={2}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div">Images of the breed</ListSubheader>
      </GridListTile>
      {dogImages ? 
        dogImages.map((tile) => (
          <GridListTile key={uuid()} cols={tile.cols || 1}>
            <img src={tile} alt={id} />
            <GridListTileBar
              style={{textTransform: 'capitalize'}}
              title={id}
              actionIcon={
                <Link to={`/team?url=${tile}?action=${action}`} className={classes.link}>
                    <IconButton aria-label={`info about ${tile}`} className={classes.icon}>
                      { action === 'add' ? <AddAPhotoIcon /> : <DeleteIcon /> }
                    </IconButton>
                  </Link>
              }
            />
          </GridListTile>
        ))
        : <p>No images available</p>
      }
    </GridList>
  </div>
  )
}

export default DogPictures;
