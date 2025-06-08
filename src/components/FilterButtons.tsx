import React from 'react'
import {useAppDispatch} from '../store/hooks'
import {setFilter, Filter} from '../store/TodoSlice'
import {toast} from 'react-toastify'

function FilterButtons() {
    const dispatch = useAppDispatch()
    return(
        <div>
            <button onClick={() => dispatch(setFilter(Filter.All))}>All</button>
            <button onClick={() => dispatch(setFilter(Filter.Active))}>Active</button>
            <button onClick={() => dispatch(setFilter(Filter.Completed))}>Completed</button>
        </div>
    )
}

export default FilterButtons