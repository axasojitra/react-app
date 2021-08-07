import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'
import FavouritesContext from '../../store/favourites-context';
function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>All Meets</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            All Favourite Meetups
                            <span className={classes.badge}>{favouritesCtx.totatFavourites}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>Add New Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default MainNavigation;