import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


// Pool holds info about physical nature of the pool 
// such as size and construction materials

class Pool extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '0' };

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