import React, { Component } from 'react'

export default class CategoryList extends Component {
    state = {
        categories: [{
            categoryId: 1, categoryName: "Beverages"
        },
        { categoryId: 2, categoryName: "Condiments" }],
      
    }

    componentDidMount(){
        this.getCategories()
    }


    getCategories = () => {
        fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({categories:data})   )
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ul class="list-group">
                    {
                this.state.categories.map(category => (
                <li class="list-group-item " type="button" aria-current= {category.categoryName === this.props.currentCategory? true : false} onClick={() => this.props.changeCategory(category)} key={category.id}> 
                 {category.categoryName}
                 </li>
                ))}
                 </ul>
               
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
        
    }
}
//  {/* <ListGroup>
//                     {
//                         this.state.categories.map(category => (
//                             <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.id}>
//                                 {category.categoryName}
//                             </ListGroupItem>
//                         ))
//                     }
//                 //</ListGroup> */}