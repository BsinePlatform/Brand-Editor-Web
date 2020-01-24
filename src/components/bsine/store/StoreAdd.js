import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  FormRadio
} from "shards-react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ViaCep from 'react-via-cep';

// import Sex from "../../components/components-overview/Sex";
import api from "../../../services/api";


class StoreAdd extends Component {

  constructor(props) {    
    super(props);
    this.state = { cep: '' };

    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  state = {
    cep:"",
    nm_corporate_name:"", nm_fantasy_name:"", nr_cnpj:"", nr_inscricao_estadual:"", nr_ccm:"", nm_initials:"", nm_responsible:"", nm_responsible_email:"", nr_responsible_ddi:"", nr_responsible_ddd:"", nr_responsible_phone:"", nr_responsible_phone_extension:"", dt_born:"", nm_country:"", nm_state:"", nm_city:"", nm_street:"", nm_neighborhood:"", nm_public_place:"", nm_complement:"", nm_complement_01:"", nr_number:"", nr_zip_code:"", nr_ddi_phone_commercial:"", nr_ddd_phone_commercial:"", nr_phone_commercial:"", nr_phone_commercial_extension:"", nr_ddi:"", nr_ddd:"", nr_phone:"", nr_ddi_01:"", nr_ddd_01:"", nr_phone_01:"", nr_ddi_02:"", nr_ddd_02:"", nr_phone_02:"", nr_ddi_cellphone:"", nr_ddd_cellphone:"", nr_cellphone:"", nm_skype:"", nm_facebook:"", nr_whatsapp:"", nm_linkedin:"", nm_twitter:"", nm_site:"", path_img_profile:"", id_company:"", id_store_customization:"", id_user_creator:"", active:"", 

  };

  handleUserAdd = async e => {
    e.preventDefault();
    const { nm_corporate_name, nm_fantasy_name, nr_cnpj, nr_inscricao_estadual, nr_ccm, nm_initials, nm_responsible, nm_responsible_email, nr_responsible_ddi, nr_responsible_ddd, nr_responsible_phone, nr_responsible_phone_extension, dt_born, nm_country, nm_state, nm_city, nm_street, nm_neighborhood, nm_public_place, nm_complement, nm_complement_01, nr_number, nr_zip_code, nr_ddi_phone_commercial, nr_ddd_phone_commercial, nr_phone_commercial, nr_phone_commercial_extension, nr_ddi, nr_ddd, nr_phone, nr_ddi_01, nr_ddd_01, nr_phone_01, nr_ddi_02, nr_ddd_02, nr_phone_02, nr_ddi_cellphone, nr_ddd_cellphone, nr_cellphone, nm_skype, nm_facebook, nr_whatsapp, nm_linkedin, nm_twitter, nm_site, path_img_profile, id_company, id_store_customization, id_user_creator, active,
    } = this.state;
    
    if (!nm_corporate_name) {
      this.setState({ error: "Preencha os campos!" });
    } else {
      try {
        const response = await api.post("/store", { nm_corporate_name, nm_fantasy_name, nr_cnpj, nr_inscricao_estadual, nr_ccm, nm_initials, nm_responsible, nm_responsible_email, nr_responsible_ddi, nr_responsible_ddd, nr_responsible_phone, nr_responsible_phone_extension, dt_born, nm_country, nm_state, nm_city, nm_street, nm_neighborhood, nm_public_place, nm_complement, nm_complement_01, nr_number, nr_zip_code, nr_ddi_phone_commercial, nr_ddd_phone_commercial, nr_phone_commercial, nr_phone_commercial_extension, nr_ddi, nr_ddd, nr_phone, nr_ddi_01, nr_ddd_01, nr_phone_01, nr_ddi_02, nr_ddd_02, nr_phone_02, nr_ddi_cellphone, nr_ddd_cellphone, nr_cellphone, nm_skype, nm_facebook, nr_whatsapp, nm_linkedin, nm_twitter, nm_site, path_img_profile, id_company, id_store_customization, id_user_creator, active,
        });
        this.props.history.push("/store");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  handleChangeCep(evt) {
    this.setState({ cep: evt.target.value })
  }
  handleSuccess(cepData) {
    console.log(cepData);
  }

  render() {
    return (

  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Preencha o Formulário </h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={this.handleUserAdd}>
              <Row form>
                <Col md="12" className="form-group">
                  <label className="form-user-contact"><h5>Dados da Loja</h5></label>
                </Col>
              </Row>
              <Row form>
                {/* Razão Social */}
                <Col md="5" className="form-group">
                  <label htmlFor="feName">Razão Social</label>
                  <FormInput
                    id="feName"
                    name="nm_corporate_name"
                    placeholder="Razão Social"
                    onChange={e => this.setState({ nm_corporate_name: e.target.value })}
                  />
                </Col>
                {/* Nome Fantasia */}
                <Col md="4" className="form-group">
                  <label htmlFor="feFantasyName">Nome Fantasia</label>
                  <FormInput
                    id="feFantasyName"
                    name="nm_fantasy_name"
                    placeholder="Nome Fantasia"
                    onChange={e => this.setState({ nm_fantasy_name: e.target.value })}
                  />
                </Col>
                {/* CNPJ */}
                <Col md="2" className="form-group">
                  <label htmlFor="feCnpj">CNPJ</label>
                  <FormInput
                    id="feCnpj"
                    name="nr_cnpj"
                    placeholder="CNPJ"
                    onChange={e => this.setState({ nr_cnpj: e.target.value })}
                  />
                </Col>
                {/* CCM */}
                <Col md="1" className="form-group">
                  <label htmlFor="feCcm">Número do CCM</label>
                  <FormInput
                    id="feCcm"
                    name="nr_ccm"
                    placeholder="CCM"
                    onChange={e => this.setState({ nr_ccm: e.target.value })}
                  />
                </Col>
              </Row>
              <Row form>
                {/* IE */}
                <Col md="1" className="form-group">
                  <label htmlFor="feIe">Insc. Estadual</label>
                  <FormInput
                    id="feIe"
                    name="nr_inscricao_estadual"
                    placeholder="Inscrição Estadual"
                    onChange={e => this.setState({ nr_inscricao_estadual: e.target.value })}
                  />
                </Col>
                {/* Sigla */}
                <Col md="1" className="form-group">
                  <label htmlFor="feInitials">Sigla</label>
                  <FormInput
                    id="feInitials"
                    name="nm_initials"
                    placeholder="Sigla"
                    onChange={e => this.setState({ nm_initials: e.target.value })}
                  />
                </Col>
                {/* Responsável */}
                <Col md="3" className="form-group">
                  <label htmlFor="feResponsible">Responsável</label>
                  <FormInput
                    id="feResponsible"
                    name="nm_responsible"
                    placeholder="Responsável"
                    onChange={e => this.setState({ nm_responsible: e.target.value })}
                  />
                </Col>
                {/* Email Responsavel */}
                <Col md="2" className="form-group">
                  <label htmlFor="feResponsibleEmail">Email do Responsável</label>
                  <FormInput
                    id="feResponsibleEmail"
                    name="nm_responsible_email"
                    placeholder="Email do Responsável"
                    onChange={e => this.setState({ nm_responsible_email: e.target.value })}
                  />
                </Col>
                {/* ddi */}
                <Col md="1" className="form-group">
                  <label htmlFor="feDdi">DDI do Resp.</label>
                  <FormInput
                    id="feDdi"
                    name="nr_ddi_phone_commercial"
                    onChange={e => this.setState({ nr_ddi_phone_commercial: e.target.value })}
                  />
                </Col>
                {/* ddd */}
                <Col md="1" className="form-group">
                  <label htmlFor="feDdd">DDD do Resp.</label>
                  <FormInput
                    id="feDdd"
                    name="nr_ddd_phone_commercial"
                    onChange={e => this.setState({ nr_ddd_phone_commercial: e.target.value })}
                  />
                </Col>
                {/* phone */}
                <Col md="2" className="form-group">
                  <label htmlFor="fePhone">Telefone do Resp.</label>
                  <FormInput
                    id="fePhone"
                    name="nr_phone_commercial"
                    onChange={e => this.setState({ nr_phone_commercial: e.target.value })}
                  />
                </Col>
                {/* phone */}
                <Col md="1" className="form-group">
                  <label htmlFor="feRamal">Ramal do Resp.</label>
                  <FormInput
                    id="feRamal"
                    name="nr_phone_commercial_extension"
                    onChange={e => this.setState({ nr_phone_commercial_extension: e.target.value })}
                  />
                </Col>
              </Row>
              <Row form>
                <Col md="12" className="form-group">
                  <label className="form-user-contact"><h5>Endereço</h5></label>
                </Col>
              </Row>
              <Row form>
                <Col md="3" className="form-group">
                  <ViaCep cep={this.state.cep} lazy>
                    { ({ data, loading, error, fetch }) => {
                      if (loading) {
                        return <p>loading...</p>
                      }
                      if (error) {
                        return <p>error</p>
                      }
                      if (data) {
                        return <div>
                          <p>
                            CEP: {data.cep} <br/>
                            CIDADE: {data.localidade} <br/>
                            UF: {data.uf} <br/>
                          </p>
                        </div>
                        // <Col md="3" className="form-group">
                        // <label htmlFor="feCompany">País</label>
                        //   <FormInput
                        //     id="feRamal"
                        //     name="nr_phone_commercial_extension"
                        //     onChange={e => this.setState({ nr_phone_commercial_extension: e.target.value })}
                        //   />
                        // </Col>
                      }
                      return <div>
                        <label htmlFor="feCompany">CEP</label>
                        <FormInput 
                          id="feRamal"
                          name="nr_phone_commercial_extension"
                          // onChange={e => this.setState({ nr_phone_commercial_extension: e.target.value })}
                          onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"
                        />
                        {/* <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/> */}
                        <button onClick={fetch}>Pesquisar</button>
                      </div>
                    }}
                  </ViaCep>
                </Col>
                <Col md="3" className="form-group">
                <label htmlFor="feCompany">País</label>
                  <FormSelect id="feCompany"
                  name="id_company"
                  value="1">
                    <option>Bsine</option>
                    <option>..</option>
                  </FormSelect>
                </Col>
                <Col md="3" className="form-group">
                <label htmlFor="feRole">Função</label>
                  <FormSelect id="feRole"
                  name="nr_role"
                  value="1">
                    <option>Admin</option>
                    <option>Gerente</option>
                    <option>Editor</option>
                    <option>Vendedor</option>
                  </FormSelect>
                </Col>
                <Col md="3" className="form-group">
                <label htmlFor="feDepartment">Departamento</label>
                  <FormSelect id="feDepartment"
                  name="id_department"
                  value="1">
                    <option>TI</option>
                    <option>RH</option>
                  </FormSelect>
                </Col>
                <Col md="3" className="form-group">
                  <label htmlFor="fePosition">Cargo</label>
                  <FormInput
                    id="fePosition"
                    name="nm_position"
                    placeholder="Cargo"
                    onChange={e => this.setState({ nm_position: e.target.value })}
                  />
                </Col>
              </Row>
              <Row form>
                <Col md="6" className="form-group">
                  <label className="form-user-contact"><h5>Contato Comercial</h5></label>
                </Col>
                <Col md="6" className="form-group">
                  <label className="form-user-contact"><h5>Contato Pessoal</h5></label>
                </Col>
              </Row>
              <Row form>
                {/* ddi */}
                <Col md="1" className="form-group">
                  <label htmlFor="feDdi">DDI</label>
                  <FormInput
                    id="feDdi"
                    name="nr_ddi_phone_commercial"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_ddi_phone_commercial: e.target.value })}
                  />
                </Col>
                {/* ddd */}
                <Col md="1" className="form-group">
                  <label htmlFor="feDdd">DDD</label>
                  <FormInput
                    id="feDdd"
                    name="nr_ddd_phone_commercial"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_ddd_phone_commercial: e.target.value })}
                  />
                </Col>
                {/* phone */}
                <Col md="2" className="form-group">
                  <label htmlFor="fePhone">Telefone</label>
                  <FormInput
                    id="fePhone"
                    name="nr_phone_commercial"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_phone_commercial: e.target.value })}
                  />
                </Col>
                {/* phone */}
                <Col md="1" className="form-group">
                  <label htmlFor="feRamal">Ramal</label>
                  <FormInput
                    id="feRamal"
                    name="nr_phone_commercial_extension"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_phone_commercial_extension: e.target.value })}
                  />
                </Col>
                {/* ddi */}
                <Col md="1"></Col>
                <Col  md="1" className="form-group">
                  <label htmlFor="feDdiMobile">DDI</label>
                  <FormInput
                    id="feDdiMobile"
                    name="nr_ddi_cellphone"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_ddi_cellphone: e.target.value })}
                  />
                </Col>
                {/* ddd */}
                <Col md="1" className="form-group">
                  <label htmlFor="feDddMobile">DDD</label>
                  <FormInput
                    id="feDddMobile"
                    name="nr_ddd_cellphone"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_ddd_cellphone: e.target.value })}
                  />
                </Col>
                {/* phone */}
                <Col md="2" className="form-group">
                  <label htmlFor="feMobile">Celular</label>
                  <FormInput
                    id="feMobile"
                    name="nr_cellphone"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_cellphone: e.target.value })}
                  />
                </Col>
              </Row>
              <Row form>
                <Col md="3" className="form-group">
                <label htmlFor="feLinkedin">Linkedin</label>
                  <FormInput
                      id="feLinkedin"
                      name="nm_linkedin"
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_linkedin: e.target.value })}
                  />
                </Col>
                <Col md="3" className="form-group">
                <label htmlFor="feSite">Site</label>
                  <FormInput
                      id="feSite"
                      name="nm_site"
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_site: e.target.value })}
                  />
                </Col>
                <Col md="2" className="form-group">
                <label htmlFor="feSkype">Skype</label>
                  <FormInput
                      id="feSkype"
                      name="nm_skype"
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_skype: e.target.value })}
                  />
                </Col>
                <Col md="2" className="form-group">
                <label htmlFor="feFacebook">Facebook</label>
                  <FormInput
                      id="feFacebook"
                      name="nm_facebook"
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_facebook: e.target.value })}
                  />
                </Col>
                <Col md="2" className="form-group">
                <label htmlFor="feTwitter">Twitter</label>
                  <FormInput
                      id="feTwitter"
                      name="nm_twitter"
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_twitter: e.target.value })}
                  />
                </Col>
              </Row>
              
              <Button theme="accent">Cadastrar</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)}}

StoreAdd.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

StoreAdd.defaultProps = {
  title: "Account Details"
};

export default StoreAdd;
