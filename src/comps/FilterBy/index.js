import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
width:90%;

`;

const Inputdiv = styled.input `
border:0px;
 width:80%;
height:40px;
padding-left:10px;
background-color:#F0F0F2;
margin-right:7px;
`;

const Inputdiv2 = styled.input `
border:0px;
 width:80%;
height:40px;
padding-left:10px;
background-color:#F0F0F2;
margin-left:7px;
`;

const Title = styled.div `
// width:100%;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
margin-bottom:5px;
`;

const TitleDiv = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;

`;

const InputDivRow = styled.div `
// width:100%;
display: flex;
flex-direction: row;
justify-content:center;
align-items:center;

`;

// const Title = styled.div `

// `;



const FilterBy = ({onFilterVehicle}) =>{

    return  <Container>
                <TitleDiv>
                    <Title>Filter</Title>
                    <InputDivRow>
                    <Inputdiv type="text" onChange={(e)=>{
      onFilterVehicle(e.target.value)
    }}placeholder= "Vehicle"/>
                    <Inputdiv2 placeholder= "Name"/>
                    </InputDivRow>
                </TitleDiv>
            </Container>
}

FilterBy.defaultProps = {
        text:"text",
        
}

export default FilterBy;