import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import HomePage from './routes/HomePage'
import PageNotFound from './routes/PageNotFound';
import ProfilePage from './routes/ProfilePage';
import Footer from './components/Footer';
import Map from './routes/MapPage';
import { Route, Routes } from 'react-router-dom';
import Login from './routes/LoginPage';
import SignUp from './routes/SignUpPage';

const App = () => {

    // can fetch username from token
    const [token, setToken] = useState(false);

    if(token) {
        sessionStorage.setItem('token', JSON.stringify(token))
    }

    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            let data = JSON.parse(sessionStorage.getItem('token'))
            setToken(data)
        }
    }, [])

    return (
        <div>
            <Header />
            <Routes>
                {token ?
                <Route index element={<HomePage userName="Bryan" location="New York City"/>} />
                :
                ''
                }
                <Route path="*" element={<PageNotFound />} />
                <Route path="profile" element={<ProfilePage/>} />
                <Route path = "map" element = {<Map/>}/>
                <Route path = "login" element = {<Login setToken={setToken}/>}/>
                <Route path = "signup" element = {<SignUp/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;