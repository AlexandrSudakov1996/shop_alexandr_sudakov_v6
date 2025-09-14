export const getRandomNumber = (from: number, to: number) => {
    return Math.trunc(Math.random() * (to - from)) + from;
}

export const getEcho = (data: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        }, 1000)
        if (data) resolve(data)
        else reject(new Error('No echo!!!'))
    })
}