import React from 'react';
import PropertyModel from '../models/PropertyModel';
import HeroSlider from '../components/HeroSlider/HeroSlider'

class EditProperty extends React.Component {
    state = {
        title: '',
        user: null,
        type: '',
        beds: '',
        baths: '',
        price: '',
        address: '',
        photos: '',
        description:'',
        formTitle: '',
    }

    componentDidMount() {
        this.fetchProperties();
    }

    fetchProperties = () => {
        PropertyModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.property,
                    formTitle: json.property.title
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        PropertyModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/atl-lux/properties/${this.props.match.params.id}`)
            })
    }

    handleChange = (event) => {   
            this.setState({
                [event.target.name]: event.target.value
            })
        }

    render() {
        return (
            <>
            <HeroSlider />
            <div>
                <h2>Edit {this.state.formTitle}</h2>
                <form onSubmit={this.handleSubmit}>
                <div class="form-row">
  <div class="form-group col-md-6">
  <label  htmlFor='title'>Title</label>
          <input
            class="form-control"
            type='text'
            name='title'
            onChange={this.handleChange}
            value={this.state.title}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='description'>description</label>
          <input
          class="form-control"
            type='text'
            name='description'
            onChange={this.handleChange}
            value={this.state.description}
          />
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
  <label htmlFor='type'>Type (Please enter for-sale or for-rent)</label>
          <input
          class="form-control"
            type='text'
            name='type'
            onChange={this.handleChange}
            value={this.state.type}
          />
  </div>
</div>
<div class="form-group col-md-4">
<label htmlFor='beds'>Bed</label>
          <input
          class="form-control"
            type='text'
            name='beds'
            onChange={this.handleChange}
            value={this.state.beds}
          />
</div>
<div class="form-group col-md-4">
<label htmlFor='baths'>Baths</label>
          <input
          class="form-control"
            type='text'
            name='baths'
            onChange={this.handleChange}
            value={this.state.baths}
          />
</div>
<div class="form-row">
  <div class="form-group col-md-6">
  <label htmlFor='price'>Price</label>
          <input
          class="form-control"
            type='text'
            name='price'
            onChange={this.handleChange}
            value={this.state.price}
          />
  </div>
  <div class="form-group col-md-4">
  <label htmlFor='photos'>Image URL</label>
          <input
          class="form-control"
            type='text'
            name='photos'
            onChange={this.handleChange}
            value={this.state.photos}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='address'>address</label>
          <input
          class="form-control"
            type='text'
            name='address'
            onChange={this.handleChange}
            value={this.state.address}
          />
  </div>
</div>
<input class="site-btn" type='submit' value='Save!' />
</form>
</div>
</>
        )
    }
}

export default EditProperty;