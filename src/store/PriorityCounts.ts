import {RootState} from './Store'

export const PriorityCounts = (state: RootState) => {
    const counts = {
        low: 0,
        medium: 0,
        high: 0
    }

    for (const todo of state.todos.list) {
        if (todo.priority === 'low') counts.low += 1
        else if (todo.priority === 'medium') counts.medium += 1
        else if (todo.priority === 'high') counts.high += 1
    }

    return counts
}