import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { setCategoryMenu } from '../../redux/CategoryReduser';
import preloader from '../../common/img/nessesary/preloader.gif';
import { Category } from "../../redux/axios/getApi";

const CategoryNav = ({ categories }) => {
    let [category, setCategory] = useState();
    let [showingCat, setShowingCat] = useState(false);

    const showCurrentCategory = async (key) => {
        if (!showingCat) {
            let classCat = new Category();
            let childCat = await classCat.getChildCategory(key);
            if (childCat.data.category.length !== 0) {
                setCategory(childCat.data.category);
            } else {
                setCategory('test');
            }
            setShowingCat(true);
        } else {
            setCategory();
            setShowingCat(false);
        }

    }
    return (
        <div>
            <div className="container category_menu rubik_regular background_white">
                {categories && categories.map(k => <span key={k.id} onMouseEnter={() => showCurrentCategory(k.id)}>
                    <span className="pointer_red">
                        {k.name}
                    </span>
                    {showingCat &&
                    <div className="container cat-list grid grid_columns_6 grid_gap_30_20 rubik_regular">
                        {Array.isArray(category) ? category.map(key => <CategoryTitle key={key} name={key.name} image={key.img} />) : 'No child category'}
                    </div>
                }
                </span>)
                }
                
            </div>


        </div >
    )
}

let CategoryTitle = (props) => {
    return (<NavLink to="/catalog">
        <div className="item">
            <img src={"http://localhost:5000/" + props.image} alt="Mirrors" />
            <p>
                {props.name}
            </p>
        </div>
    </NavLink>)
}
let mapStateToProps = (state) => {
    return { categories: state.categories.category }
}

export default connect(mapStateToProps, { setCategoryMenu })(CategoryNav)