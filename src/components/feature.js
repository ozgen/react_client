import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Reactable from  'reactable';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [{
    id: 1,
    name: "Item name 1",
    price: 100
}, {
    id: 2,
    name: "Item name 2",
    price: 100
}];
// It's a data format example.
function priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}


class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();

    }


    render() {
        return (

            <BootstrapTable data={products} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product
                    ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

function mapStateToProps(state) {
    return {message: state.auth.message};
}

export default connect(mapStateToProps, actions)(Feature);
