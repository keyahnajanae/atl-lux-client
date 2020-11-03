import React from "react";
import Sales from "../components/Properties/Sales";
import PropertyModel from "../models/PropertyModel";

class SaleList extends React.Component {
    state = {
        forSale: [],
    }

    componentDidMount() {
        this.fetchSales();
    }

    fetchSales = () => {
        PropertyModel.sales()
            .then(json => {
                this.setState({
                    forSale: json.forSale
                })
            })
    }

    render() {
        return (
            <Sales data={this.state.forSale} />
        )
    }
}

export default SaleList;