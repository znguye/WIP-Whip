import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function About(){
    return(
        <>
            <Navbar />
            <Sidebar />
            <div className="about-container">
                {/* <h1>About</h1> */}
                <h2>About the project</h2>
                <hr/>
                <h3>Description:</h3>
                    <p>Introducing WIP Whip – the Kanban board with the right attitude.</p>
                    <p>Too many tasks in progress? Not on WHIP Whip’s watch. We’re here to keep your team laser-focused, your board squeaky clean, and your sanity mostly intact.</p>
                
                <h3>WHIP Whip shows you:</h3>
                <ul>
                    <li>What’s to be done (aka “the calm before the storm”)</li>
                    <li>What’s in progress (aka “hold my coffee”)</li>
                    <li>And what’s done (aka “finally!”)</li>
                </ul>
                
                <p><strong>With WIP limits that gently slap your hand when you try to do too much, WHIP Whip keeps your workflow flowing—not overflowing.</strong></p>
                <br/>
                <h2>About the team</h2>
                <hr/>
                <div id="daniel" className="team-member">
                    <h3>Daniel Fischer</h3>
                    <a href="https://www.linkedin.com/in/danijel-f-802a25211/">LinkedIn</a>
                    <a href="https://github.com/damasto">Github</a>
                </div>
                
                <div id="diep" className="team-member">
                    <h3>Diep Nguyen</h3>
                    <a href="https://www.linkedin.com/in/ziepenguyen/">LinkedIn</a>
                    <a href="https://github.com/znguye">Github</a>
                </div>
                
            </div>
            <Footer />
        </>
    )
}