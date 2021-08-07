import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
      <Layout>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupsPage />
        </Route>
      </Layout>
  );
}
export default App;