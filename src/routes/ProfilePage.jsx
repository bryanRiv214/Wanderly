import React, {useEffect, useState} from 'react';
import '../styles/ProfilePage.css';
import CreatePostForm from '../components/CreatePostForm';
import supabase from "../config/supabaseClient.js"
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
        <div className='page'>
            <div className='container'>
            <div className='row'>
                <div className='col-4 left-pane'>
                    <div className='image-container'>
                        <img className='profile-pic' src='profileicon.svg' alt='profile logo'></img> 
                    </div>
                    <button className='button' onClick={handleTabClick}>Edit Profile</button>
                    <button className='button' onClick={handleTabClick}>Create Post</button>
                    <button className='button' onClick={handleTabClick}>My Posts</button>
                    <button className='button' onClick={handleTabClick}>Settings</button>
                    <button className='button' onClick={handleTabClick}>Logout</button>
                </div>
                <div className='col-8'>
                    <div className='right-pane'>
                        <div className='profile-name'>
                            Bryan Rivera
                        </div>
                        <div>
                            {tab==='Edit Profile' && <div>Edit Profile Content will go here.</div>}
                            {tab==='Create Post' && <CreatePostForm/>}
                            {tab==='My Posts' && <div className="user-posts"> 
                                                    
                                                    <MyPostsTable/> 
                                                
                                                 </div>} 
                            {tab==='Settings' && <div>Settings Content will go here.</div>}
                            {tab==='Logout' && <div>Logout will go here</div>}
                        </div>   
                    </div>  
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProfilePage;
