import React, {useState} from 'react';
import '../styles/CreatePostForm.css';

function CreatePostForm() {

    const weatherOptions = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy", "Cold", "Any"];
    const DurationOptions = ["0 - 30 min", "30 - 60 min", "1 - 1.5 hrs", "1.5 - 2 hrs", "2 - 4 hrs", "4 - 8 hrs", "All Day"]
    const activityTypeOptions = ["Indoor", "Outdoor", "Family-Friendly", "Kids", "Adults", "Nightlife", "Relaxing", "Creative", "Shopping", "Sports", "Arts and Crafts", "Guided Tours", "Museums and Education", "Parks and Recreation", "Wellness and Health", "Nature and Hiking", "Food and Drink", "Historical Landmarks", "Festivals and Events", "Other"];
    const locationOptions = ["New York, NY", "Chicago, IL", "Boston, MA", "Philadephia, PA", "Los Angeles, CA"];

    const[title, setTitle] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const[description, setDescription] = useState('');
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const[location, setLocation] = useState('');
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }
    const[price, setPrice] = useState('');
    const handlePriceChange = (e) => {
        if(/^[0-9]*$/.test(e.target.value)) {
            setPrice(e.target.value)
        }
    }
    const [duration, setDuration] = useState('');
    const handleDurationChange = (e) => {
        setDuration(e.target.value)
    }
    const[weather, setWeather] = useState('');
    const handleWeatherChange = (e) => {
        setWeather(e.target.value)
    }
    const[type, setType] = useState('');
    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the page from refreshing upon submit
        const newPost = {title, description, location, duration, price, weather, type, date: new Date().toLocaleString(), likes: 0};
        // error checking
        if(!isFormValid(newPost)) {
            console.log("no good")
            return;
        }
        console.log(newPost)
        // reset state variables
        setTitle('')
        setDescription('');
        setLocation('');
        setDuration('');
        setPrice('');
        setWeather('');
        setType('');
    }

    function isFormValid(newPost) {
        return true;
    }

    return (
        <div>
            <div className='tab'>Create Post</div>
            <form className='newPostForm' name='newPost' onSubmit={handleSubmit}>
                <div className='TitleSection'>
                    <label>Activity:</label>
                    <input className='input' type='text' name='activity' placeholder='Title' value={title} onChange={handleTitleChange} maxLength='50' autoComplete='off' required></input>
                </div>
                <br/>
                <div className='DescriptionSection'>
                    <label>Description:</label>
                    <textarea className='textArea' name='description' placeholder='What did you do?' value={description} onChange={handleDescriptionChange} maxLength='1000' required></textarea>
                </div>
                <br/>
                <div className='LocationSection'>
                    <label>Location:</label>
                    <select className='select' name='location' value={location} onChange={handleLocationChange} required>
                        <option value=''>--Select--</option>
                        {locationOptions.map((item, index) => 
                            <option key={index} value={item}>{item}</option>  
                        )}
                    </select>
                </div>
                <br/>
                <div className='PriceSection'>
                    <label>Estimated Price: $</label>
                    <input className='input' type='text' name='price' placeholder='###' value={price} onChange={handlePriceChange} maxLength='4' dir='rtl' autoComplete='off' required></input>
                </div>
                <br/>
                <div className='DurationSection'>
                    <label>Duration (hrs):</label>
                    <div className='options'>
                        {DurationOptions.map((item, index) => 
                            <div key={index}>
                                <label>
                                    <input className='input' type='radio' name='duration' value={item} onChange={handleDurationChange} checked={duration===item} required></input>
                                    {item}
                                </label>
                            </div>   
                        )}
                    </div>
                </div>
                <br/>
                <div className='WeatherSection'>
                    <label>Weather:</label>
                    <div className='options'>
                        {weatherOptions.map((item, index) => 
                            <div key={index}>
                                <label>
                                    <input className='input' type='radio' name='weather' value={item} onChange={handleWeatherChange} checked={weather===item} required></input>
                                    {item}
                                </label>
                            </div>   
                        )}
                    </div>
                </div>
                <br/>
                <div className='ActivityTypeSection'>
                    <label>Activity Type: </label>
                    <div className='options'>
                        {activityTypeOptions.map((item, index) => 
                            <div key={index}>
                                <label>
                                    <input className='input' type='radio' name='type' value={item} onChange={handleTypeChange} checked={type===item} required></input>
                                    {item}
                                </label>
                            </div>   
                        )}
                    </div>
                </div>
                <br/>
                {/* upload photos */}
                <br/>
                <button className='SubmitButton'>Submit</button>
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
*/
// do I need a checked attribute for the radio buttons




/*
const[minDuration, setMinDuration] = useState('');
    const handleMinDurationChange = (e) => {
        if(/^[0-9]*$/.test(e.target.value)) {
            setMinDuration(e.target.value)
        }
    }
    const[maxDuration, setMaxDuration] = useState('');
    const handleMaxDurationChange = (e) => {
        if(/^[0-9]*$/.test(e.target.value)) {
            setMaxDuration(e.target.value)
        }
    }


    <div className='DurationSection'>
        <label>Duration (hrs):</label>
        <input className='input' type='text' name='minDuration' placeholder='##' value={minDuration} onChange={handleMinDurationChange} maxLength='2' dir='rtl' autoComplete='off' required></input>
        <p>-</p>
        <input className='input' type='text' name='maxDuration' placeholder='##' value={maxDuration} onChange={handleMaxDurationChange} maxLength='2' dir='rtl' autoComplete='off' required></input>
    </div>
*/