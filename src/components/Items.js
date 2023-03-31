import { connect } from 'react-redux'
import { compose } from 'redux'
import s from './../App.module.css'
import { Item } from './Item'
import { getItemsAC } from './../redux/itemsReducer.js'
import { getOredersAC, setOrdersAC, cleanOrdersAC } from './../redux/ordersReducer.js'

export const Items = (props) => {
  console.log(props)
  return (
    <main className={s.items}>
      {props.state.items.map(el => (
        <Item
          
          key={el.id}
          item={el}
          trash={props.trash}
          cleanOrdersAC={cleanOrdersAC}
          setOrdersAC={setOrdersAC} />
      ))}

    </main>
  )
}

let mapStateToProps = (state) => ({
  state: state.items,
  trash: state.orders
})
let AC = {
  getItemsAC,
  getOredersAC,
  setOrdersAC,
  cleanOrdersAC,
}
export const ItemContainer = compose(
  connect(mapStateToProps, AC)
)(Items)
