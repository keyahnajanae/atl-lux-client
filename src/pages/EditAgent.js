import React from 'react';
import AgentModel from '../models/AgentModel';
import HeroSlider from '../components/HeroSlider/HeroSlider'

class EditAgent extends React.Component {
    state = {
        name: '',
        agency: '',
        number: '',
        experience: '',
        formName: '',
    }

    componentDidMount() {
        this.fetchAgents();
    }

    fetchAgents = () => {
        AgentModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.agent,
                    formName: json.agent.name
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        AgentModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/atl-lux/agents/${this.props.match.params.id}`)
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
                <h2>Edit {this.state.formName}</h2>
                <form onSubmit={this.handleSubmit}>
                <div class="form-row">
  <div class="form-group col-md-6">
  <label  htmlFor='name'>name</label>
          <input
            class="form-control"
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='agency'>agency</label>
          <input
          class="form-control"
            type='text'
            name='agency'
            onChange={this.handleChange}
            value={this.state.agency}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='experience'>experience</label>
          <input
          class="form-control"
            type='text'
            name='experience'
            onChange={this.handleChange}
            value={this.state.experience}
          />
  </div>
</div>
<div class="form-group col-md-4">
<label htmlFor='number'>number</label>
          <input
          class="form-control"
            type='text'
            name='number'
            onChange={this.handleChange}
            value={this.state.number}
          />
</div>
<input class="site-btn" type='submit' value='Update!' />
</form>
</div>
</>
        )
    }
}

export default EditAgent;