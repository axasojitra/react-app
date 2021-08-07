import { props } from 'bluebird';
import { createContext, useState } from 'react';

 const FavouritesContext = createContext({
    favourites: [],
    totatFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
 });

export function FavouriteContextProvider() {
    const [ userFavourites, setUserFavourites ] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.Id !== meetupId);
        });
    }

    function itemIsFavouriteHandler(meetupId) {
        userFavourites.some(meetup => meetup.Id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totatFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }
    return (
        <FavouritesContext.Provider value = {context}>
            { props.children }
        </FavouritesContext.Provider>
    );
}

export default FavouritesContext;