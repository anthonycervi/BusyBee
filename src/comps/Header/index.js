import React from 'react';
import styled from 'styled-components';

//This comp displays the current date

const Container = styled.div `
margin-bottom:20px;
`;

const HeaderDate = styled.h1 `

`;

const HeaderDesc = styled.p`

`;

//Function to decide the ordinal based on the number of the date
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
}

//assigns variable as new Date function
var d = new Date();

//Month Array
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Day Array
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

//Props are set to the default props which run the functions of the day
const Header = ({dayofweek, month, datenum, ord}) =>{

    return  <Container>
              <HeaderDate>
                  {dayofweek}, {month} {datenum}{ord} 
                  </HeaderDate>
                Let's look at what has to be done today
            </Container>
}
//Default props run functions that pull the current: Day, Month, Date, and Ordinal
Header.defaultProps = {
dayofweek: day[d.getDay()],
month: months[d.getMonth()],
datenum: d.getDate(),
ord: ordinal_suffix_of()
}

export default Header;