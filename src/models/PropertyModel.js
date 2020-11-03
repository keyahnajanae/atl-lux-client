const URL = 'http://localhost:3001/api/v1/atl-lux'
const URL2 = 'http://localhost:3001/api/v1/atl-lux/properties'

class PropertyModel {
    static all = () => {
        return fetch(URL2).then(response => response.json());
    }

    static rental = () => {
        return fetch(`${URL}/for-rent`).then(response => response.json());
    }

    static sales = () => {
        return fetch(`${URL}/for-sale`).then(response => response.json());
    }

    static delete = (propertyId) => {
        return fetch(`${URL2}/${propertyId}`).then(response => response.json());
    }


    static show = (propertyId) => {
        return fetch(`${URL2}/${propertyId}`).then(response => response.json());
    }

    static create = (propertyData) => {
        return fetch(URL2, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(propertyData)
        })
        .then(response => response.json());
    }

    static edit = (propertyId, propertyData) => {
        return fetch(`${URL2}/${propertyId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(propertyData)
        })
        .then(response => response.json());
    }
}

export default PropertyModel;
