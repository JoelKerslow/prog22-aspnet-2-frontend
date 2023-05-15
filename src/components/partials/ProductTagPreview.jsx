import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard"
import { NavLink } from "react-router-dom";

const ProductTagPreview = ({ tag, tagId }) => {
	const { getProductsByTag, products } = useContext(ProductContext)
    const [shortProdList, SetshortProdList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex <0){
            newIndex = 0;
        }else if(newIndex >= shortProdList.length){
            newIndex = shortProdList.length;
        }
        setActiveIndex(newIndex)
    };

    useEffect(()=>{
        const tagIdInt = parseInt(tagId);
        const getProductsAsync = async () => {
            getProductsByTag(tagIdInt)
        };
        getProductsAsync();
    }, []);
    
    useEffect(()=>{
        const shortlist = products.splice(0,6)
        SetshortProdList(shortlist)
    },[products])

    return (
			<div className="previewContainer">
				<div className="textRow">
					<div className="tagText">
						{!tag ? (<div className="tagText">Insert tag</div>) : (<div className="tagText">{tag}</div>)}
					</div>
					<div className="fullListLink">
						<NavLink className="angleIcon" to="/Search">
                            view all<i className="fa-thin fa-angle-right"></i>
                        </NavLink>
					</div>
				</div>
                <div className="cardView">
                    <div className="productCards" style={{ transform: `translate(-${activeIndex * 80}%)` }}>
                        {shortProdList.map((product) => {
                            return <div className="oneCard"><ProductCard key={product.id} product={product} /></div>
                        })}
                    </div>
                        <button className="button-left" onClick={()=>{updateIndex(activeIndex - 1)}}><i className="fa-regular fa-angle-left"></i></button>
                        <button className="button-right" onClick={()=>{updateIndex(activeIndex + 1)}}><i className="fa-regular fa-angle-right"></i></button>
                </div>
			</div>
		);
};

export default ProductTagPreview;
