import {  useLoaderData } from "react-router-dom";
import OurServicesCard from "../Amni/OurServicesCard";


const OurServices = () => {
  
const data = useLoaderData()


  return (

  
    <div >
      <div>
      <h2 className="text-4xl text-center  font-sans font-semibold">Our Services</h2>
      </div>
      <div className=" w-[1250px] mx-auto  mt-5 grid grid-cols-3 gap-4">
      {
        data?.map(Data => <OurServicesCard key={data.id} data={Data}></OurServicesCard>)
      }
      </div>
    </div>
  );
};

export default OurServices;


