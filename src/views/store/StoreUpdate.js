import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

import PageTitle from "../../components/common/PageTitle";
import StoreUpdate from "../../components/bsine/store/StoreUpdate";

const Store = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Editar Loja" subtitle="Lojas" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row >
      <Col className="btn-add-user">
        <Button theme="accent" tag={RouteNavLink} to="/store">Voltar</Button>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <StoreUpdate/>
      </Col>
    </Row>
  </Container>
);

export default Store;
