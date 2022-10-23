import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropType from "prop-types";


function Card(props){
    //const [counter, setCounter] = useState(0);
    const [unit, setUnit] = useState(0);
    const [tens, setTens] = useState(0);
    const [hundred, setHundred] = useState(0);
    const [thousand, setThousand] = useState(0);
    const [tenThou, setTenThou] = useState(0);
    const [hunThou, setHunThou] = useState(0);
    

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setUnit(unit+1);
            
            
        }, 1000);

        
        if (unit > 9) {clearTimeout(timeOut); setUnit(0); setTens(tens+1);}
        if (tens > 9) {setTens(0); setHundred(hundred+1);}
        if (hundred > 9) {setHundred(0); setThousand(thousand+1);}
        if (thousand > 9) {setThousand(0); setTenThou(tenThou+1);}
        if (tenThou > 9) {setTenThou(0); setHunThou(hunThou+1);}
        

    }, [unit])

    

    return (<div className="row py-5 px-5">

    <div className="col">
        <div className="card bg-dark border border-white">
            
            <div className="card-body text-center text-white fs-1">
                <i className="fa fa-regular fa-clock"></i>
            </div>
        
        </div>
    </div>

    <div className="col">
        <div className="card bg-dark border border-white p-1 m-0">
            
            <div className="card-body text-center">
                <h5 className="card-title text-white fs-1">{hunThou}</h5>
            </div>
        
        </div>
    </div>

    <div className="col">
        <div className="card bg-dark border border-white p-1 m-0">
            
            <div className="card-body text-center">
                <h5 className="card-title text-white fs-1">{tenThou}</h5>
            </div>
        
        </div>
    </div>

    <div className="col">
        <div className="card bg-dark border border-white p-1 m-0">
            
            <div className="card-body text-center">
                <h5 className="card-title text-white fs-1">{thousand}</h5>
            </div>
        
        </div>
    </div>

    <div className="col">
        <div className="card bg-dark border border-white p-1 m-0">
            
            <div className="card-body text-center">
                <h5 className="card-title text-white fs-1">{hundred}</h5>
            </div>
        
        </div>
    </div>

    <div className="col">
        <div className="card bg-dark border border-white p-1 m-0">
            
            <div className="card-body text-center">
                <h5 className="card-title text-white fs-1">{tens}</h5>
            </div>
        
        </div>
    </div>

    <div className="col">
        <div className="card bg-dark border border-white p-1 m-0">
            
            <div className="card-body text-center">
                <h5 className="card-title text-white fs-1">{unit}</h5>
            </div>
        
        </div>
    </div>


    </div>
    );
}



/*Card.propType = {
    unit: PropType.number,
    tens: PropType.number,
    hundred: PropType.number, 
    thousand: PropType.number,
    hunThou: PropType.number,
    million: PropType.number
}*/
    


export {Card}