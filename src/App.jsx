import React from 'react'
import Header from './components/Header';
import Homepage from './routes/Homepage';
import PageNotFound from './routes/PageNotFound';
import ProfilePage from './routes/ProfilePage';
import Footer from './components/Footer';
import Map from './routes/MapPage'
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route index element={<Homepage userName="Bryan" location="New York City"/>} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="profile" element={<ProfilePage/>} />
                <Route path = "map" element = {<Map/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;