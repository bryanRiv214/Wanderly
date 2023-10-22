import React, {useState} from 'react';
import '../styles/ProfilePage.css';
import CreatePostForm from '../components/CreatePostForm';

function ProfilePage() {

    const[tab, setTab] = useState('Create Post');

    const handleTabClick = (e) => {
        setTab(e.target.textContent)
    }

    return (
        <div className='page'>
            <div className='left-pane'>
                <img className='profile-pic' src='profile.svg' alt='profile logo'></img>
                <button className='button' onClick={handleTabClick}>Edit Profile</button>
                <button className='button' onClick={handleTabClick}>Create Post</button>
                <button className='button' onClick={handleTabClick}>My Posts</button>
                <button className='button' onClick={handleTabClick}>Settings</button>
                <button className='button' onClick={handleTabClick}>Logout</button>
            </div>
            <div className='right-pane'>
                <div className='profile-name'>
                    Bryan Rivera
                </div>
                <div>
                    {tab==='Edit Profile' && <div>Edit Profile Content will go here.</div>}
                    {tab==='Create Post' && <CreatePostForm/>}
                    {tab==='My Posts' && <div>My Posts Content will go here.</div>}
                    {tab==='Settings' && <div>Settings Content will go here.</div>}
                    {tab==='Logout' && <div>Logout</div>}
                </div>   
            </div>
            
        </div>
    );
}

export default ProfilePage;
