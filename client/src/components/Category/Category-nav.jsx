import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductCategory } from "../../redux/ProductReduser";
import React, {useState} from "react";

const CategoryNav = (props) => {

    
    let [category, setCategory] = useState();
    let [showingCat, setShowingCat] = useState(false);

    const showCurrentCategory = () =>{
        if(!showingCat){
            setCategory(props.categories.Interior);
            setShowingCat(true);
        } else {
            setCategory();
            setShowingCat(false);
        } 

    }
        


    return (
        <div>
            <div className="container category_menu rubik_regular background_white">
                {Object.keys(props.categories).map(key => <a onClick = {()=>showCurrentCategory()}><span className="pointer_red">{key}</span></a>)}
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
        <div className="item"><img src={props.image} alt={"Mirrors" + "test"} /><p>{props.name}</p></div>
    </NavLink>)
}
let mapStateToProps = (state) => {
    return { categories: state.product.category }
}

export default connect(mapStateToProps, null)(CategoryNav)