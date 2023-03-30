import * as React from "react"
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from "styled-components";
import Backg from "../assets/LeftSection.png";
import Button from '../Components/global/Button';
import { BsEyeFill } from 'react-icons/bs';

const H1 = styled.h1`
margin-bottom: 32px;
`

const Login = styled.div`
width: 35%;
/* height:100%; */
margin: auto;
display:flex;
justify-content:center;
align-items: center;
`

const LoginContent = styled.div`
  /* display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center; */

`
const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`
const BackImg = styled.img`
  width:100%;
  height: 100%;

  /* height:100vh; */
  object-fit: fill;
`
const InputWrapper = styled.input`
  background: #F6F6F6;
  border: 1px solid #D2D2D2;
  border-radius: 8px;
  height: 48px;
  width: 360px;
  border-radius: 8px;
  padding: 12px 10px;
  outline: none;
  ::placeholder {
    color: #737373;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

`
const Forget = styled.div`
  width:100%;
  margin: 24px 0px;
`

const Hr = styled.hr`
  color:black;
  height:2px;
  width:100%;
  margin: 32px 0px;
`

const InputCheck = styled.input.attrs({ type: 'checkbox' })`
 
/* background-color: red;
border-color: red; */
:checked{
  background-color: #DB6B97;;
  border-color: #F6F6F6;}

`
const GroupBtn  = styled.div`
  position:relative;
`
const PasswordBtn = styled.button`
  position: absolute;
  right:0;
  top:10%;
`

const Section1 = styled.div`
  width:60%;
  height:100%;
`




const LoginPage: React.FC<PageProps> = () => {

  const [passwordShow , setPasswordShow] = useState(false);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }
  return (
    <>
      <Wrapper className="d-flex">
        <Section1 className="h-100">
          
          <BackImg src={Backg} />
        </Section1>
        <Login className="h-100">
          <LoginContent className="">
            <H1>Nice to see you again!</H1>
            <div class="input-group mb-3 d-flex justify-content-center">
              <InputWrapper
                type="text"
                class="form-control"
                placeholder="Email or phone number"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              
            </div>
            <GroupBtn class="input-group mb-3 d-flex justify-content-center" >
            <InputWrapper
                type={passwordShow ? "text" : "password"}
                class="form-control"
                placeholder="Enter Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <PasswordBtn className="btn" onClick={togglePassword}>{passwordShow ? <i><BsEyeFill/></i> : <i><BsEyeFill/></i>}</PasswordBtn>
            </GroupBtn>
            
            <Forget className="d-flex justify-content-between align-items-center">
              <div className="form-check form-switch">
                <InputCheck
                  className="form-check-input accent"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label caption"
                  for="flexSwitchCheckDefault"
                >
                  Remember me
                </label>
              </div>
              <div className="caption">
                <a>Forgot Password?</a>
              </div>
            </Forget>

            {/* <Button>Sign in</Button> */}
            <Button
              data="Sign in"
              className="bodySemi secondary"
              onClick={handleSubmit}
            />

            <Hr />

            <div className="d-flex justify-content-center">
              <span className="caption" style={{ marginRight: "8px" }}>
                Don't have an account
              </span>
              <span className="captionSemi">Get started</span>
            </div>
          </LoginContent>
        </Login>
      </Wrapper>
    </>
  );
}

export default LoginPage

export const Head: HeadFC = () => <title>Login Page</title>

