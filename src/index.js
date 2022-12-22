import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


// Pool holds info about physical nature of the pool 
// such as size and construction materials

class Pool extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.volume = { volume: 14500 };

    }
}

class FreeChlorine extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '0' };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.specLow = this.specLow.bind(this);
        // this.specHigh = this.specHigh.bind(this);
    }

    render() {
        return (
            <div className="free-clorine"> Free Chlorine
                < div >
                    <input type="text" name="current" placeholder="current" />
                    {/* <input type="text" name = "current" value={this.state.value} onChange={this.handleChange} /> */}
                    <input type="text" name="goal" placeholder="goal"></input>
                    <div />Add 0 of 6 weight % bleach. </div >
                <div>Jug size 96 oz. or add 0 by weight or 0 by volume of trichlor.</div>
                <div>Note: Dichlor and trichlor add CYA and lower pH.Cal - hypo adds CH.
                </div >
            </div>);
    }
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <FreeChlorine />
    </React.StrictMode>
)

/*
     * BLEACH CALCULATION STEPS *
     * 1. Convert desired concentration of Chlorine from ppm or mg/L to mg/mL
     * 2. Convert concentration of Chlorine Volume in mL to desired volume in mL
     * 	  Desired volume in mL = Desired volume amount * Desired unit in mL
     * 3. Calculate available Chlorine in mg/mL
     * 4. Calculate Amount of bleach to add
     * 5. Calculate final result 
     * 6. Calculate amount of water
     * 
     * 1 oz of 5.25% sodium hpypochlride in chlorine bleach
     * in 1 gal of water yields 400 ppm chlorine
     * 1% = 10,000 ppm
     * .01
     * 1,000,000
     * 
     * Bleach Solution
     * 5.25-6.15% sodium hypochlorite
     * Dilution Chlorine (ppm)
     * None 52,500-61,500
     * 1:10 or 1 ½ cup:1 gallon 5,250-6,150
     * 1:20 or ¾ cup:1 gallon 2,625-3,075
     * 1:100 or ¼ cup:1 gallon 525-615
     */ 