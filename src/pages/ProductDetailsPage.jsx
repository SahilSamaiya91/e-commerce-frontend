import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {

    const { title } = useParams();
  return (
    <div className='p-10'>
          <h1 className="text-5xl text-red-500">WELOCME TO PRODUCT PAGE : {title}</h1>
    </div>
  )
}

export default ProductDetailsPage
