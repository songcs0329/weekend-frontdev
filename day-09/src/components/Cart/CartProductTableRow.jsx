import React from 'react';
import styled from 'styled-components'
import { comma } from '../../utils/NumberUtil';
import RocketFreshIcon from '../RocketIcon/RocketFreshIcon'
import RocketWowIcon from '../RocketIcon/RocketWowIcon'


const FlexboxStyled = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    &.red {
        color: red;
    }
`


const CartProductTableRow = ({title, products, onSelectChangeHandler, onCheckBoxChangeHandler, onProductDeleteHandler}) => {
    const type = ({type}) => {
        switch (type) {
            case "ROCKET_FRESH" : return <RocketFreshIcon/>
            case "ROCKET_WOW" : return <RocketWowIcon/>
            default: return ""
        }
    }



    return (
            <tbody>
                <tr>
                    <th colSpan={7}>{title}</th>
                </tr>
                {products.map(product => {
                    return (
                        <tr key={product.id}>
                            <td>
                                <input
                                    type={"checkbox"}
                                    disabled={product.inventory === 0}
                                    checked={product.checked}
                                    onChange={(e) => {onCheckBoxChangeHandler(product, e.target.checked)}}
                                />
                            </td>
                            <td>
                                <img src={product.img} alt={product.name}/>
                            </td>
                            <td>
                                {product.name}
                                <hr/>
                                <FlexboxStyled className={product.inventory<5?"red":""}>
                                    {product.inventory===0?`품절`:product.inventory<5?`품절임박 ${product.inventory}개 잔여`:""}
                                    <button
                                        type={"button"}
                                        onClick={() => {onProductDeleteHandler(product)}}
                                    >
                                        삭제
                                    </button>
                                </FlexboxStyled>
                            </td>
                            <td>
                                {comma(product.price)}
                            </td>
                            <td>
                                <select
                                    value={product.count}
                                    disabled={product.inventory===0}
                                    onChange={(e) => {onSelectChangeHandler(product, Number(e.target.value))}}
                                >
                                    {[...Array(10)].map((item, index) => {
                                        const value = index + 1;
                                        return <option key={value} value={value} disabled={value > product.inventory}>{value}</option>
                                    })}
                                </select>
                            </td>
                            <td>
                                {comma(product.price * product.count)}
                            </td>
                            <td>
                                {type(product)}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        
        
    );
};

export default CartProductTableRow;