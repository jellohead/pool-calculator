import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import '../src/index.css';


function FreeChlorine(props) {
    const { poolVolume } = props;

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

    function handleChangeBleachPercent(event) {
        setBleachPercent(event.target.value);
    }

    function handleChangeBleachJugSize(event) {
        setBleachJugSize(event.target.value);
    }

    function bleachVolume() {
        console.log(bleachPercent);
        const bleachPPM = bleachPercent * 1000000 / 100;
        console.log(bleachPPM);
        console.log(targetPPM, currentPPM);
        const bleachAmount = (targetPPM - currentPPM) * poolVolume / bleachPPM * 128;
        console.log(bleachAmount);
        return bleachAmount;
    }

    function numberOfJugs(bleachVolume, bleachJugSize) {
        return Math.ceil(bleachVolume() / bleachJugSize);
    }

    return (
        <div className="analysis"> Free Chlorine
            < div >
                <label>Current PPM</label>
                <input
                    type="text"
                    name="currentPPM"
                    value={currentPPM}
                    onChange={handleChangeCurrentPPM}
                />
                <label>Desired PPM</label>
                <input type="text" name="targetPPM" value={targetPPM} onChange={handleChangeTargetPPM} />
                <div>
                    <label>Bleach Concentration (%)</label>
                    <input
                        type="text"
                        name="bleachPercent"
                        value={bleachPercent}
                        onChange={handleChangeBleachPercent}
                    />

                </div>
                <div>
                    <label>Bleach Jug Size (ounces)</label>
                    <input
                        type="text"
                        name="bleachJugSize"
                        value={bleachJugSize}
                        onChange={handleChangeBleachJugSize}
                    />

                </div>
                <div> Add {bleachVolume()} ounces of {bleachPercent}% bleach.</div>
            </div >
            <div> You will need {Math.ceil(bleachVolume() / bleachJugSize)} jug{Math.ceil(bleachVolume() / bleachJugSize) === 1 ? '' : 's'} of bleach.</div >
        </div>
    )

}
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
            < FreeChlorine poolVolume={poolVolume} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <Pool />
    </React.StrictMode>
)

