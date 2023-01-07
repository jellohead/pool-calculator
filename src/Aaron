import { useState } from "react";

function PoolVolume(props) {
    const { volume, onVolumeChange } = props;

    function calculateVolume(l, w, h) {
        const newVolume = l * w * h;
        onVolumeChange(newVolume);
    }

    return (
        <div> {volume} </div>
    )
}

function Calculator() {
    const [volume, setVolume] = useState(0);

    function handleVolumeChange(volume) {
        setVolume(volume);
    }

    return (
        <div>
            Calculator App

            <PoolVolume volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
    )
}