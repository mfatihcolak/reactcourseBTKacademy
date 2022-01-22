import React, { Component } from 'react'


export default class CartList extends Component {

    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">QuantityPerUnit</th>
                            <th scope="col"> UnitsInStock</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem => (

                                <tr key={cartItem.product.id}>
                                    <th scope="row">
                                        {cartItem.product.id}
                                    </th>
                                    <td>
                                        {cartItem.product.productName}
                                    </td>
                                    <td>
                                        {cartItem.product.unitPrice}
                                    </td>
                                    <td>
                                        {cartItem.quantityPerUnit}
                                    </td>
                                    <td>
                                        {cartItem.unitsInStock}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
