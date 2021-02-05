import React from 'react';
import styled from 'styled-components';
import Image from '../../images/add.png'
const Icon = styled.div `
display:flex;
width:73px;
height:73px;
`;

const PlusButton = styled.img`

`;

const Button2 = ({}) =>{

    return  <Icon>
              <PlusButton src={Image}>

              </PlusButton>
            </Icon>
}

Button2.defaultProps = {

}

export default Button2;