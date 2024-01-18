export interface ICats {
    _id : string
    mimetype :string
    size : number
    tags : []
}
export interface IProduct {
    id?:number
    title: string
    price: number
    description: string
    category: string
    image : string
    rating : {
        rate : number
        count : number
    }



}