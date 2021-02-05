import React from 'react';
import styled from 'styled-components';

const Buttontext = styled.div `
color:#FFF;
text-align:center;
font-weight:500;
`;

const Container = styled.div `
width: 250px;
height: 50px;
background: #263238;
border-radius: 50px;
align-items:center;
justify-content:center;
display:flex;
`;

const Button1 = ({ButtonText}) =>{

    return  <Container>
                <Buttontext>{ButtonText}</Buttontext>
            </Container>
}

Button1.defaultProps = {
ButtonText:"Create New Task",
}

export default Button1;