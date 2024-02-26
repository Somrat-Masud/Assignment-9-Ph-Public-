import { Link } from "react-router-dom";

const OurServicesCard = ({data}) => {
    const {image,id,title,description,price,name} = data;
    return (
        <div>
            
            <div className="card h-[600px] bg-base-100 shadow-xl">
            <figure><img className="h-[200px]"  src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center font-sans">{name}</h1>
                <h2 className="card-title text-xl font-sans font-medium">
                {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions ">
                <div className="badge badge-outline font-sans font-semibold mt-2 ">{price}</div> 
                </div>
                    <Link to={`/carddetails/${id}`}>
                <button className="btn btn-primary w-3/4 mx-auto mt-3"> Details</button>
                    
                    </Link>           
            </div>
            </div>
        </div>
    );
};

export default OurServicesCard;

