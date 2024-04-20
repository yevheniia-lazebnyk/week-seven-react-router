export default function Clothes({anyClothes}) {
    return(
        <div className="products">
            {anyClothes.map((element) => {
                const {id, name, price, image} = element;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} width="400" height="500" alt="Clothes" />
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