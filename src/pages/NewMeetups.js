import axios from "axios";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupsPage() {
    const history = useHistory();
  function addMeetupHandler(meetupData) {
    
    axios
      .post(
        "https://react-getting-started-df278-default-rtdb.firebaseio.com/meetups.json",
        JSON.stringify(meetupData)
      )
      .then(() => {
        history.replace('/');
      })
      .catch((ex) => {
        console.log(ex);
      });
    // fetch(
    //     'https://react-getting-started-df278-default-rtdb.firebaseio.com/meetups.json',
    //     {
    //         Method: 'POST',
    //         body: JSON.stringify(meetupData),
    //         header: {
    //             'Content-type': 'application/jason'
    //         }
    //     }
    // )
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
