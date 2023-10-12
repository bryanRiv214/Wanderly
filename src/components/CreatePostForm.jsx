import React, {useState} from 'react';
import './CreatePostForm.css';

// change label structure using id and for attributes to help with css

function CreatePostForm() {
    return (
        <div>
            <form className='newPostForm' name='newPost'>

                <div className='ActivitySection'>
                    <label for='activity'>Activity:</label>
                    <input type='text' name='activity' id='activity' /*value=''*/ placeholder='placeholder' maxlength='50' autoComplete='off' required></input>
                </div>
                <br/>

                <div className='DescriptionSection'>
                    <label for='description'>Description:</label>
                        <textarea name='description' id='description' /*value=''*/ placeholder='placeholder' maxlength='1000' required></textarea>
                </div>
                <br/>

                <div className='LocationSection'>
                    <label for='location'>Location:</label>
                        <select name='location' id='location' required>
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
                            <input type='radio' name='weather' value='sun' required></input>
                            Sun
                        </label>
                        <label>
                            <input type='radio' name='weather' value='cold'></input>
                            Cold
                        </label>
                        <label>
                            <input type='radio' name='weather' value='rain'></input>
                            Rain
                        </label>
                    </label>
                </div>
                <br/>

                <div className='TimeSection'>
                    <label>
                        Time:
                        <label>
                            <input type='radio' name='time' value='one' required></input>
                            1hr
                        </label>
                        <label>
                            <input type='radio' name='time' value='two'></input>
                            2hr
                        </label>
                        <label>
                            <input type='radio' name='time' value='three'></input>
                            3hr
                        </label>
                    </label>
                </div>
                <br/>

                <div className='PriceSection'>
                    <label>
                        Price:
                        <label>
                            <input type='radio' name='price' value='free' required></input>
                            Free
                        </label>
                        <label>
                            <input type='radio' name='price' value='cheap'></input>
                            $0-$20
                        </label>
                        <label>
                            <input type='radio' name='price' value='expensive'></input>
                            $21-$100
                        </label>
                    </label>
                </div>
                <br/>

                <div className='ActivityTypeSection'>
                    <label>
                        Activity Type:
                        <label>
                            <input type='radio' name='type' value='family' required></input>
                            Family
                        </label>
                        <label>
                            <input type='radio' name='type' value='kids'></input>
                            Kids
                        </label>
                        <label>
                            <input type='radio' name='type' value='adult'></input>
                            Adult
                        </label>
                    </label>
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
date should be automatic
Likes / Dislikes set to 0 to start
Empty comments
// error if not all filled out
*/
// add a character count to input and textarea