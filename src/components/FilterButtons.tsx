import React from 'react'
import { useAppDispatch } from '../store/hooks'
import { setFilter, Filter } from '../store/TodoSlice'

const FilterButtons: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleFilter = (filter: Filter) => {
        dispatch(setFilter(filter))
    }

    return (
        <div>
            <button onClick={() => handleFilter(Filter.All)}>All</button>
            <button onClick={() => handleFilter(Filter.Active)}>Active</button>
            <button onClick={() => handleFilter(Filter.Completed)}>Completed</button>
        </div>
    )
}

export default FilterButtons