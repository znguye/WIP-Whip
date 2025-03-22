import {Link} from 'react-router-dom'

{/* <aside className="sidebar">
            <nav>
                <ul>
                    <li href="/">Home</li>
                    <li href="/">About</li>
                </ul>
            </nav>
        </aside> */}

export default function Sidebar() {
    return ( 
        <>
            <ul className = "main-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/itemsDetails">Items Details</Link></li>
                <li><Link to="*">Not found</Link></li> */}
            </ul>
        </>
    )
}