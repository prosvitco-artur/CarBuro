
import { ReactComponent as VectorLang } from '../../common/img/icon/vector_language.svg';

const SelectMenu = (props) => {
    return (
        <div className="select_vehicle size_14 box_shadow_4 rubik_regular">
            <div style={{ padding: '7px 0' }} className="float_left">
                {/*<img alt="car" src="img/icon/car.svg" />*/}
            </div>
            <div style={{ padding: '11px 0' }} className="float_left  size_14">Select vehicle</div>
            <div className="float_left radius_50 background_grey select ">
                <span>Year</span>
                <VectorLang />
                <div className="box_shadow_4 background_white box_select scrolling">
                    <p className="pointer_red">2021</p>
                    <p className="pointer_red">2020</p>
                    <p className="pointer_red">2019</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2021</p>
                    <p className="pointer_red">2020</p>
                    <p className="pointer_red">2019</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2021</p>
                    <p className="pointer_red">2020</p>
                    <p className="pointer_red">2019</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                </div>
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