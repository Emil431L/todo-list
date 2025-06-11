export function filterByProperty<T, K extends keyof T>(
    array: T[],
    key: K,
    value: T[K]
) : T[] {
    return array.filter((item) => item[key] === value)
}
