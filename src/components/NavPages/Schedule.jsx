import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Schedule.css";

function Schedule (){
    return (
        <>
            <Navbar />
            <div className="dummy"></div>
            <div className="mainScheduler">
                <div className="clockSet">
                    <input type="datetime-local" name="" id="" max={`${(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)).toISOString().slice(0, -8)}`} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Schedule;