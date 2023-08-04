import React from "react";
import PropertyCard from "../components/Properties/PropertyCard";
import GetProperties from "../hooks/GetProperties";



function PropertyShow(props) {
  const [property] = GetProperties(props.match.params.id);

  return (
    
    property ? <PropertyCard property={property} /> : <h3>Loading...</h3>)
}

export default PropertyShow;
