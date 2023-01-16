import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import '../src/index.css';


function FreeChlorine(props) {
    const { poolVolume } = props;

    const [specLow, setSpecLow] = useState(7.2);
    const [specHigh, setSpecHigh] = useState(8.0);
    const [bleachPercent, setBleachPercent] = useState(1.25);
    const [currentPPM, setCurrentPPM] = useState(2);
    const [targetPPM, setTargetPPM] = useState(4);
    const [bleachJugSize, setBleachJugSize] = useState(128);


    function handleChangeCurrentPPM(event) {
        console.log(event);
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

    // function numberOfJugs() {
    //     return Math.ceil(this.state.bleachVolume() / this.state.bleachJugSize);
    // }

    return (
        <div className="analysis"> Free Chlorine
            < div >
                <div>Spec: {specLow} ppm - {specHigh} ppm.</div>
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
                <div> Add {bleachVolume()} oz. ounces of {bleachPercent}% bleach.</div>
            </div >
            {/* <div> You will need {numberOfJugs} jug{Math.ceil(bleachVolume() / bleachJugSize) === 1 ? '' : 's'} of bleach.</div > */}
            <div> You will need {Math.ceil(bleachVolume() / bleachJugSize)} jug{Math.ceil(bleachVolume() / bleachJugSize) === 1 ? '' : 's'} of bleach.</div >
        </div>
    )

}

function Ph(props) {
    const { poolVolume } = props;
    const [pHLowSpec, setPhLowSpec] = useState(7.2);
    const [phHighSpec, setPhHighSpec] = useState(8.0);


    return (
        <div className="analysis">pH</div>

    )
}

function TotalAlkalinity(props) {
    const { poolVolume } = props;

    return (
        <div className="analysis">Total Alkalinity</div>

    )
}

function CalciumHardnes(props) {
    const { poolVolume } = props;

    return (
        <div className="analysis">Calcium Hardness</div>

    )
}

function CYA(props) {
    const { poolVolume } = props;

    return (
        <div className="analysis">Cyanuric Acid</div>

    )
}

function Salt(props) {
    const { poolVolume } = props;

    return (
        <div className="analysis">Salt</div>

    )
}

function Temperature(props) {
    const { poolVolume } = props;

    return (
        <div className="analysis">Temperature</div>

    )
}

function CSI(props) {
    const { poolVolume } = props;

    return (
        <div className="analysis">CSI</div>

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
        <div className="analysis">
            <label>Pool Volume:
                <input
                    type='number'
                    name='Pool Volume'
                    value={poolVolume}
                    onChange={handleVolumeChange}
                />
            </label>
            <label form='pool-material'>Pool Material:</label>
            <select name='poolMaterial' id='pool-material-select' value={poolMaterial} onChange={handleMaterialChange} >
                <option value="plaster">plaster</option>
                <option value="fiberglass">fiberglass</option>
                <option value="vinyl">vinyl</option>
            </select>
            < FreeChlorine poolVolume={poolVolume} />
            < Ph poolVolume={poolVolume} />
            < TotalAlkalinity poolVolume={poolVolume} />
            < CalciumHardnes poolVolume={poolVolume} />
            < CYA poolVolume={poolVolume} />
            < Salt poolVolume={poolVolume} />
            < Temperature poolVolume={poolVolume} />
            < CSI poolVolume={poolVolume} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <Pool />
    </React.StrictMode>
)

