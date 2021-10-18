
import {ReactComponent as VectorLang} from '../../common/img/icon/vector_language.svg';

const SelectMenu = (props) => {
    return (
        <div className="select_vehicle size_14 box_shadow_4 rubik_regular">
            <div style={{ padding: '7px 0' }} className="float_left">
                {/*<img alt="car" src="img/icon/car.svg" />*/}
            </div>
            <div style={{ padding: '11px 0' }} className="float_left  size_14">Select vehicle</div>
            <div className="float_left radius_50 background_grey select">
                <span>Year</span>
                <VectorLang />
                {/*<ul className="box_shadow_4 background_white box_select">*/}
                {/*    <li className="pointer_red">2021</li>*/}
                {/*    <li className="pointer_red">2020</li>*/}
                {/*    <li className="pointer_red">2019</li>*/}
                {/*    <li className="pointer_red">2018</li>*/}
                {/*</ul>*/}
            </div>
            <div className="float_left radius_50 background_grey select">
                <span>Year</span>
                <VectorLang />

            </div>
            <div className="float_left radius_50 background_grey select">
                <span>Year</span>
                <VectorLang />
            </div>
            <div className="float_left radius_50 background_grey select">
                <span>Year</span>
                <VectorLang />
            </div>
            <div className="float_left">
                <button className="background_red radius_50 height_50">SELECT</button>
            </div>
        </div>
    )
}
export default SelectMenu;