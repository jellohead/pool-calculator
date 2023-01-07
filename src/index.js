import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function Pool() {
    const [poolVolume, setPoolVolume] = useState('10000');
    const [poolMaterial, setPoolMaterial] = useState('');

    function handleVolumeChange(event) {
        setPoolVolume(event.target.value);
    }

    function handleMaterialChange(event) {
        setPoolMaterial(event.target.value);
    }

    return (
        <div>
            <label>Pool Volume:
                <input
                    type='number'
                    name='Pool Volume'
                    value={poolVolume}
                    onChange={handleVolumeChange}
                // onKeyDown={(event) => {
                //     if (event.code === 'Enter') {
                //         event.preventDefault()
                //     }
                // }}
                />
            </label>
            <label form='pool-material'>Pool Material:</label>
            <select name='poolMaterial' id='pool-material-select' value={poolMaterial} onChange={handleMaterialChange} >
                <option value="plaster">plaster</option>
                <option value="fiberglass">fiberglass</option>
                <option value="vinyl">vinyl</option>
            </select>
            < FreeChlorine poolVolume={poolVolume} setPoolVolume={setPoolVolume} />
        </div>
    )
}

function FreeChlorine(props) {
    const { poolVolume, setPoolVolume } = props;

    // const [specLow, setSpecLow] = useState(2);
    // const [specHigh, setSpecHigh] = useState(4);
    const [bleachPercent, setBleachPercent] = useState(1.25);
    const [currentPPM, setCurrentPPM] = useState(2);
    const [targetPPM, setTargetPPM] = useState(4);
    const [bleachJugSize, setBleachJugSize] = useState(128);


    function handleChangeCurrentPPM(event) {
        setCurrentPPM(event.target.value);
    }

    function handleChangeTargetPPM(event) {
        setTargetPPM(event.target.value);
    }

    function bleachVolume() {
        console.log(bleachPercent);
        const bleachPPM = bleachPercent * 1000000 / 100;
        console.log(bleachPPM);
        console.log(targetPPM, currentPPM);
        const bleachAmount = (targetPPM - currentPPM) * poolVolume / bleachPPM;
        console.log(bleachAmount);
        return bleachAmount;
        // * need to account for volume unit conversions to get oz to add
    }


    return (
        <div className="free-chlorine"> Free Chlorine
            < div >
                <input
                    type="text"
                    name="currentPPM"
                    value={currentPPM}
                    onChange={handleChangeCurrentPPM}
                />
                <input type="text" name="targetPPM" value={targetPPM} onChange={handleChangeTargetPPM} />
                <div> Add {bleachVolume()} of {bleachPercent}% bleach.</div>
            </div >
            <div>Jug size 96 oz. or add 0 by weight or 0 by volume of trichlor.</div>
            <div>Note: Dichlor and trichlor add CYA and lower pH.Cal - hypo adds CH.</div >
        </div>
    )

}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <Pool />
    </React.StrictMode>
)

