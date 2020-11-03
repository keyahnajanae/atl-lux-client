import React from "react";
import Rentals from "../components/Properties/Rentals";
import PropertyModel from "../models/PropertyModel";
import HeaderSlider from '../components/HeroSlider/HeroSlider'

class RentalList extends React.Component {
    state = {
        forRent: [],
    }

    componentDidMount() {
        this.fetchRentals();
    }

    fetchRentals = () => {
        PropertyModel.rental()
            .then(json => {
                this.setState({
                    forRent: json.forRent
                })
            })
    }

    render() {
        return (
            
            <>
            <HeaderSlider/>
            <Rentals data={this.state.forRent} />
            </>
        )
    }
}

export default RentalList;