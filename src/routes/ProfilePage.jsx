import React, {useEffect, useState} from 'react';
import '../styles/ProfilePage.css';
import CreatePostForm from '../components/CreatePostForm';
import supabase from "../config/supabaseClient.js"
import Logout from "../components/Logout.jsx";

// Here ill pull the supabase data details
// then using a component i will show the cards mapped with the data
// We can either reuse the provided component or make a new one, for now ill wait

import MyPostsCard from '../components/MyPostsCard.jsx'
import MyPostsTable from '../components/MyPostsTable.jsx';

const ProfilePage = () => {
    const[tab, setTab] = useState('Create Post');

    const handleTabClick = (e) => {
        setTab(e.target.textContent)
    }

    return (
        <div className='page container-fluid'>
            <div className='row'>
                <div className='col-md-4 left-pane'>
                    <img className='profile-pic' src='profileicon.svg' alt='profile logo'></img>

                    <h1 className='profile-name hidden-large-screen'>Bryan Rivera</h1>

                    <button className='button' onClick={handleTabClick}>Edit Profile</button>
                    <button className='button' onClick={handleTabClick}>Create Post</button>
                    <button className='button' onClick={handleTabClick}>My Posts</button>
                    <button className='button settings' onClick={handleTabClick}>Settings</button>
                    <Logout className="profile-page-logout"/>
                </div>

                <div className='right-pane col-8'>
                    <h1 className='profile-name hidden-small-screen'>Bryan Rivera</h1>

                    <div className="tab-container">
                        {tab==='Edit Profile' && <div>Edit Profile Content will go here.</div>}
                        {tab==='Create Post' && <CreatePostForm />}
                        {tab==='My Posts' && <div className="user-posts"> 
                                                    
                                            <MyPostsTable/> 
                                                
                                        </div>} 
                        {tab==='Settings' && <div>Settings Content will go here.</div>}
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
