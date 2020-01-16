import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Adicionar Usuário" subtitle="Usuários" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row className="btn-add-user">
      <Col>
        <Button theme="accent" tag={RouteNavLink} to="/user">Voltar</Button>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <UserAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;
