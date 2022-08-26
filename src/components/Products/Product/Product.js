import React from 'react'
//import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actionTypes from  '../../../redux/action.js'; 
import './Product.css'
import { connect } from 'react-redux';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:'5%'
    },
    media: {
      height: '40vh',
    },
  });
//
function Product2({ product, addToCart, loadCurrentItem }) {
  const history = useHistory();
    const classes = useStyles();

    const handleOnClick = ()=>{
       loadCurrentItem(product);
       history.push(`/product/${product.id}`)
    }
//The history.push() function belongs to react-router-dom and used to move from the current page to another one. It takes the first argument as a destination path and a second argument as the state.

//just for idea - history.push(path, [state]) the format of history.push
    return (
        <Card className = {classes.root}>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
          />

          <CardContent className={classes.cardstyle}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{height: '26vh'}}>
              {product.description}
            </Typography>
            <br/>
            <Typography variant="h5" align='center' color="textPrimary" >
              {product.price}&nbsp;₹
            </Typography>
          </CardContent>
       
        <CardActions >
          <Button  size="small" color="primary" onClick={handleOnClick}>
            View Item
          </Button>
          
          <Button size="small" color="primary" onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    )
}
// want to change state we use dispatch
const mapDispatchToProps = (dispatch) =>{
  console.log(dispatch);
  return {
    
    loadCurrentItem : (item) => dispatch({type : actionTypes.LOAD_CURRENT_ITEM, payload : {item:item}})  , 

    addToCart : (id) => dispatch({type : actionTypes.ADD_TO_CART , payload : {id:id}})

  }
}
export default connect(null,mapDispatchToProps)(Product2) 