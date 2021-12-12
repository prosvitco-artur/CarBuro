import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import React from "react";
import { setCategoryMenu } from '../../redux/CategoryReduser';
import style from './Headers.module.css'

const CategoryNav = ({ categories }) => {
    debugger
    return (
        <div>
            <div className="container category_menu rubik_regular background_white">
                {categories && categories.map(k => <span className={style.menuBar} key={k.id}>
                    <span className=" pointer_red">
                        {k.name}
                    </span>
                    {<div className="container cat-list grid grid_columns_6 grid_gap_30_20 rubik_regular">
                        {k.children ? k.children.map(key => <CategoryTitle key={key} name={key.name} image={key.img} />) : 'No child category'}
                    </div>
                    }
                </span>)
                }
            </div>
        </div >
    )
}

let CategoryTitle = (props) => {
    debugger
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