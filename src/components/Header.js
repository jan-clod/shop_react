import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { connect, useDispatch } from 'react-redux'
import { compose } from 'redux'
import s from './../App.module.css'
import { getItemsAC } from './../redux/itemsReducer.js'
import { getOredersAC, setOrdersAC, deleteOrdersAC } from './../redux/ordersReducer.js'
import { FaTrash } from 'react-icons/fa'


const showOrders = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    let summa = 0
    props.trash.map(el => summa += Number.parseFloat(el.price))
    let click = (item) => {
        dispatch(props.deleteOrdersAC(item))
    }
    return (<div>
        {props.trash.map(el => {
            return (
                <div key={el.id} className={s.accardionTrash_item}>
                    <img src={` ./img/${el.img}`} alt="404" srcset="" />
                    <h2>{el.title}</h2>
                    <p>{el.desc}</p>
                    <b>${el.price}</b>
                    <FaTrash onClick={() => click(el)} className={s.deleteButton} />
                </div>)
        })}
        <p className={s.accardionTrash_summa}>Cумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
    )
}

const showNothing = () => {
    return (
        <h3>Товаров нет</h3>
    )
}

const Header = (props) => {

    let [cardOpen, setCardOpen] = useState(false)

    return (
        <header className={s.header}>
            <div>
                <span className={s.header_logo}>House Staff</span>
                <ul className={s.header_nav}>
                    <li>Главная</li>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Как дела</li>
                </ul>
                <FaShoppingCart
                    onClick={() => setCardOpen(!cardOpen)}
                    className={`${s.header_iconTrash}  ${cardOpen && s.active}`} />
                {cardOpen && (
                    <div className={s.accardionTrash}>
                        {props.trash.length === 0 ? showNothing() : showOrders(props)}
                    </div>
                )}
            </div>
            <div className={`${s.header_presentation}  `}>

            </div>
        </header>
    )
}

let mapStateToProps = (state) => ({
    trash: state.orders  //[{"id":1,"title":"styl","img":"styl1.jpg","desc":"qwe dsfsdgsd qwrqwr  sd!","category":"styl","price":"49.99"}]}
})
let mapDispathToProps = {
    getItemsAC,
    getOredersAC,
    setOrdersAC,
    deleteOrdersAC
}
export const HeaderContainer = compose(
    connect(mapStateToProps, mapDispathToProps)
)(Header)

