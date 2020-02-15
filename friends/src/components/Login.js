import React from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      isLoading: false
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,       
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        isLoading: true
      }
    });
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
        this.setState({
          credentials: {
            isLoading: false
          }
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />   
           <button type='submit'> {this.state.credentials.isLoading && <Loader type="Puff" color="#204963" height={60} width={60} timeout={3000} />}
             Log in
          </button>
           
            
        </form>
      </div>
    );
  }
}

export default Login;
