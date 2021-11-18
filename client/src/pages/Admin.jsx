import React from "react";
import { connect } from "react-redux";
import { Button } from "../components/prototype/Button/Button";
import { setCurrentModal } from "../redux/GlobalReducer";

const Admin = (props) => {
    
    const setSignInPopup = (type) => {
        props.setCurrentModal(type);
    }

    return (
        <div className="container" style={{height: '100px', display: 'flex', justifyContent: 'space-evenly'}}>
            
            <Button
                title={'add product'}
                type={'red'}
                classStyle={""}
                click = {()=>setSignInPopup('add-product')}
            />
            <Button
                title={'add category'}
                type={'red'}
                classStyle={""}
                click = {()=>setSignInPopup('add-category')}
            />
            <Button
                title={'add category'}
                type={'red'}
                classStyle={""}
                click = {()=>setSignInPopup('add-category')}
            />
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        global: state.global,
        user: state.user,
    }
}

export default connect(mapStateToProps, {setCurrentModal})(Admin);