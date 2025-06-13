import React from 'react'
import {PriorityCounts} from '../store/PriorityCounts'
import {useAppSelector} from '../store/hooks'

const PriorityStats = () => {
    const {low, medium, high} = useAppSelector(PriorityCounts)
    return (
        <div>
            <h3>Priority statistics</h3>
            <p>Low: {low}</p>
            <p>Medium:{medium}</p>
            <p>High:{high}</p>
        </div>
    )
}

export default PriorityStats