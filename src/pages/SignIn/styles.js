import styled from "styled-components";

export const Main = styled.div`
  align-items: center;
  justify-content: center;
  // background-color: #353b48;
`;

export const Login = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  margin-left: 100px;
  padding: 50px;
  border: 1px solid;
  background-color: #fff;
  width: 450px;
  border-radius: 10px;

  img {
    width: 100px;
    margin-bottom: 50px;
  }

  .btn-primary {
    color: #fff;
    background-color: #410065;
    border-radius: 15px;
  }

  .btn-xxl {
    padding: 0.7rem 3rem;
    font-size: 18px;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #2e0445!important;
  }

  .btn-primary:active {
    color: #fff;
    background-color: #2e0445;
  }

  a {
    font-size: 12px;
    padding-left: 50px;
    color: blue;
    text-align: right;
  }

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;