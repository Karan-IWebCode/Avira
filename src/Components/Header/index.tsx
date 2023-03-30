import React from 'react'
import { Logo } from '../../assets/Logo'
import { BsPerson, BsCart } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
// import { BsPerson } from "@react-icons/all-files/Bs/BsPerson";

const WrapperContain = styled.div`
padding:8px 56px;
height:100px;
/* box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25); */
border-bottom: 2px solid rgba(0, 0, 0, 0.25);

`

const Li = styled.li`
margin-right:40px;
`
const Li2 = styled.li`
margin-right:32px;
color:#DB6B97;

`
const A2 = styled.a`
color: #DB6B97 !important;
`
const I = styled.i`
width:18px;
height:18px;
margin-right: 8px;
`
const LogoDiv = styled.div`
width:30%;
`

const Header = () => {
  return (
    <WrapperContain className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <LogoDiv>

            <a className="navbar-brand" href="#"><Logo/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          </LogoDiv>

          <div className="collapse navbar-collapse body1Regular" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between">
              
              <div className="d-flex">
              <Li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </Li>
              <Li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Shop</a>
              </Li>
              <Li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blogs</a>
              </Li>
              <Li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </Li>
              <Li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </Li>
              </div>
              
           
              <div className="d-flex body2Semi accent">

                <Li2 className="nav-item">
                  <A2 className="nav-link active" aria-current="page" href="#"><I><BsPerson/></I>Login/Register</A2>
                </Li2>
                <Li2 className="nav-item">
                  <A2 className="nav-link active" aria-current="page" href="#">
                    <I>
                      <AiOutlineHeart/>2
                    </I>
                  </A2>
                </Li2>

                <Li2 className="nav-item">
                  <A2 className="nav-link active" aria-current="page" href="#">
                  
                      <I><BsCart/></I>
                  
                  </A2>
                </Li2>
                
              </div>

            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </WrapperContain>
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <Li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </Li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
  )
}

export default Header