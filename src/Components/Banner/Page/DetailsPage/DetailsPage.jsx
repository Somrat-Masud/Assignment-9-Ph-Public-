import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
    const [phone, setPhone] = useState({});
    const {id} = useParams();
    const detailsData = useLoaderData();
    console.log(detailsData, id);


    useEffect( ()=> {
        const isExist = detailsData.find(detail => detail.id == id);
        setPhone(isExist)
    },[detailsData, id])

    const { name, image, title, price,others,description} = phone || {}  
    return (
        <div>
        <div className="card h-[600px] bg-base-100 shadow-xl">
        <figure><img className="h-[200px]"  src={image} alt="Shoes" /></figure>
        <p>{others}</p>
        <div className="card-body">
            <h1 className="text-3xl font-bold text-center font-sans">{name}</h1>
            
            <h2 className="card-title text-xl font-sans font-medium">
            {title}
            </h2>
            <p>{description}</p>
           
            <div className="card-actions ">
            <div className="badge badge-outline font-sans font-semibold mt-2 ">{price}</div> 
            </div>
                        
        </div>
        </div>
    </div>
    );
};

export default DetailsPage;