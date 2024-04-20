import { Link } from "react-router-dom";

export default function Clothes({anyClothes}) {
    return(
        <div className="products">
            {anyClothes.map((item) => {
                const {id, name, price, image} = item;
                return(
                    <div className="product-card" key={id}>
                        <Link to={`/about/${item.title}`}>
                        <img src={image} width="400" height="500" alt="Clothes" />
                        </Link>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}