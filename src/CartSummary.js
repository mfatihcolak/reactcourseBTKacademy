import React, { Component } from 'react'
import { Badge, NavItem, NavLink } from 'reactstrap'

export default class CartSummary extends Component {

    renderSummary() {
        return (
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                    CART
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">
                        {
                            this.props.cart.map(cartItem => (
                                <li class="list-group-item"><a class="dropdown-item" key={cartItem.product.id} >{cartItem.product.productName}
                                    <Badge color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
                                    <Badge color='success'> {cartItem.quantity} </Badge>
                                </a></li>
                            ))
                        }
                    </a></li>

                </ul>
            </li>
        )
    }

    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}

{/* <li><a class="dropdown-item" href="#">Another action</a></li>
<li><hr class="dropdown-divider"/></li>
<li><a class="dropdown-item" href="#">Something else here</a></li> */}