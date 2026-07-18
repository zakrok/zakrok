export function toHex(R:number, G: number, B: number): string {
    const hex = ['A', 'B', 'C', 'D', 'E', 'F']
    const digit = (n: number) => n >= 10 ? hex[n - 10] : n.toString()

    return `#` + [R, G, B]
        .map(c => digit(Math.floor((c / 16))) + digit(c % 16))
        .reduce((acc, c) => acc + c)
}

export function toGrayscaleHex(G: number): string {
    return toHex(G,G,G)
}
