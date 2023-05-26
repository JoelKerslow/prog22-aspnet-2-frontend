import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard"
import { NavLink } from "react-router-dom";

const ProductTagPreview = ({ tag, tagId }) => {
	const { getProductsListByTagForPreview } = useContext(ProductContext)
    const [activeProdList, setActiveProdList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [shortList, setShortList] = useState([]);

    const productsBaseUrl =
    "https://aspnet2-grupp1-backend.azurewebsites.net/api/Products/";
     const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0";
    
     const getProductsAsync = (tagId) =>{
         fetch(productsBaseUrl + "tag?tagId=" + tagId, {
             headers: {
                 "API-KEY": apiKey,
                },
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Error fetching products");
                }
            })
            .then((data) => {
                // console.log(data);
                setActiveProdList(data)
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
     }


        useEffect(()=>{
            const tagIdInt = parseInt(tagId);
            
            const getProducts = () => {
                getProductsAsync(tagIdInt)
            }
            
            getProducts();
        }, []);
        
        useEffect(() => {
            		const shortlist = activeProdList.splice(0, 6);
            		setShortList(shortlist);
                    console.log(shortList)
            	}, [activeProdList]);
            
            const updateIndex = (newIndex) => {
               if(newIndex <0){
                   newIndex = 0;
               }else if(newIndex >= shortList.length * 0.5){
                   newIndex = 0;
               }
               setActiveIndex(newIndex)
           };
        //    
            return (
                <div className="previewContainer">
				<div className="textRow">
					<div className="tagText">
						{!tag ? (<div className="tagText">Amazing Products</div>) : (<div className="tagText">{tag}</div>)}
					</div>
					<div className="fullListLink">
						<NavLink className="angleIcon" to={`/Products/tag/${tagId}`} >
                            view all<i className="fa-thin fa-angle-right"></i>
                        </NavLink>
					</div>
				</div>
                <div className="cardView">
                    <div className="productCards" style={{ transform: `translate(-${activeIndex * 50}%)` }}>
                        {shortList.map((product) => {
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
