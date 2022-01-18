import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row } from "reactstrap";
import alertify from "alertifyjs";
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

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
    alertify.success(product.productName + " addet to cart", 1)
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
                <Route path="cart" element={<div class="col-9"><CartList /> </div>} />
                <Route path="*" element={<div class="col-9"><NotFound></NotFound></div>}
                />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        <div class ="container">
        <div class="clearfix">
          <div class="card bg-dark text-white">
            <img src="https://pbs.twimg.com/profile_images/1233040405094158336/ohJoibic_400x400.jpg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title text-warning">MEHMET FARUK ÖNCEL SİTENİN SAHİBİ</h5>
              <div class="btn-group">
                <a href="https://twitter.com/OncelMFaruk" class="btn btn-primary active" aria-current="page">Twitter</a>
                <a href="https://www.instagram.com/mfarukoncel/" class="btn btn-primary">INSTAGRAM</a>
                <a href="#" class="btn btn-primary">SNAPCHAT</a>
              </div>
            </div>
          </div>
          <p>
            A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
          </p>

          <p>
            And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
          </p>
        </div>
        </div>



      </div>
    )
  }
}


// {/* <Col xs="3">
//               <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
//             </Col>
//             <Col xs="9">
//               <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
//             </Col>
//           </Row > */}