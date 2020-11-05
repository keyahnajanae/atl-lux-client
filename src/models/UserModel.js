const URL = "http://localhost:3001/api/v1/atl-lux/user";

class UserModel {
  static show() {
    return fetch(URL, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }


static edit(userId, userData) {
  return fetch(`${URL}/${userId}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
          "Content-Type": "application/json"
          
      },
      body: JSON.stringify(userData)
  })
  .then(response => response.json());
}
}

export default UserModel;