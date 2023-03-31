import { MdFilterList } from 'react-icons/md'
import { AiOutlineSortAscending } from 'react-icons/ai'
import s from './../App.module.css'
import { useState } from 'react'


export const Filter = () => {
    let [filter, setFilter] = useState(false)
    let [sort, setSort] = useState(false)

    return (
        <div className={s.filter}>
            <div className={s.filter_div} onClick={() => setFilter(!filter)}>
                <MdFilterList
                    className={s.icon}
                />
                <span>Filter</span>
                {filter && (
                    <div className={s.filter_window}>
                        <p>all</p>
                        <p>styl'a</p>
                        <p>divan'y</p>
                    </div>
                )}
            </div>

            <div className={s.filter_div}  onClick={() => setSort(!sort)}>
                <AiOutlineSortAscending
                   
                    className={s.icon}
                />
                <span>Sort</span>
                {sort && (
                    <div className={s.filter_window}>
                        <p>price</p>
                        <p>name</p>
                        <p>default</p>
                    </div>
                )}
            </div>

        </div>
    )
}