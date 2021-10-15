import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Image1 from '../assets/img/img1.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
    marginBottom: '1rem'
  },
  media: {
    height: 140,
    width: '100%',
    objectFit: 'cover'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Đùi gà/Dumpstick (kg)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            85.000 vnđ
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
