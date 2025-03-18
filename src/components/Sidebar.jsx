// import {
//     BrowserRouter as Router,
//     Routes, Route,
//     Link
// } from 'react-router-dom';

import{Link} from 'react-router-dom';

// import HomePage from '../pages/HomePage';

export default function Sidebar() {
    return ( 
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Router>      
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

                <Routes>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            </Router> */}
        </>
    )
}