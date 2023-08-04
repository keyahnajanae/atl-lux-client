import { useState, useEffect } from "react";
import PropertyModel from '../models/PropertyModel'

function GetProperties(propertyId) {
  const [properties, setProperties] = useState([]);

  function fetchProperties(id) {
    if (id) {
      PropertyModel.show(id).then((data) => {
        setProperties(data.property);
      })
    } else {
      PropertyModel.all().then((data) => {
        setProperties(data.properties);
      });
    }
  }

  useEffect(
    function () {
      fetchProperties(propertyId);
    },
    [propertyId]
  );

  return [properties, fetchProperties];
}

export default GetProperties;
