import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Schedule.css";
import calander from "../calander.gif";

function Schedule (){
    return (
        <>
            <Navbar />
            <div className="dummy"></div>

            <div className="mainScheduler">
                <div className="caldetails">
                    <img src={calander} className='calander'/>
                </div>
                <div className="details">
                    <form action="">
                        <div className="top1">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className="top2">
                            <label htmlFor="email">Subject</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="clockSet">
                            <input type="datetime-local" name="" id="" max={`${(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)).toISOString().slice(0, -8)}`} />
                        </div>
                        <input className="formButton" type="submit" value="Send"/>
                    </form>
                </div>   
            </div>
            <Footer />
        </>
    );
}

export default Schedule;