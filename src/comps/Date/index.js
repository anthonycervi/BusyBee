import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display:flex;
flex-direction:column;
`;

const SelectDate = styled.select`
background-color:#F0F0F2;
padding:2px;
max-width:100px;
font-family: Inter;
font-style: normal;
`;

const OptionDate = styled.option`

`;

const LabelDate = styled.label`
font-weight:bold;
margin:2px;
font-family: Inter;
font-style: normal;
`;
//Default props not required as component is consistent throughout. / No props required
const DateDropdown = () =>{

    return  <Container>
        <LabelDate for="daysofweek">Day</LabelDate>
             <SelectDate className="daysofweek">
                 <OptionDate value = "Monday">Monday</OptionDate>
                 <OptionDate value = "Tuesday">Tuesday</OptionDate>
                 <OptionDate value = "Wednesday">Wednesday</OptionDate>
                 <OptionDate value = "Thursday">Thursday</OptionDate>
                 <OptionDate value = "Friday">Friday</OptionDate>
                 <OptionDate value = "Saturday">Saturday</OptionDate>
                 <OptionDate value = "Sunday">Sunday</OptionDate>
                 </SelectDate>   
            </Container>
}

DateDropdown.defaultProps = {

}

export default DateDropdown;