import React from "react";
import styles from "./PureComponent-style";
import './purecomponentStyles.css'

class PureComponent extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        console.log("Pure Component renders");
        return (
            <div style={styles.parentDiv}>Hello from pure component
            <p style={styles.para}>Kamal Walia</p>
            <p className="paraClass">Kamal Walia</p>
            
            </div>
        )
    }
}



export default PureComponent;
