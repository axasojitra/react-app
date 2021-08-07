import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,

    };
    props.onAddMeetup(meetupData);

    }
    return (
    <Card>
        <form className={ classes.form } onSubmit={submitHandler}>
            <div className={ classes.control }>
                <p >Meetup Title</p>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={ classes.control }>
                <p >Meetup Image</p>
                <input type='url' required id='image'  ref={imageInputRef}/>
            </div>
            <div className={ classes.control }>
                <p >Address</p>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={ classes.control }>
                <p >Description</p>
                <textarea rows='5' required id='description' ref={descriptionInputRef}/>
            </div>
            <div className={ classes.actions }>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    );

}

export default NewMeetupForm;