import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import HomePage from './routes/HomePage'
import PageNotFound from './routes/PageNotFound';
import ProfilePage from './routes/ProfilePage';
import Footer from './components/Footer';
import Map from './routes/MapPage';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './routes/LandingPage';

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
            {token ?
                <div>
                <Header />
                <Routes>  
                    <Route path="homepage" element={<HomePage userName="Bryan" location="New York City" setToken={setToken}/>} />
                    <Route path="profile" element={<ProfilePage/>} />
                    <Route path = "map" element = {<Map/>}/>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
                </div>
            :
                <Routes>
                    <Route index element={<LandingPage setToken={setToken}/>}></Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            }
        </div>
    )
}

export default App;