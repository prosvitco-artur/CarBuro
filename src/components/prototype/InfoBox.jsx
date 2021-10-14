import { ReactComponent as Warning } from '../../common/img/warning.svg'

const InfoBox = () => {
    return (
        <div className="info_box grid_columns_2 grid_gap_30">
            <Warning />
            <div>
                <p>Vehicle info required to guarantee fit</p>
                <p>Select vehicle</p>
            </div>
        </div>

    )
}

export default InfoBox;