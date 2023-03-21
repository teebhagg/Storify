import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  productData:productDetails;
}

type productDetails = {
  id:string;
  title:string;
  description:string;
  price:number;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;
  category:string;
  thmubnail:string;
  images:string[];
}

export default function ProductCard(props: Props) {

  const { productData } = props

  return (
    <div className='text-tuncate overflow-hidden text-nowrap' style={{ maxWidth:'288px', cursor:'pointer' }} >
      <div className='position-relative' style={{ maxHeight:'282px' }} >
        <img className='rounded' style={{ width:'100%', aspectRatio:'288/282', objectFit:'cover' }} src={productData.images[0]} alt="" />
        <div 
          className=' mt-2 me-2 rounded-circle position-absolute top-0 end-0' 
          style={{ background:'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(5px)', padding:'5px 8px' }}
        >
          <i className="bi bi-heart "></i>
        </div>
      </div>
      <p className='fs-4 fw-bold mt-2' >{productData.title}</p>
      <div className='d-flex justify-content-between' >
        <p className='my-auto' >GHS {productData.price}</p>
        <div className='d-flex gap-2' >
          <i className="bi bi-star-fill m-auto" style={{ fill:'#FFB800' }} ></i>
          <p className='m-auto' >{productData.rating}</p>
        </div>
      </div>
      <Button className='rounded-pill mt-3' style={{ color:'#8BA88E', background:'white', border:'2px solid #8BA88E' }} >Add to Cart</Button>
    </div>
  )
}
