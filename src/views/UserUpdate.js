import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserUpdate from "../components/user-profile-lite/UserUpdate";

const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Editar Usuário" subtitle="Usuários" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="12">
        <UserUpdate/>
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;