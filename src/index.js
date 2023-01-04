import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


// Pool holds info about physical nature of the pool 
// such as size and construction materials

class Pool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            poolVolume: 14500,
            material: 'plaster'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePoolMaterial = this.handleChangePoolMaterial.bind(this);
    }


    handleChange(event) {
        console.log('this is ', this);
        this.setState({ poolVolume: event.target.value });
    }
    handleChangePoolMaterial(event) {
        console.log('this is ', this);
        this.setState({ material: event.target.value });
    }

    render() {
        return (
            <form>
                <label>Pool Volume:
                    <input type='number' name='Pool Volume' value={this.state.poolVolume} onChange={this.handleChange} />
                </label>
                <label for='pool-material'>Pool Material:</label>
                <select name='poolMaterial' id='pool-material-select' value={this.state.material} onChange={this.handleChangePoolMaterial} >
                    <option value="plaster">plaster</option>
                    <option value="fiberglass">fiberglass</option>
                    <option value="vinyl">vinyl</option>
                </select>
            </form>
        )

    }
}

class FreeChlorine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
            specLow: 2,
            specHigh: 4,
            bleachPercent: 1.25,
            currentPPM: 2,
            targetPPM: 4,
            bleachJugSize: 128
        };
        this.handleChangeCurrentPPM = this.handleChangeCurrentPPM.bind(this);
        this.handleChangeTargetPPM = this.handleChangeTargetPPM.bind(this);
    }

    handleChangeCurrentPPM(event) {
        console.log('this is ', this);
        this.setState({ currentPPM: event.target.value });
    }
    handleChangeTargetPPM(event) {
        console.log('this is ', this);
        this.setState({ targetPPM: event.target.value });
    }

    bleachVolume = () => {
        let bleachAmount;
        let bleachPPM = this.bleachPercent * 1000000 / 100;
        console.log(bleachPPM, bleachAmount);
        bleachAmount = (this.state.targetPPM - this.state.currentPPM) * this.state.poolVolume / bleachPPM;
        console.log(bleachAmount);
        return bleachAmount;
        // * need to account for volume unit conversions to get oz to add
    }

    render() {
        return (
            <div className="free-clorine"> Free Chlorine
                < div >
                    <input type="text" name="currentPPM" value={this.state.currentPPM} onChange={this.handleChangeCurrentPPM} />
                    <input type="text" name="targetPPM" value={this.state.targetPPM} onChange={this.handleChangeTargetPPM} />
                    <div> Add {this.bleachVolume} of {this.state.bleachPercent}% bleach.</div>
                </div >
                <div>Jug size 96 oz. or add 0 by weight or 0 by volume of trichlor.</div>
                <div>Note: Dichlor and trichlor add CYA and lower pH.Cal - hypo adds CH.</div >
            </div>);
    }
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <Pool />
        <FreeChlorine />
    </React.StrictMode>
)

