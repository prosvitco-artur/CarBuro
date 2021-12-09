import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import React, {useState} from "react";
import {setCategoryMenu} from '../../redux/CategoryReduser'

const CategoryNav = ({categories}) => {
    let [category, setCategory] = useState();
    let [showingCat, setShowingCat] = useState(false);

    const showCurrentCategory = (key) =>{
        if(!showingCat){
            setCategory(categories.Interior);
            setShowingCat(true);
        } else {
            setCategory();
            setShowingCat(false);
        } 

    }
    return (
        <div>
            <div className="container category_menu rubik_regular background_white">
                {categories && categories.map(k => <span key={k.id} onClick = {()=>showCurrentCategory(k.id)}><span className="pointer_red">{k.name}</span></span>)}
            </div>
            {category && 
            <div className="container cat-list grid grid_columns_6 grid_gap_30_20 rubik_regular">
                {category.map(key=> <CategoryTitle key={key} name={key.name}  image={key.image} /> )}
            </div>
            }
        </div>
    )
}

let CategoryTitle = (props) => {
    return (<NavLink to="/catalog">
        <div className="item"><img src={props.image} alt="Mirrors"/><p>{props.name}</p></div>
    </NavLink>)
}
let mapStateToProps = (state) => {
    return { categories: state.categories.category }
}

export default connect(mapStateToProps, {setCategoryMenu})(CategoryNav)