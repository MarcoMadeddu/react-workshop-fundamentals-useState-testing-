interface image{
    image: string;
    title?: string;
}

export default function ProductCardImage(prod:image){
    return(
        <img src={prod.image} className="card-img-top" alt={prod.title}  style = {{maxHeight: "400px"}}/>
    )
}