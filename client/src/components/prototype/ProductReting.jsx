
import React from 'react';
import { ReactComponent as Fill } from '../../common/img/fill.svg'
import { ReactComponent as Empty } from '../../common/img/empty.svg'

const ProductEvaluation = (props) => {
    return (
        <>
        {[...Array(props.ret)].map((e, i) => <span className="busterCards" key={i}><Fill /></span>)}
        {[...Array(5-props.ret)].map((e, i) => <span className="busterCards" key={i}><Empty /></span>)}
        ({props.reviews} reviews)
        </>
    )
}

export default ProductEvaluation;