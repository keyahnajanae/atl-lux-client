import React from 'react';
import UserModel from '../models/UserModel';
import HeroSlider from '../components/HeroSlider/HeroSlider'
import { useRecoilState } from "recoil";

const UserEdit = (props) => {
    return (
        <h1>Hello</h1>
    )
}
export default UserEdit


// function UserEdit(props){

//     const [user, setUser] = useRecoilState(userState);
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

  

//     getUser = () => {
//         UserModel.show()
//             .then(json => {
//                 this.setState({
//                     ...json.user,
//                     formUsername: json.user.username
//                 })
//             })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();

//         UserModel.edit(this.state)
//             .then(json => {
//                 this.props.history.push(`/atl-lux/user`)
//             })
//     }

//     handleChange = (event) => {   
//             this.setState({
//                 [event.target.name]: event.target.value
//             })
//         }
//         return (
//             <>
//             <HeroSlider />
//             <div>
//                 <h2>Edit {formUsername}</h2>
//                 <form onSubmit={handleSubmit}>
//                 <div class="form-row">
//   <div class="form-group col-md-6">
//   <label  htmlFor='username'>Username</label>
//           <input
//             class="form-control"
//             type='text'
//             name='username'
//             onChange={this.handleChange}
//             value={this.state.username}
//           />
//   </div>
//   <div class="form-group col-md-6">
//   <label htmlFor='email'>email</label>
//           <input
//           class="form-control"
//             type='text'
//             name='email'
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//   </div>
// </div>
// <div class="form-group col-md-4">
// <label htmlFor='password'>Password</label>
//           <input
//           class="form-control"
//             type='text'
//             name='password'
//             onChange={this.handleChange}
//             value={this.state.password}
//           />

// </div>
// <input class="site-btn" type='submit' value='Save!' />
// </form>
// </div>
// </>
//         )
//     }


// export default UserEdit;