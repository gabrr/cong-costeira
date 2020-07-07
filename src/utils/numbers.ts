export const zeroAtLeft = (num: number) => {
    const stringfied = num.toString()

    if (stringfied.length < 2) {
        return `0${stringfied}`
    }
    return num
}