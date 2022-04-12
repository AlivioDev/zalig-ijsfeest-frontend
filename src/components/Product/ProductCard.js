import React, {useState, useEffect} from 'react';
import './ProductCard.css';
import axios from "axios";


function ProductCard({endpoint}) {
    const [productCard, setProductCard] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get(`${endpoint}`);
                console.log(result.data);
                setProductCard(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [endpoint]);


    return (
        <div>
            {productCard &&
                <>
                    <div className="card">
                        <h4>{productCard.name}</h4>
                        <img src={productCard.sprites.front_default} alt={`${productCard.name}`}/>
                        <div className="container">
                            <p>Moves: {productCard.moves.length}</p>
                            <p>Weight: {productCard.weight}</p>
                            <ul>Abilities:
                                {productCard.abilities.map((canDo) => {
                                    return(
                                        <li key ={canDo.slot}>
                                            {canDo.ability.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            }
        </div>
    );}

export default ProductCard;