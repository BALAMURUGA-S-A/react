import './App.css';
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './product.css';


function App() {

    const [product,setProduct]=useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products?limit=20%C2%A0')
      .then(response=>response.json())
      .then(json=>setProduct(json))
    })

  return (
   <>
    
        <div className='col-lg-12'>
            <table className='table table-bordered table-hover'>
                <thead>
                  <tr>
                    <th className='col-lg-2'>image</th>
                    <th className='col-lg-2'>Name</th>
                    <th className='col-lg-2'>Description</th>
                    <th className='col-lg-2'>Rating</th>
                    <th className='col-lg-2'>Category</th>
                    <th className='col-lg-2'>Count</th>
                  </tr>
                  <tbody>
                    {
                      product.map((value,index)=>(
                        <tr>
                          <td><img src={value.image} className="image" alt="sample" height={100}/></td>
                          <td>{value.Name}</td>
                          <td>{value.description}</td>
                          <td>{value.price}</td>
                          <td>{value.category}</td>
                          <td>{value.count}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </thead>
            </table> 
        </div>
     
   </>
  );
}

export default App;
