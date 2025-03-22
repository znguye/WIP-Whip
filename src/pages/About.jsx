import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function About(){
    return(
        <>
            <Navbar />
            <Sidebar />
            <div>
                <h1>About</h1>
                <h2>About the project</h2>
                <h3>Description:</h3>
                    <p>Introducing WIP Whip – the Kanban board with attitude.</p>
                    <p>Too many tasks in progress? Not on WHIP Whip’s watch. We’re here to keep your team laser-focused, your board squeaky clean, and your sanity mostly intact.</p>
                <br/> 
                <h3>WHIP Whip shows you:</h3>
                    <p>What’s Todo (aka “the calm before the storm”)</p>
                    <p>What’s InProgress (aka “hold my coffee”)</p>
                    <p>And what’s Done (aka “finally!”)</p>
                
                <p><strong>With WIP limits that gently slap your hand when you try to do too much, WHIP Whip keeps your workflow flowing—not overflowing.</strong></p>
                <br/> 

                <h2>About the team</h2>
                <div id="daniel">
                    <h3>Daniel Fischer</h3>
                    <a href="www.linkedin.com/in/daniel-fischer-802a25211">LinkedIn</a>
                    <a href="https://github.com/damasto">Github</a>
                </div>
                <br/> 
                <div id="diep">
                    <h3>Daniel Fischer</h3>
                    <a href="https://www.linkedin.com/in/ziepenguyen/">LinkedIn</a>
                    <a href="https://github.com/znguye">Github</a>
                </div>
                <br/> 
            </div>
            <Footer />
        </>
    )
}