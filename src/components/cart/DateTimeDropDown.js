import "./dateTimeDropDwon.css";
import React, {useState} from "react";
import Button from "../button/Button";


const options22 = [
    {"date" :"22 december", "time" :"09:00 - 09:15"}, {"date" :"22 december", "time" :"09:15 - 09:30"},
    {"date" :"22 december", "time" :"09:30 - 09:45"}, {"date" :"22 december", "time" :"09:45 - 10:00"},
    {"date" :"22 december", "time" :"10:00 - 10:15"}, {"date" :"22 december", "time" :"10:15 - 10:30"},
    {"date" :"22 december", "time" :"10:45 - 11:00"}, {"date" :"22 december", "time" :"11:00 - 11:15"},
    {"date" :"22 december", "time" :"11:15 - 11:30"}, {"date" :"22 december", "time" :"11:30 - 11:45"},
    {"date" :"22 december", "time" :"11:45 - 12:00"}, {"date" :"22 december", "time" :"12:00 - 12:15"},
    {"date" :"22 december", "time" :"12:15 - 12:30"}, {"date" :"22 december", "time" :"13:00 - 13:15"},
    {"date" :"22 december", "time" :"13:15 - 13:30"}, {"date" :"22 december", "time" :"13:30 - 13:45"},
    {"date" :"22 december", "time" :"13:45 - 14:00"}, {"date" :"22 december", "time" :"14:00 - 14:15"},
    {"date" :"22 december", "time" :"14:15 - 14:30"}, {"date" :"22 december", "time" :"14:45 - 15:00"},
    {"date" :"22 december", "time" :"15:00 - 15:15"}, {"date" :"22 december", "time" :"15:15 - 15:30"},
    {"date" :"22 december", "time" :"15:30 - 15:45"}, {"date" :"22 december", "time" :"15:45 - 16:00"},
    {"date" :"22 december", "time" :"16:00 - 16:15"}, {"date" :"22 december", "time" :"16:15 - 16:30"},
    {"date" :"22 december", "time" :"16:30 - 16:45"}, {"date" :"22 december", "time" :"16:45 - 17:00"}
];

const options23 = [
    {"date" :"23 december", "time" :"09:00 - 09:15"}, {"date" :"23 december", "time" :"09:15 - 09:30"},
    {"date" :"23 december", "time" :"09:30 - 09:45"}, {"date" :"23 december", "time" :"09:45 - 10:00"},
    {"date" :"23 december", "time" :"10:00 - 10:15"}, {"date" :"23 december", "time" :"10:15 - 10:30"},
    {"date" :"23 december", "time" :"10:45 - 11:00"}, {"date" :"23 december", "time" :"11:00 - 11:15"},
    {"date" :"23 december", "time" :"11:15 - 11:30"}, {"date" :"23 december", "time" :"11:30 - 11:45"},
    {"date" :"23 december", "time" :"11:45 - 12:00"}, {"date" :"23 december", "time" :"12:00 - 12:15"},
    {"date" :"23 december", "time" :"12:15 - 12:30"}, {"date" :"23 december", "time" :"13:00 - 13:15"},
    {"date" :"23 december", "time" :"13:15 - 13:30"}, {"date" :"23 december", "time" :"13:30 - 13:45"},
    {"date" :"23 december", "time" :"13:45 - 14:00"}, {"date" :"23 december", "time" :"14:00 - 14:15"},
    {"date" :"23 december", "time" :"14:15 - 14:30"}, {"date" :"23 december", "time" :"14:45 - 15:00"},
    {"date" :"23 december", "time" :"15:00 - 15:15"}, {"date" :"23 december", "time" :"15:15 - 15:30"},
    {"date" :"23 december", "time" :"15:30 - 15:45"}, {"date" :"23 december", "time" :"15:45 - 16:00"},
    {"date" :"23 december", "time" :"16:00 - 16:15"}, {"date" :"23 december", "time" :"16:15 - 16:30"},
    {"date" :"23 december", "time" :"16:30 - 16:45"}, {"date" :"23 december", "time" :"16:45 - 17:00"}
];

