import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display:flex;
flex-direction:column;
`;

const InputContainer = styled.div`
display:flex;
`;

const SelectTime = styled.select`
background-color:#F0F0F2;
padding:2px;
max-width:100px;
font-family: Inter;
font-style: normal;
margin:2px;
`;

const OptionTime = styled.option`

`;

const LabelTime = styled.label`
font-weight:bold;
margin:2px;
font-family: Inter;
font-style: normal;

`;

const InputTime = styled.input`
max-width:30px;
max-height:20px;
margin:2px;
`;
//Default props not required as component is consistent throughout. / No props required
const TimeDropDown = () =>{

    return  <Container>

        <LabelTime for="timeofday">Time</LabelTime>
        <InputContainer>
             <InputTime placeholder="00"></InputTime>
            
             <InputTime placeholder="00"></InputTime>
             
             <SelectTime className="timeofday">
                 <OptionTime value = "AM">AM</OptionTime>
                 <OptionTime value = "PM">PM</OptionTime>
                 </SelectTime> 
                 </InputContainer>  
            </Container>
}

TimeDropDown.defaultProps = {

}

export default TimeDropDown;