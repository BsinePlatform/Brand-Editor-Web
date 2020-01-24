import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import StoreList from "../../components/bsine/store/StoreList";

const Store = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Listar Lojas" subtitle="Lojas" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="12">
        <StoreList/>
      </Col>
    </Row>
  </Container>
);

export default Store;
