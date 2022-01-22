import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row } from "reactstrap";
import alertify from "alertifyjs";
import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [], cartItems:[] }

  componentDidMount() {
    this.getProducts()
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }))
  }
  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart })
    alertify.success(product.productName + " added to cart", 1)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
  }

  

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    
    return (

      <div className="App">

        <div class="container">

          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <div class="row align-items-start">

            <div class="col-3"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} /></div>

            <BrowserRouter>
              <Routes>
                <Route path="/" element={
                  <div class="col-9">
                    <ProductList

                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo} /> </div>}

                />
                <Route path="cart" element={
                  <div class="col-9">
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}>
                    </CartList></div>} />
                <Route path="*" element={<div class="col-9"><NotFound></NotFound></div>}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        
        <p class="placeholder-glow">
          <span class="placeholder col-12"></span>
        </p>

        
        

        <div class="container">
          <div class="card bg-dark text-white">
            <img src="https://pbs.twimg.com/profile_images/1233040405094158336/ohJoibic_400x400.jpg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title text-warning">MEHMET FARUK ÖNCEL SİTENİN SAHİBİ</h5>
              <div class="btn-group">
                <a href="https://twitter.com/OncelMFaruk" class="btn btn-primary" aria-current="page">Twitter</a>
                <a href="https://www.instagram.com/mfarukoncel/" class="btn btn-primary">INSTAGRAM</a>
                <a href="#" class="btn btn-primary">SNAPCHAT</a>
              </div>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img src="https://images.squarespace-cdn.com/content/v1/59440628b3db2b2f36a66f10/1612628670100-3ZW5HRX4MMQFG7MD75EB/DSC_2629.jpeg?format=1000w" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">DENEME</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


