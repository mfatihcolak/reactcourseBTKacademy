import React, { Component } from 'react';
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }

    handleChange = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " email added to db!")
    }

    render() {
        return (
            <div>
                <form>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" onChange={this.handleChange} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name='password' class="form-control" onChange={this.handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <input type="textarea" name='description' class="form-control" onChange={this.handleChange} />
                    </div>
                    <div class="input-group">
                        <select class="form-select" name="city" id="inputGroupSelect04" onChange={this.handleChange}>
                            <option selected>Choose City</option>
                            <option value="1">Ankara</option>
                            <option value="2">Isparta</option>
                            <option value="3">Burdur</option>
                            <option value="4">Denizli</option>
                        </select>
                        <button class="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                    <br></br>

                    <button type="submit" class="btn btn-primary">SAVE</button>
                </form>

            </div>

        )
    }
}
