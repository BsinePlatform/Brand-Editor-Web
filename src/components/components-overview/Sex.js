import React from "react";
import { Col, FormRadio } from "shards-react";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Sex = () => (
  <Col sm="12" md="12" className="">
    <FormControl component="fieldset" className="gender">
        <label>Sexo</label>
        <RadioGroup aria-label="gender" name="nm_sex">
          <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          <FormControlLabel value="female" control={<Radio />} label="Feminino" />
        </RadioGroup>
      </FormControl>
  </Col>
);

export default Sex;
