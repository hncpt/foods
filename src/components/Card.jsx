import React, { useContext } from 'react'
import { ProductsContext } from '../App'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    width: 245,
    maxHeight: 350,
    marginBottom: '.5rem',
  },
  media: {
    height: 140,
    width: '100%',
    objectFit: 'cover',
  },
})

export default function MediaCard({ desc, image, kg, price, id }) {
  const classes = useStyles()
  const { dispatch } = useContext(ProductsContext)

  function format1(n, currency) {
    return (
      currency +
      n.toFixed().replace(/./g, function (c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c
      })
    )
  }

  return (
    <Card
      className={classes.root}
      onClick={() =>
        dispatch({
          type: 'ADD_PRODUCT',
          payload: { image, desc, price, kg, id },
        })
      }
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            style={{ wordBreak: 'break-word', fontSize: '1rem' }}
          >
            {desc}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {format1(price, 'đ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
