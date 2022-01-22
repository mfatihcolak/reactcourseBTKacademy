import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Badge, NavItem, NavLink } from 'reactstrap'


export default class CartSummary extends Component {

    renderSummary() {
        return (



            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    CART
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item">
                        {
                            this.props.cart.map(cartItem => (
                                <li class="list-group-item"><a class="dropdown-item" key={cartItem.product.id} >{cartItem.product.productName}
                                    <Badge type="button" color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
                                    <Badge color='success'> {cartItem.quantity} </Badge>

                                </a></li>
                            ))
                        }

                    </a></li>
                    <p class="placeholder-glow">
                        <span class="placeholder col-12"></span>
                    </p>
                   


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
//<a class="dropdown-item btn btn-danger" type='button' href="cart">Go To Cart</a>
//<a class="btn btn-primary" data-bs-toggle={CartList} href="cart" role="button" >
//Go To Cart
//</a>