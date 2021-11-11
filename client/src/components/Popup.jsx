import React from "react";

const Popup = ({children, widthPopup}) => {
    return(
        <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <div style={{width: widthPopup}} className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default Popup