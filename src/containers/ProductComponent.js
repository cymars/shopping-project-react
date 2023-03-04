import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   const renderList = products.map((product) => {

        const { id, title, image, price, category} = product;
   return(     
     <div className='d-flex row align-items-start hover-focus productcomponent ' style={{ width: '18rem', height: '35rem' }} key={id}>
          <Link className='linku' to={`/product/${id}` }  >
          <img  src={image} className="card-img-top imgu" style={ {height:'18rem'}} alt={title} />
            <div className="card-body col texts ">
                <h5 className="card-title">{title}</h5>


                <span className='h6 d-flex justify-content-center' >{category} </span>  
                <br/>
                <span className="h2 d-flex justify-content-center align-items-center text-center" >${price}</span>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            </div> 
            </Link>
        </div>)
    })
   return(
    <>{renderList}</>
   )
}


export default ProductComponent;