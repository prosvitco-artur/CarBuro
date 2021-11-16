import React from "react";
import { connect } from "react-redux";
import AddCategory from "../components/Admin/AddCategory";
import { Button } from "../components/prototype/Button/Button";
import { setCurrentModal } from "../redux/GlobalReducer";

const Admin = (props) => {
    
    const setSignInPopup = (type) => {
        props.setCurrentModal(type);
    }

    return (
        <div className="container" style={{height: '100px'}}>
            <div>
            <Button
                title={'add product'}
                type={'red'}
                classStyle={""}
                click = {()=>setSignInPopup('login')}
            />
            </div>
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