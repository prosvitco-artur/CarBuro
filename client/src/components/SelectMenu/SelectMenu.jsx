
import { ReactComponent as VectorLang } from '../../common/img/icon/vector_language.svg';
import { Button } from '../prototype/Button/Button';

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
                <Button
                    title={'SELECT'}
                    type={'red'}
                    classStyle={""}
                />
            </div>
        </div>
    )
}
export default SelectMenu;