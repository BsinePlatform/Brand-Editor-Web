import React, {Component} from "react";
import PropTypes, { array } from "prop-types";
import {
  Container,
  Card,
  CardHeader,
  Button,
  Row,
  Col,
  CardBody,
} from "shards-react";

import { NavLink as RouteNavLink } from "react-router-dom";
import api from "../../../services/api";
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../styles/bsine-confirm-form.css' // Import css

class StoreList extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    stores: []
  };
  
  async componentDidMount() {
    this.getUser();
  }

  async getUser() {
    const response = await api.get("/stores");
    this.setState({ stores: response.data });
  }

  deleteConfirm = (nm_fantasy_name) => {
    confirmAlert({
      title: 'Excluir "' + nm_fantasy_name + '"?',
      message: 'Tem certeza que deseja excluir a loja?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => alert('Loja excluída.')
        },
        {
          label: 'Não',
          onClick: () => alert('Loja não excluída.')
        }
      ]
    })
  };

  render() {
    // console.log(this.state.user);
    const user = {
      id: ''
    }
    
    return (
      <Container fluid className="main-content-container px-4">

      <Row className="btn-add-user">
        <Col>
          <Button theme="accent" tag={RouteNavLink} to="/store-add">Adicionar Loja</Button>
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
                      Sigla
                    </th>
                    <th scope="col" className="border-0">
                      Nome Fantasia
                    </th>
                    <th scope="col" className="border-0">
                      Cidade
                    </th>
                    <th scope="col" className="border-0">
                      Responsável
                    </th>
                    <th scope="col" className="border-0">
                      Telefone Responsável
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
                  {/* {this.state.stores.map(({id, nm_full_name, nm_email, nr_document}) => (
                    <li key={id}>
                      First Name: {nm_full_name} Last Name: {nm_email} avatar: {nr_document}
                    </li>))
                  } */}
                  { this.state.stores.map(({id, nm_corporate_name, nm_fantasy_name, nr_cnpj, nr_inscricao_estadual, nm_initials, nm_responsible, nm_responsible_email, nr_responsible_ddi, nr_responsible_ddd, nr_responsible_phone, nr_responsible_phone_extension, nm_country, nm_state, nm_city, nm_site, path_img_profile, id_company, id_store_customization, id_user_creator, active}) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{nm_initials}</td>
                      <td>{nm_fantasy_name}</td>
                      <td>{nm_city}</td>
                      <td>{nm_responsible}</td>
                      <td>+{nr_responsible_ddi} {nr_responsible_ddd} {nr_responsible_phone}</td>
                      <td>{id_company}</td>
                      <td className="tb-actions">
                        <button onClick=''>
                          <i className="material-icons visibility">visibility</i>
                        </button>
                        <button onClick=''>
                        <StoreEdit id={id}></StoreEdit>
                        </button>
                        {/* <StoreDelete id={id}></StoreDelete> */}
                        <button value={nm_fantasy_name} onClick={() => this.deleteConfirm(nm_fantasy_name)}>
                          <i className="material-icons delete">delete</i>
                        </button>
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

const StoreDelete = ({ id }) => (
  // <a href={'store-update/'+id} ">
  <button onClick={this.deleteConfirm}>
    <i className="material-icons delete">delete</i>
  </button>
  // </a>
);

const StoreEdit = ({ id }) => (
  <a href={'store-update/'+id}>
    <i className="material-icons edit">edit</i>
  </a>
);

StoreList.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

StoreList.defaultProps = {
  title: "Lojas"
};

export default StoreList;
