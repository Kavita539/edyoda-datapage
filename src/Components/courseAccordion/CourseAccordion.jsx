import { useState } from "react";
import {BsFillCaretDownFill} from "react-icons/bs";
import {BsFillCaretUpFill} from "react-icons/bs";
import "./courseAccordion.css";

const CourseAccordion = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('ECRD');
    const options = [{
            id: 1,
            value: "ECRD"
        },
        {
            id: 2,
            value: "FSR222222"
        },
        {
            id: 3,
            value: "DS261121"
        },
        {
            id: 4,
            value: "DS031221"
        },
    ]

    const handleOpen = () => {
        setOpen(!open); 
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    

  return (
    <div className="course-accordion">
        <div className="accordion-header" onClick={handleOpen}>
            <div onChange={handleChange}>{value}</div>
            <div className="sign">{open?
                <BsFillCaretUpFill />:
                <BsFillCaretDownFill />}</div>
            <div className="course-name">DATA SCIENTIST PROGRAM</div>
        </div>
        {open && (
        <div className="accordion-body">
            <ul className="select-program">Select Program</ul>
            {options.map(({id,value})=><li className="options" key={id} onClick={()=>{
                setValue(value);
                }}>{value}</li>)}
        </div>
        )}
    </div>
  )
}

export default CourseAccordion