const options24 = [
    {"date" :"24 december", "time" :"09:00 - 09:15"}, {"date" :"24 december", "time" :"09:15 - 09:30"},
    {"date" :"24 december", "time" :"09:30 - 09:45"}, {"date" :"24 december", "time" :"09:45 - 10:00"},
    {"date" :"24 december", "time" :"10:00 - 10:15"}, {"date" :"24 december", "time" :"10:15 - 10:30"},
    {"date" :"24 december", "time" :"10:45 - 11:00"}, {"date" :"24 december", "time" :"11:00 - 11:15"},
    {"date" :"24 december", "time" :"11:15 - 11:30"}, {"date" :"24 december", "time" :"11:30 - 11:45"},
    {"date" :"24 december", "time" :"11:45 - 12:00"}, {"date" :"24 december", "time" :"12:00 - 12:15"},
    {"date" :"24 december", "time" :"12:15 - 12:30"}, {"date" :"24 december", "time" :"13:00 - 13:15"},
    {"date" :"24 december", "time" :"13:15 - 13:30"}, {"date" :"24 december", "time" :"13:30 - 13:45"},
    {"date" :"24 december", "time" :"13:45 - 14:00"}, {"date" :"24 december", "time" :"14:00 - 14:15"},
    {"date" :"24 december", "time" :"14:15 - 14:30"}, {"date" :"24 december", "time" :"14:45 - 15:00"},
    {"date" :"24 december", "time" :"15:00 - 15:15"}, {"date" :"24 december", "time" :"15:15 - 15:30"},
    {"date" :"24 december", "time" :"15:30 - 15:45"}, {"date" :"24 december", "time" :"15:45 - 16:00"}
];


function DateTimeDropDown() {
    const [isOpen22, setIsOpen22] = useState(false);
    const toggling22 = () => setIsOpen22(!isOpen22);
    const [isOpen23, setIsOpen23] = useState(false);
    const toggling23 = () => setIsOpen23(!isOpen23);
    const [isOpen24, setIsOpen24] = useState(false);
    const toggling24 = () => setIsOpen24(!isOpen24);


    const [selectedOption, setSelectedOption] = useState(null);


    function handleClick() {
        setSelectedOption("");
    }

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen22(false);
        setIsOpen23(false);
        setIsOpen24(false);
        console.log(selectedOption);
    };

    return (
        <>
            <div className="pick-up-date-outer-container">
                <h2>Kies het gewenste afhaalmoment</h2>

                {!selectedOption &&
                    <ul className="dropdown-container">

                        <li className="dropdown-header" onClick={toggling22}>
                            <a className="decoration" tabIndex="-1" href="#">{selectedOption || "22 december 2022"}
                                <span className="caret"/>
                            </a>
                            {isOpen22 && (
                                <ul className="dropdown-list">
                                    {options22.map(option => (
                                        <li className="list-item" onClick={onOptionClicked(option)} key={Math.random()}>
                                            {option.time}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="dropdown-header" onClick={toggling23}>
                            <a className="decoration" tabIndex="-1" href="#">{selectedOption || "23 december 2022"} <span
                                className="caret"/></a>
                            {isOpen23 && (
                                <ul className="dropdown-list">
                                    {options23.map(option => (
                                        <li className="list-item" onClick={onOptionClicked(option)} key={Math.random()}>
                                            {option.time}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="dropdown-header" onClick={toggling24}>
                            <a className="decoration" tabIndex="-1" href="#">{selectedOption || "24 december 2022"} <span
                                className="caret"/></a>
                            {isOpen24 && (
                                <ul className="dropdown-list">
                                    {options24.map(option => (
                                        <li className="list-item" onClick={onOptionClicked(option)} key={Math.random()}>
                                            {option.time}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                }

                {selectedOption &&
                    <div className="pick-up-date-choice">
                        <h3 className="pick-up-date-choice-header">Uw afhaalmoment:</h3>
                        <p className="chosen-date-time">{selectedOption.date} {selectedOption.time}</p>
                        <Button
                        description="Ik wil toch een ander moment kiezen"
                        onClick={handleClick}
                        />
                    </div>
                }
            </div>
        </>
    );
}

export default DateTimeDropDown;
