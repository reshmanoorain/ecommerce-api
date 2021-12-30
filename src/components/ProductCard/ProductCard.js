import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./styles.module.css";

function ProductCard(props) {
    const { product } = props;
  return (
    <Card sx={{ maxWidth: 340, margin: "10px 0 0 50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>


          <Typography variant="h6" color="text.secondary">
           Price: ${product.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           Rating: {product.rating.rate}
          </Typography>
          <Typography><button className={styles.button}>Add to cart</button></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default ProductCard;