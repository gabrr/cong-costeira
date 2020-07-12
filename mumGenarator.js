const numberRepeat = num => {
    const prefix = `021 (48) `
    for (let i = 0; i <= 99; i++) {
        const sufix = i <= 9 ? `0${i}` : i ;
        console.log(prefix + num + sufix)
    }
}