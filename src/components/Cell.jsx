import React from 'react';
import './Styles.css'

function Cell(props) {
    const state = props && props.state,
          pos   = props && props.pos

    return (
        <div className="Cell">        
        </div>
    );
}

export default Cell;