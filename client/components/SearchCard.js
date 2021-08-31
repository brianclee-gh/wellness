import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSol} from '@fortawesome/free-solid-svg-icons';
import { faStar as faReg} from '@fortawesome/free-regular-svg-icons';
import stylesModal from '../styles/Modal.module.css';
import Modal from "react-modal";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: 261,
    maxHeight: 380,
    height: 357,
    borderRadius: 30,
    backgroundColor: '#A3B3A9',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
    margin: '3% 3% 3% 3%',
  },
  media: {
    height: 140,
  },
  button: {
    color: 'rgba(10, 9, 9, 0.67)',
    backgroundColor: 'rgb(236, 231, 223)',
    margin: '0 auto',
  },
  starButton: {
    fontSize: '10px',
    position: 'absolute',
    top: '4%',
    right: '4%',
    zIndex: '5',
    color: 'rgb(224, 224, 93)',
    cursor: 'pointer',
  },
});

const SearchCard = ({card, handleFavoriteProvider}) => {
  const classes = useStyles();

  let [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Card className={classes.root}>
      <div onClick={() => handleFavoriteProvider(card)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={classes.starButton}>
        <FontAwesomeIcon icon={isHover ? faSol : faReg} size='2x' />
      </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {card.categories[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {card.location.city}, {card.location.state}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          <Button className={classes.button} size="large" color="primary"  onClick={toggleModal}>
            View Provider
          </Button>
          <div className={stylesModal.App}>
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              className={stylesModal.mymodal}
              overlayClassName={stylesModal.myoverlay}
            >
              <CardMedia className={stylesModal.media}
                image={card.image_url}
              />
              <CardContent>
                <Typography gutterBottom variant="h4">
                  {card.name}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                  Category: {card.categories[0].title}
                </Typography>
                <Typography variant="body3" color="textSecondary" component="p">
                  Location: {card.location.city}, {card.location.state}
                </Typography>
              </CardContent>
            </Modal>
      </div></div>
      </CardActions>
    </Card>
  );
}

export default SearchCard;