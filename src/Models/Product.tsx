export interface Product{
    title: string,
    image: string,
    description: string
    size: 'L' | 'M' | 'XL',
    gender: 'M' | 'F',
    color: string,
    price: number,
    brand: string,
    returnAvailable: boolean,
}