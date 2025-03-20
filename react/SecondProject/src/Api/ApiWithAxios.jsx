import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ApiAxios() {
    const [record,setRecord] = useState([]);
    useEffect(()=>{
        fetchApi();
    },[])
    const fetchApi = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products');
        setRecord(response.data);
    }
    return (
    <div>
        <h1>Api</h1>
        <div className="container">
            <div className="row">
                {
                    record.map((item)=>{
                        return(
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={item.image} alt="image" className="card-img-top"/>
                                    <div className="card-body">
                                        <h4>{item.title}</h4>
                                        <h5>{item.price}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
