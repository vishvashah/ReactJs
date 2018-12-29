import React from 'react';

//import { action, computed, observable, asMap } from 'mobx';
//import validatorjs from 'validatorjs';

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };
    change = e => {
        //this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        let errors = {};


        if (this.state.firstName.length < 2) {
            isError = true;
            errors["firstName"] = "first name to be atleast 2 character long";
        }

        if (this.state.lastName.length < 2) {
            isError = true;
            errors["lastName"] = "Last name to be atleast 2 character long";
        }

        if (this.state.email.length === 0) {
            isError = true;
            errors["email"] = "email is not valid";
        }

        if (this.state.password.length < 8) {
            isError = true;
            errors["password"] = "password must be atleast 8 character long";
        }

        if (isError) {
            this.setState({
                 ...this.state,
              ...errors
            });
                //this.setState({errors:errors})
        
        }
        return isError;
        
    };
    

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // console.log(this.state);
        const err = this.validate();
        if (err) {
            this.setState({
               
             firstNameError: "",
                lastNameError: "",
                emailError: "",
                passwordError: ""
           });
            
        }
    };

   

    render() {
        return (
            <form>
                <h1>Sign In Form</h1>
<div>
                <input className="fn"
                    name="firstName"
                    placeholder="First name"
                   // value={this.state.firstName}
                    onChange={e => this.change(e)}
                    // errorText={this.state.name}
                    //required=""
                />
<br />
                <span style={{color: "red"}}>{this.state.firstNameE}</span>
</div>
<div>
                <br />
                <input className="fn"
                    name="lastName"
                    placeholder="Last name"
                    //value={this.state.lastName}
                    onChange={e => this.change(e)}
                   // errorText={this.state.lastNameError}
                />
                <br />
                <span style={{color: "red"}}>{this.state.lastName}</span>
                </div>
                <div>
<br />


                <input className="fn"
                    name="email"
                    placeholder="Email"
                    type="email"
                    //value={this.state.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                />
                <br />
                <span style={{color: "red"}}>{this.state.email}</span>
</div>
                <br />
                <div>
                <input className="fn"
                    name="password"
                    placeholder="Password"
                    type="password"
                    //value={this.state.password}
                    onChange={e => this.change(e)}
                    errorText={this.state.passwordError}
                />
                <br />
                <span style={{color: "red"}}>{this.state.password}</span>
</div>
                <br />
                <button onClick={e => this.onSubmit(e)} className="fnn">Submit</button>

            </form>
        );
    }
}