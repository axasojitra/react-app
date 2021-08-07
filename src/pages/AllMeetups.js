import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from 'react';
import Axios from 'axios';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    Axios.get(
      'https://react-getting-started-df278-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((responce) => {
      const meetups = [];
      for(const key in responce.data) {
        const meetup = {
          id: key,
          ...responce.data[key]
        };
        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
      return responce.json;
    })
    .catch(data => {
      
     
    });

  }, []);
  
      if (isLoading){
        <section>
          <p>Loading...</p>
        </section>
      }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPage;