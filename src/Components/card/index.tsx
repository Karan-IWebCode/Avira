import React from 'react'
import styled from 'styled-components'
import { LeftArrow } from '../../svg'
import { cardData1 } from './data'
const Wrapper = styled.div`

`
const Title = styled.div`
    margin: 24px 0px 8px 24px;
`

const Content = styled.div`
    margin-left: 24px;
    font-weight: 600;
    font-size: 23px;
    line-height: 32px;
`

const LeftSpace = styled.span`
  margin-left:8px;
`
const Card = (props) => {
    
  return (
    <Wrapper>
        <Title className="body2Semi">{props.title}</Title>
        <Content>
            <span>{props.content}</span>
            <LeftSpace><LeftArrow/></LeftSpace>

        </Content>
        
    </Wrapper>
  )
}

export default Card;