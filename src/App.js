import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RoomPage from './pages/Room';
import SplashScreen from './pages/SplashScreen';
import './pages/SplashScreen.css'; 
function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 5000); 

        return () => clearTimeout(splashTimeout);
    }, []);

    return (
        <>
            {showSplash ? <SplashScreen /> : (
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/room/:roomId' element={<RoomPage />} />
                </Routes>
            )}
        </>
    );
}

export default App;
