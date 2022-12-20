import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

class FreeChlorine extends React.Component {
    render() {
        return (
            <div className="free-clorine">
                <label></label>
                <input></input>
                Add 0 of 6 weight% bleach. Jug size 96 oz. or add
                0 by weight or 0 by volume of trichlor.
                Note: Dichlor and trichlor add CYA and lower pH. Cal-hypo adds CH.
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <FreeChlorine />
    </React.StrictMode>
)