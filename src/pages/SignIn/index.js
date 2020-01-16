import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/download.png";
// import BgImage from "../../assets/bg-login.png";
import api from "../../services/api";
import { login } from "../../services/auth";

// import { Form, Container } from "./styles";
import { Main, Login } from "./styles";
import { Container, Form, Row, Col, Button } from "react-bootstrap"

var sectionStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${BgImage})`
};

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/blog-overview");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <Main style={ sectionStyle } >
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Login>
                <Form onSubmit={this.handleSignIn}>
                  <img src={Logo} alt="Bsine logo" />
                  <Form.Group controlId="formEmail">
                    {this.state.error && <p>{this.state.error}</p>}
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })} />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    {/* <Form.Label>Senha</Form.Label> */}
                    <Form.Control type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })} />
                  </Form.Group>
                    <Button variant="primary" size="xxl" type="submit">
                      ENTRAR
                    </Button>
                    <a href="">Esqueci minha senha</a>
                </Form>
              </Login>
            </Col>
          </Row>
        </Container>
      </Main>
    );
  }
}

export default withRouter(SignIn);