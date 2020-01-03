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

import api from "../../services/api";


class UserAccountDetails extends Component {

  constructor(props) {
    super(props);
    // const response = api.get("/users/1/");
    //   const body = response.json();
    // console.log(this.state.userData);
  }
  
  // state = {
  //   id: '',
  //   full_name: ''
  // };

  // componentDidMount() {
  //     this.getUser();
  // }

  // async getUser() {
  //   const teste = await api.get("/users/1/");
  //   this.setState({ id: teste.data.id, full_name: teste.data.nm_full_name });
  // }

  state = {
    user: []
  };

  componentDidMount() {
    this.getUser();
  }

  async getUser() {
    const teste = await api.get("/users/1/");
    this.setState({ user: teste.data });
    // console.log(teste.data);
  }

  // state = {
  //   nm_username:"", nm_sex:"", nm_full_name:response.nm_full_name, nr_document:"", dt_born:"", nm_email:"", nm_password:"", id_company:"", nr_role:"", nm_department:"", nm_position:"", nr_ddi_phone_commercial:"", nr_ddd_phone_commercial:"", nr_phone_commercial:"", nr_phone_commercial_extension:"", nr_ddi_cellphone:"", nr_ddd_cellphone:"", nr_cellphone:"", nm_linkedin:"", nm_site:"", nm_skype:"", nm_facebook:"", nm_twitter:"", 

  // };

  handleUserAdd = async e => {
    e.preventDefault();
    const { nm_username,nm_sex,nm_full_name,nr_document,dt_born,nm_email,nm_password,id_company,nr_role,nm_department,nm_position,nr_ddi_phone_commercial,nr_ddd_phone_commercial,nr_phone_commercial,nr_phone_commercial_extension,nr_ddi_cellphone,nr_ddd_cellphone,nr_cellphone,nm_linkedin,nm_site,nm_skype,nm_facebook,nm_twitter,
    } = this.state;
    // alert(nm_full_name);
    if (!nm_full_name) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/users", { nm_username,nm_sex,nm_full_name,nr_document,dt_born,nm_email,nm_password,id_company,nr_role,nm_department,nm_position,nr_ddi_phone_commercial,nr_ddd_phone_commercial,nr_phone_commercial,nr_phone_commercial_extension,nr_ddi_cellphone,nr_ddd_cellphone,nr_cellphone,nm_linkedin,nm_site,nm_skype,nm_facebook,nm_twitter,
        });
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
                  <label className="form-user-contact"><h5>Dados Pessoais</h5></label>
                </Col>
              </Row>
              <Row form>
                {/* First Name */}
                <Col md="4" className="form-group">
                  <label htmlFor="feName">Nome Completo</label>
                  <FormInput
                    id="feName"
                    name="nm_full_name"
                    placeholder="Nome Completo"
                    defaultValue={this.state.user.nm_full_name}
                    // onChange={() => {}}
                    onChange={e => this.setState({ nm_full_name: e.target.value })}
                  />
                </Col>
                {/* CPF */}
                <Col md="3" className="form-group">
                  <label htmlFor="feCpf">CPF</label>
                  <FormInput
                    id="feCpf"
                    name="nr_document"
                    placeholder="CPF"
                    defaultValue={this.state.user.nr_document}
                    // onChange={() => {}}
                    onChange={e => this.setState({ nr_document: e.target.value })}
                  />
                </Col>
                {/* Nascimento */}
                <Col md="2" className="form-group">
                  <label htmlFor="feNascimento">Nascimento</label>
                  <FormInput
                    id="feNascimento"
                    name="dt_born"
                    placeholder="Nascimento"
                    type="date"
                    defaultValue={this.state.user.dt_born}
                    // onChange={() => {}}
                    onChange={e => this.setState({ dt_born: e.target.value })}
                  />
                </Col>
                {/* <Col md="3" className="form-group">
                  <Sex
                    onChange={e => this.setState({ nm_sex: e.target.value })} 
                  />
                </Col> */}
                <Col md="3" className="form-group">
                  <FormControl component="fieldset" className="gender">
                      <label>Sexo</label>
                      <RadioGroup aria-label="gender" name="nm_sex" onChange={e => this.setState({ nm_sex: e.target.value })} >
                        <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                      </RadioGroup>
                    </FormControl>
                </Col>
              </Row>
              <Row form>
                <Col md="12" className="form-group">
                  <label className="form-user-contact"><h5>Login</h5></label>
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="3" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    name="nm_email"
                    placeholder="Email"
                    defaultValue={this.state.user.nm_email}
                    // onChange={() => {}}
                    onChange={e => this.setState({ nm_email: e.target.value, nm_username: e.target.value})}
                  />
                </Col>
                {/* Password */}
                <Col md="3" className="form-group">
                  <label htmlFor="fePassword">Senha</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    name="nm_password"
                    placeholder="Senha"
                    // onChange={() => {}}
                    onChange={e => this.setState({ nm_password: e.target.value })}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <Row form>
                <Col md="12" className="form-group">
                  <label className="form-user-contact"><h5>Profissional</h5></label>
                </Col>
              </Row>
              <Row>
                <Col md="3" className="form-group">
                <label htmlFor="feCompany">Empresa</label>
                  <FormSelect id="feCompany"
                  name="id_company"
                  defaultValue="1">
                    <option>Bsine</option>
                    <option>..</option>
                  </FormSelect>
                </Col>
                <Col md="3" className="form-group">
                <label htmlFor="feRole">Função</label>
                  <FormSelect id="feRole"
                  name="nr_role"
                  defaultValue="1">
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
                  defaultValue="1">
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
                    defaultValue={this.state.user.nm_position}
                    // onChange={() => {}}
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
                    defaultValue={this.state.user.nr_ddi_phone_commercial}
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
                    defaultValue={this.state.user.nr_ddd_phone_commercial}
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
                    defaultValue={this.state.user.nr_phone_commercial}
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
                    defaultValue={this.state.user.nr_phone_commercial_extension}
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
                    defaultValue={this.state.user.nr_ddi_cellphone}
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
                    defaultValue={this.state.user.nr_ddd_cellphone}
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
                    defaultValue={this.state.user.nr_cellphone}
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
                      defaultValue={this.state.user.nm_linkedin}
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_linkedin: e.target.value })}
                  />
                </Col>
                <Col md="3" className="form-group">
                <label htmlFor="feSite">Site</label>
                  <FormInput
                      id="feSite"
                      name="nm_site"
                      defaultValue={this.state.user.nm_site}
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_site: e.target.value })}
                  />
                </Col>
                <Col md="2" className="form-group">
                <label htmlFor="feSkype">Skype</label>
                  <FormInput
                      id="feSkype"
                      name="nm_skype"
                      defaultValue={this.state.user.nm_skype}
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_skype: e.target.value })}
                  />
                </Col>
                <Col md="2" className="form-group">
                <label htmlFor="feFacebook">Facebook</label>
                  <FormInput
                      id="feFacebook"
                      name="nm_facebook"
                      defaultValue={this.state.user.nm_facebook}
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_facebook: e.target.value })}
                  />
                </Col>
                <Col md="2" className="form-group">
                <label htmlFor="feTwitter">Twitter</label>
                  <FormInput
                      id="feTwitter"
                      name="nm_twitter"
                      defaultValue={this.state.user.nm_twitter}
                      // onChange={() => {}}
                    onChange={e => this.setState({ nm_twitter: e.target.value })}
                  />
                </Col>
              </Row>
              
              <Button theme="accent">Salvar</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)}}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
