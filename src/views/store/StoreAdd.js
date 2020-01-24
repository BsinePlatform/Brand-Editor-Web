import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

import PageTitle from "../../components/common/PageTitle";
import StoreAdd from "../../components/bsine/store/StoreAdd";

const Store = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Adicionar Loja" subtitle="Lojas" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row className="btn-add-user">
      <Col>
        <Button theme="accent" tag={RouteNavLink} to="/store">Voltar</Button>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <StoreAdd />
      </Col>
    </Row>
  </Container>
);

export default Store;
