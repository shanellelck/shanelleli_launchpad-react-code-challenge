import React from "react";
import SelectList from "./components/SelectList";
import UniList from "./components/UniList";

function Universities() {
    return (
        <div className="unis">
            <SelectList />
            <UniList />
        </div>
        
    );
}

export default Universities;