import axios from 'axios';



const URL = axios.get('https://git.heroku.com/atl-lux-api.git/api/translations') 
const URL2 = axios.get('https://git.heroku.com/atl-lux-api.git/api/translations') 

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
            return fetch(`${URL2}/${propertyId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json());
        }
    


    static show = (propertyId) => {
        return fetch(`${URL2}/${propertyId}`).then(response => response.json());
    }

    static create = (propertyData) => {
        console.log("propertyData",propertyData)
        return fetch(URL2, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
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
