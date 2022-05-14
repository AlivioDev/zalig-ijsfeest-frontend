import React, {useState} from "react";
import "./Calandar.css";


function Calendar() {
    const [dateTime, setDateTime] = useState();
    console.log("DateTime", dateTime);

    return (
        <div className="calendar-outer-container">
            <div className="calendar-inner-container">
                <h3>Kies het gewenste afhaalmoment:</h3>
                <input
                    className="calendar-input"
                    type="datetime-local"
                    min="2022-12-22T08:30"
                    max="2022-12-24T16:00"
                    onChange={e => setDateTime(e.target.value)}/>
            </div>
        </div>
    );
}

export default Calendar;




