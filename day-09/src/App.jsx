import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import data from '../data'
import CartProductTableRow from './components/Cart/CartProductTableRow';
import { comma } from './utils/NumberUtil';



const App = () => {
    const [products, _setProducts] = useState(data.products);

    const totalPrice = products
        .filter(it => it.checked)
        .reduce((result, product) => result + product.price * product.count, 0)

    const onSelectChangeHandler = (product, value) => {
        setProducts(product, (it) => {
            return {
                ...it,
                count: value
            }
        })
    }

    const onCheckBoxChangeHandler = (product, value) => {
        setProducts(product, (it) => {
            return {
                ...it,
                checked: value
            }
        })
    }

    const setProducts = (product, cb) => {
        const newProducts = products.map((it) => {
            if(it === product) return cb(it)
            return it
        })
        _setProducts(newProducts)
    }

    const onCheckBoxAllChangeHandler = (isCheck) => {
        const newProducts = products.map((it) => {
            if(it.inventory !== 0) {
                return {
                    ...it,
                    checked: isCheck
                }
            }
            return it
        })
        _setProducts(newProducts)
    }

    const onProductDeleteHandler = (product) => {
        const newProducts = products.filter(it => it !== product)
        _setProducts(newProducts)
    }

    const onCheckedProductsBuyHandler = () => {
        const buyProducts = products.filter(it => it.checked).map(data => {            
            return {
                id: data.id,
                count: data.count
            }
        })
        console.log(buyProducts)
    }


    
    return (
        <div>
            {/* <Counter/> */}
            <label>
                <input
                    type={"checkbox"}
                    onClick={onCheckBoxAllChangeHandler}
                    onChange={(e) => {onCheckBoxAllChangeHandler(e.target.checked)}}
                />
                전체선택 {products.filter(product => product.checked).length}/{products.length}
            </label>
            <table>
                <CartProductTableRow
                    title={"로켓프레시"}
                    products={products.filter(it => it.type === "ROCKET_FRESH")}
                    onSelectChangeHandler={onSelectChangeHandler}
                    onCheckBoxChangeHandler={onCheckBoxChangeHandler}
                    onProductDeleteHandler={onProductDeleteHandler}
                />
                <CartProductTableRow
                    title={"로켓프레시"}
                    products={products.filter(it => it.type === "ROCKET_WOW")}
                    onSelectChangeHandler={onSelectChangeHandler}
                    onCheckBoxChangeHandler={onCheckBoxChangeHandler}
                    onProductDeleteHandler={onProductDeleteHandler}
                />
                <CartProductTableRow
                    title={"판매자"}
                    products={products.filter(it => it.type === "PARTNER")}
                    onSelectChangeHandler={onSelectChangeHandler}
                    onCheckBoxChangeHandler={onCheckBoxChangeHandler}
                    onProductDeleteHandler={onProductDeleteHandler}
                />
            </table>
            <div>
                총합계 : {comma(totalPrice)}
                <br/>
                <br/>
                <button
                    type="button"
                    onClick={onCheckedProductsBuyHandler}
                >
                    구매하기
                </button>
            </div>
        </div>
    );
};

export default App;