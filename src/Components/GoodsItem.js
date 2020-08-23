import React from 'react';
import cat from "../assets/images/cat.png"


const GoodsItem = ({item, selected, addSelectedProduct, removeSelectedProduct, hoverSelected, addHoverSelectedProduct, removeHoverSelectedProduct}) => {


    const clickHandler = (id) => {
        if (item.inStock) {
            if (selected.includes(id)) {
                removeSelectedProduct(id)
                document.getElementById(id).classList.remove("active")
                document.getElementById(id).classList.remove("hovered")
            } else {
                addSelectedProduct(id)
                document.getElementById(id).classList.add('active')
            }
        }
    }

    const hoveredAdd = (id) => {
        if (item.inStock) {
            if (selected.includes(id)) {
                if (!hoverSelected.includes(id)) {
                    document.getElementById(id).classList.add('hovered')
                    addHoverSelectedProduct(id)
                }
            }
        }
    }

    const hoveredRemove = (id) => {
        if (item.inStock) {
            removeHoverSelectedProduct(id)
            document.getElementById(id).classList.remove('hovered')
        }
    }


    return (
        <>
            <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.089 V0.979 C0,0.991,0.014,1,0.032,1 H0.968 C0.986,1,1,0.991,1,0.979 V0.021 C1,0.009,0.986,0,0.968,0 H0.135 L0,0.089"></path>
                </clipPath>
            </svg>

            <div className="fullCard mb-md-4 mb-5">

                <div className={item.inStock ? "wrap" : "wrap wrapDisabled"} id={item.id}
                     onClick={() => clickHandler(item.id)}
                     onMouseLeave={() => {
                         hoveredRemove(item.id)
                     }}
                     onMouseEnter={() => {
                         hoveredAdd(item.id)
                     }}>
                    <div className="card">
                        <div className="summary">
                            <div className="description">{hoverSelected.includes(item.id) ? "Котэ не одобряет?" : item.description}</div>
                            <div className="name">{item.name}</div>
                            <div className="species">{item.species}</div>
                            <div className="portions">{item.portions.split(" ").map((item, index) => Number(item) > 0 ? <b key={index}>{item}</b> :
                                <span key={index}> {item}</span>)}</div>
                            <div className="gift">{item.gift.split(" ").map((item, index) => Number(item) > 0 ? <b key={index}>{item}</b> :
                                <span key={index}> {item}</span>)}</div>
                        </div>

                        <img src={cat} alt="Cat" className="cat"/>
                        <div className="weight">
                            <span>{item.weight}</span>
                            <span>кг</span>

                        </div>
                    </div>
                </div>

                {!selected.includes(item.id) && item.inStock
                    ? <div className="additionalInfo">Чего сидишь? Порадуй котэ, <span onClick={() => clickHandler(item.id)}>купи</span><span>.</span></div>
                    : selected.includes(item.id) && item.inStock
                        ? <div className="additionalInfo">{item.additionalDescription}</div>
                        : !item.inStock && <div className="additionalInfo" style={{color: "#ffff66"}}>Печалька, {item.species} закончился.</div>}


            </div>


        </>
    );
}

export default GoodsItem;