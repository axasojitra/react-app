import { useContext } from 'react';
import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {
    const favouriteCtx = useContext(FavouritesContext);

    let content;

    if (favouriteCtx.totatFavourites === 0) {
        content = <h2>You Got No Favourites yet...</h2>
    } else {
        content = <MeetupList meetups={ favouriteCtx.favourites }></MeetupList>
    }
    return (
        <section>
            <h1>All Favourites</h1>
            {content}
        </section>

    );
}

export default FavouritesPage;