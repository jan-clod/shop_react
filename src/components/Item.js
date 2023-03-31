import s from './../App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export const Item = (props) => {
    const dispatch = useDispatch()
    let [cardOpen, setCardOpen] = useState(false)

    const cash = useSelector((store) => store)
    const click = () => {
        let flag = false
        cash.orders.map(el => {
            if (el.id === props.item.id) {
                flag = true
            }
        })
        !flag && dispatch(props.setOrdersAC(props.item))
    }
    return (
        <div className={s.item} onClick={() => setCardOpen(!cardOpen)}>
            <img src={'./img/' + props.item.img} alt="404" srcset="" />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>${props.item.price}</b>
            <div onClick={click} className={s.item_addTrash}>+</div>
            {cardOpen && (
                <div className={s.item_full_modalWindow} onClick={() => setCardOpen(!cardOpen)}>
                    <div className={s.item_modalWindow}>
                        <img src={'./img/' + props.item.img} alt="404" srcset="" />
                        <h2>{props.item.title}</h2>
                        <p>{props.item.desc}</p>
                        <b>${props.item.price}</b>
                        <div onClick={click} className={s.item_addTrash}>+</div>
                    </div>
                </div>

            )}
        </div>

    )
}
