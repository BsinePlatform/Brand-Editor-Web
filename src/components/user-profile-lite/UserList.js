import React, {Component} from "react";
import PropTypes, { array } from "prop-types";
import {
  Container,
  Card,
  CardHeader,
  Button,
  Row,
  Col,
  CardBody
} from "shards-react";

import { NavLink as RouteNavLink } from "react-router-dom";

import PageTitle from "../common/PageTitle";
// import Sex from "../../components/components-overview/Sex";
import api from "../../services/api";

class UserList extends Component {
  
  constructor() {
    super();
    // const response = api.get("/users/1/");
    //   const body = response.json();
    // console.log(this.state.userData);
  }

  state = {
    users: []
  };

  async componentDidMount() {
    this.getUser();
  }

  async getUser() {
    const response = await api.get("/users");
    this.setState({ users: response.data });
  }
  

  render() {
    console.log(this.state.users);

    return (
      <Container fluid className="main-content-container px-4">

      <Row className="btn-add-user">
        <Col>
          <Button theme="accent" tag={RouteNavLink} to="/user-add">Adicionar Usuário</Button>
        </Col>
      </Row>
      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Usuários Ativos</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Nome
                    </th>
                    <th scope="col" className="border-0">
                      Email
                    </th>
                    <th scope="col" className="border-0">
                      Cargo
                    </th>
                    <th scope="col" className="border-0">
                      Telefone
                    </th>
                    <th scope="col" className="border-0">
                      Matriz
                    </th>
                    <th scope="col" className="border-0">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {this.state.users.map(({id, nm_full_name, nm_email, nr_document}) => (
                    <li key={id}>
                      First Name: {nm_full_name} Last Name: {nm_email} avatar: {nr_document}
                    </li>))
                  } */}
                  { this.state.users.map(({id, nm_full_name, nm_email, nm_position, nr_ddi_phone_commercial, nr_ddd_phone_commercial, nr_phone_commercial, id_company}) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{nm_full_name}</td>
                      <td>{nm_email}</td>
                      <td>{nm_position}</td>
                      <td>+{nr_ddi_phone_commercial} {nr_ddd_phone_commercial} {nr_phone_commercial}</td>
                      <td>{id_company}</td>
                      <td className="tb-actions">
                        <i className="material-icons visibility">visibility</i>
                        <i className="material-icons edit">edit</i>
                        <i className="material-icons delete">delete</i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
)}}

UserList.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserList.defaultProps = {
  title: "Users"
};

export default UserList;
