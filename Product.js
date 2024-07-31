import React, { useEffect } from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Product.css'
import pic from './images/women.avif'
import pic1 from './images/bags.avif'
import pic2 from './images/Mens.webp'
export default function Product() {
const [state, setState]=useState([])
const [search, setSearch]=useState("")
const handler=(e)=>{
  setSearch(e.target.value)
}
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setState(json))
      return(
    <>
     <div className='container-fluid' id='promain'>
     <div className='row'>
      <div className='col-md-2 mt-2'>
      <h5><img src={pic} alt='' width='100px' />
        <br/><button onClick={handler} value='Women' className='btn btn-light'><span className='m-2'>Women</span></button></h5>
      </div>
      <div className='col-md-2 mt-4'>
      <h5><img src={pic2} alt='' width='80px' style={{borderRadius:'50%'}}/>
        <br/><button onClick={handler} value='Men' className='btn btn-light'><span className='m-3'>Men</span></button></h5>
      </div>
      <div className='col-md-2 mt-2'>
      <h5><img src={pic1} alt='' width='100px' />
        <br/><button className='btn btn-light' value='Backpack' id='probut1' onClick={handler}>Bags</button></h5>
      </div>
        <div className='col-md-4 mt-2'>
          <h1 id='proh1'><b>Products</b></h1>
        </div>
        <div className='col-md-1 mt-2'>
        <h6> <span className='m-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px'><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg></span>
        <br/>Wishlist</h6>
        </div>
        <div className='col-md-1 mt-2'>
          <h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='25px'><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <br/>Bag</h6>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>
        <input type='text' placeholder='search categorys' id='product' onChange={handler}/>
        </div>
        <div className='col-md-2'>
        <select onChange={handler} id='prosel'>
      <option>Men</option>
      <option>Women</option>
      <option>Bracelet</option>
      <option>Backpack</option>
      <option>Hard Drive</option>
      <option>SATA</option>
    </select>
   
        </div>
      </div>
    <div className='row'>
    {state.filter(item=>item.title.includes(search)).map((x)=>

    <div className='col-md-4' id='procol'>
    <div className="card">
  <img src={x.image} class="card-img-top" id='proimg' width={search} height='300px' alt="..."/>
  <div className="card-body" id='procard'>
    <h5 className="card-title" id='prohead'>{x.title}</h5>
    <hr/>
    <h5 className='text-success'>Price: $ {x.price}<br/>
    Rating: {x.rating.rate}</h5>
    <p className="card-text">{x.description}</p>
    <button className='btn btn-outline-danger' onClick={handler}>{x.category}</button>
    <br/>
    <br/>
    <button className='btn btn-danger'>Add to wishlist</button>
  </div>
  </div>
</div>
 )}
  </div>
</div>
    </>
      )
}