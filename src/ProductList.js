
import React, { Component } from 'react'


export default class ProductList extends Component {
   

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <h2 class="text-primary">{this.props.currentCategory}</h2>

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
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">
                                        {product.id}
                                  </th>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        {product.unitPrice}
                                    </td>
                                    <td>
                                        {product.quantityPerUnit}
                                    </td>
                                    <td>
                                        {product.unitsInStock}
                                    </td>
                                    <td>
                                    <button type="button" onClick={() => this.props.addToCart(product)} class="btn btn-warning">Add To Card</button>
                                    </td>
                                </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
