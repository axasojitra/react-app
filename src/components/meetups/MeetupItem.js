import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import FavouritesContext from '../../store/Favourites-context';

function MeetupItem(props) {
    const favouriteCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);
    function toggleFavouriteStatusHandler() {
        if(itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id);
        } else {
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description,
            });
        }

    }
    return(
        <div className={ classes.items }>
            <Card>
            <div className={ classes.image }>
                <img src={ props.image } alt={ props.title }/>
            </div>
            <div className={ classes.content }>
                <h2>{ props.title }</h2>
                <address>{ props.address }</address>
                <p>{ props.discription }</p>
            </div>
            <div className={ classes.actions }>
                <button onClick={toggleFavouriteStatusHandler}>
                    { itemIsFavourite ? 'Remove From Favourite' : 'Add To Favourite' }
                </button>
            </div>
            </Card>
            <br></br>
        </div>
    );
}

export default MeetupItem;