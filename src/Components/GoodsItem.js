import React from 'react';
import cat from "../assets/images/cat.png"


const GoodsItem = ({item}) => {

    return (
        <>
            <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.089 V0.979 C0,0.991,0.014,1,0.032,1 H0.968 C0.986,1,1,0.991,1,0.979 V0.021 C1,0.009,0.986,0,0.968,0 H0.135 L0,0.089"></path>
                </clipPath>
            </svg>
            <div className="fullCard">

                <div className="wrap">
                    <div className="card">
                        <div className="summary">
                            <div className="description">{item.description}</div>
                            <div className="name">{item.name}</div>
                            <div className="species">{item.species}</div>
                            <div className="portions">{item.portions.split(" ").map(item => Number(item) > 0 ? <b>{item}</b> : <> {item}</>)}</div>
                            <div className="gift">{item.gift.split(" ").map(item => Number(item) > 0 ? <b>{item} </b> : <> {item}</>)}</div>
                        </div>

                        <img src={cat} alt="Cat" className="cat"/>
                        <div className="weight">
                            <span>{item.weight}</span>
                            <span>кг</span>

                        </div>
                    </div>
                </div>

                <div className="additionalInfo">Чего сидишь? Порадуй котэ, <span>купи</span><span>.</span></div>

            </div>


        </>
    );
}

export default GoodsItem;