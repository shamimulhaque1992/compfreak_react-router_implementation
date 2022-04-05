import React from "react";
import Serv from "../Serv/Serv";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      img: "https://thumbs.dreamstime.com/b/computer-repair-engineer-pc-electronic-hardware-shop-performing-laptop-maintenance-developer-fixing-components-technology-145668303.jpg",
      service_name: "Pc Servicing",
      description: "We Repair pc"
    },
    {
      id: 2,
      img: "https://media.wired.com/photos/607f5e54ff921397ebfdb2f9/master/w_2560%2Cc_limit/Gear-PC-Build-1140445164.jpg",
      service_name : "Pc Building",
      description: "We build pc"
    },
    {
      id: 3,
      img: "https://image.shutterstock.com/shutterstock/photos/286796789/display_1500/stock-vector-modern-flat-icons-set-pc-components-computer-store-assembling-a-desktop-computer-286796789.jpg",
      service_name : "Pc Components",
      description: "We sell pc components"
    },
    {
      id: 4,
      img: "https://image.made-in-china.com/2f0j00dMPiGFuBEIqH/Wholesale-Wooden-Home-Office-Furniture-Computer-Working-Desk-PC-Table.jpg",
      service_name : "Pc Table Supply",
      description: "We Supply pc Table"
    },
    {
      id: 5,
      img: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjF6S0x6VVFvSkwuX0FDX1NMMTUwMF8uanBn.jpg",
      service_name : "Pc Chair Supply",
      description: "We supply pc Chair"
    },
  ];
  return (
    <div>
      <h1 className="text-center">Services</h1>
      <div className="container mb-20 servies grid grid-cols-2 gap-2 ">
        {services.map((service) => (
          <Serv key={service.id} service={service}></Serv>
        ))}
      </div>
    </div>
  );
};

export default Services;
