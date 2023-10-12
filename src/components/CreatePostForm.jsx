import React, {useState} from 'react';
import './CreatePostForm.css';

// change label structure using id and for attributes to help with css

function CreatePostForm() {


    const[activity, setActivity] = useState('');
    const handleActivityChange = (e) => {
        setActivity(e.target.value)
    }
    const[description, setDescription] = useState('');
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const[location, setLocation] = useState('');
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }
    const[weather, setWeather] = useState('');
    const handleWeatherChange = (e) => {
        setWeather(e.target.value)
    }
    const[time, setTime] = useState('');
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }
    const[price, setPrice] = useState('');
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const[type, setType] = useState('');
    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the page from refreshing upon submit
        const newPost = {activity, description, location, time, price, weather, type};
        console.log(newPost)
        setActivity('')
        setDescription('');
        setLocation('');
        setTime('');
        setPrice('');
        setWeather('');
        setType('');
    }


    return (
        <div>
            <form className='newPostForm' name='newPost' onSubmit={handleSubmit}>

                <div className='ActivitySection'>
                    <label>Activity:</label>
                    <input type='text' name='activity' id='activity' placeholder='placeholder' value={activity} onChange={handleActivityChange} maxLength='50' autoComplete='off' required></input>
                </div>
                <br/>

                <div className='DescriptionSection'>
                    <label>Description:</label>
                        <textarea name='description' id='description' placeholder='placeholder' value={description} onChange={handleDescriptionChange} maxLength='1000' required></textarea>
                </div>
                <br/>

                <div className='LocationSection'>
                    <label>Location:</label>
                        <select name='location' id='location' value={location} onChange={handleLocationChange} required>
                            <option value=''>--Select--</option>
                            <option value='ny'>New York, NY</option>
                            <option value='chicago'>Chicago, IL</option>
                            <option value='boston'>Boston, MA</option>
                            <option value='philly'>Philadephia, PA</option>
                            <option value='la'>Los Angeles, CA</option>
                        </select>
                </div>
                <br/>

                <div className='WeatherSection'>
                    <label>
                        Weather:
                        <label>
                            <input type='radio' name='weather' value='sun' onChange={handleWeatherChange} checked={weather==='sun'} required></input>
                            Sun
                        </label>
                        <label>
                            <input type='radio' name='weather' value='cold' onChange={handleWeatherChange} checked={weather==='cold'}></input>
                            Cold
                        </label>
                        <label>
                            <input type='radio' name='weather' value='rain' onChange={handleWeatherChange} checked={weather==='rain'}></input>
                            Rain
                        </label>
                    </label>
                </div>
                <br/>

                <div className='TimeSection'>
                    <label>
                        Time:
                        <label>
                            <input type='radio' name='time' value='one' onChange={handleTimeChange} checked={time==='one'} required></input>
                            1hr
                        </label>
                        <label>
                            <input type='radio' name='time' value='two' onChange={handleTimeChange} checked={time==='two'}></input>
                            2hr
                        </label>
                        <label>
                            <input type='radio' name='time' value='three' onChange={handleTimeChange} checked={time==='three'}></input>
                            3hr
                        </label>
                    </label>
                </div>
                <br/>

                <div className='PriceSection'>
                    <label>
                        Price:
                        <label>
                            <input type='radio' name='price' value='free' onChange={handlePriceChange} checked={price==='free'} required></input>
                            Free
                        </label>
                        <label>
                            <input type='radio' name='price' value='cheap' onChange={handlePriceChange} checked={price==='cheap'}></input>
                            $0-$20
                        </label>
                        <label>
                            <input type='radio' name='price' value='expensive' onChange={handlePriceChange} checked={price==='expensive'}></input>
                            $21-$100
                        </label>
                    </label>
                </div>
                <br/>

                <div className='ActivityTypeSection'>
                    <label>
                        Activity Type:
                        <label>
                            <input type='radio' name='type' value='family' onChange={handleTypeChange} checked={type==='family'} required></input>
                            Family
                        </label>
                        <label>
                            <input type='radio' name='type' value='kids' onChange={handleTypeChange} checked={type==='kids'}></input>
                            Kids
                        </label>
                        <label>
                            <input type='radio' name='type' value='adult' onChange={handleTypeChange} checked={type==='adult'}></input>
                            Adult
                        </label>
                    </label>
                </div>
                <br/>


                {/* upload photos */}
                <br/>

                <button className='SubmitButton'>Submit</button>


                <p>{activity}</p>
                <p>{description}</p>
                <p>{location}</p>
                <p>{weather}</p>
                <p>{time}</p>
                <p>{price}</p>
                <p>{type}</p>
                
            </form>
            


        </div>
    );
}

export default CreatePostForm;

// radio buttons cannot be de-selected
// do we want radio buttons / checkboxes?
// dropdown options can be done better
/* 
User ID should be automatic
date should be automatic
Likes / Dislikes set to 0 to start
Empty comments
// error if not all filled out
*/
// add a character count to input and textarea
// do I need a checked attribute for the radio buttons