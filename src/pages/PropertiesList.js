import React, { useState, useEffect} from "react";
import Properties from "../components/Properties/Properties";
import PropertyModel from '../models/PropertyModel'

function PropertyList(props) {
  const [properties, setProperties] = useState(null);

  function fetchProperties() {
      PropertyModel.all().then((data) => {
        setProperties(data.properties);
        console.log(properties)
      }).catch(error =>{
        console.log(error)
        
      });
    }
  useEffect(
    function () {
      fetchProperties();
    },
    []
  );

  return (
    <div>
      <h1>All Properties</h1>
 
      {properties !== null ? <Properties data={properties} /> : <h1> Coming Soon ...</h1>}
    </div>
  );
}

export default PropertyList;
