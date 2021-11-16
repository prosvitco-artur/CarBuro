
import { connect } from 'react-redux';
import { Button } from '../prototype/Button/Button';
import style from './Select.modul.css'
import Selectel from './Selectel';


const SelectMenu = (props) => {

    return (
        <div className={style.select_vehicle + " select_vehicle size_14 box_shadow_4 rubik_regular"}>
            <div style={{ padding: '7px 0' }} className="float_left">
                <img alt="car" src="img/icon/car.svg" />
            </div>
            <div style={{ padding: '11px 0' }} className="float_left size_14">Select vehicle</div>

            <Selectel />
            <Selectel />
            <Selectel />
            <Selectel />
            <Button
                title={'SELECT'}
                type={'red'}
                classStyle={""}
            />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, null)(SelectMenu);