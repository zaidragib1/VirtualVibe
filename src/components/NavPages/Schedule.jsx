import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Schedule.css";

function Schedule (){
    return (
        <>
            <Navbar />
            <div className="dummy"></div>
            <div className="mainScheduler">
                <div className="details">
                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" />
                        <label htmlFor="email">Subject</label>
                        <input type="text" name="" id="" />
                    </form>
                </div>
                <div className="clockSet">
                    <input type="datetime-local" name="" id="" max={`${(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)).toISOString().slice(0, -8)}`} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Schedule;