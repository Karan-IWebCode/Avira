import React from 'react'
import styled from 'styled-components'
import Men from '../../assets/Men.png'
import Women from '../../assets/Women.png'
import Access from '../../assets/Access.png'
import Beauty from '../../assets/Beauty.png'
import Kids from '../../assets/Kids.png'
import Footwear from '../../assets/Footwear.png'
import CategoryTag from '../categoryTag'

const H1 = styled.h1`
margin: 64px 0px 40px 56px;
`

const Contain = styled.div`
margin: 0px 56px;
`
const WrapStyle = styled.div`
/* background-image: url(${Men}); */
/* height: ${({height})=>height??'500px'}; */
background-image: ${(props)=>`url(${props.imgU})`};
height: ${(props) => props.active ? "300px" : "640px"};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Colu = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
`
const Category = () => {
  return (
    <div classname="container-fluid">
        <H1>SHOP BY CATEGORIES</H1>
        <Contain className="row gap-5">
            <div className="col">
                <div className="row gap-5 justify-content-between">
                    <WrapStyle className="col-5 " imgU={Men}>
                        <CategoryTag>{Men}</CategoryTag>
                    </WrapStyle>
                    <WrapStyle className="col-6" imgU={Women}>
                    <CategoryTag>{Women}</CategoryTag>
                    </WrapStyle>
                </div>
                
            </div>
            <Colu className="col">
                <div className="row gap-3 d-flex justify-content-between align-content-between ">
                        <WrapStyle className="col" imgU={Access} active>
                            <CategoryTag>Men</CategoryTag>
                        </WrapStyle>
                        <WrapStyle className="col" imgU={Kids} active>
                            <CategoryTag data="Men" />
                        </WrapStyle>
                </div>

                <div className="row gap-3 d-flex justify-content-between align-content-between ">
                        <WrapStyle className="col" imgU={Footwear} active>1</WrapStyle>
                        <WrapStyle className="col"  imgU={Beauty} active>2</WrapStyle>
                </div>
                
            </Colu>

            
            

        </Contain>
       
    </div>
  )
}

export default Category