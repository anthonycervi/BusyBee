import React from 'react';
import styled from 'styled-components';
import Image from '../../images/edit.png'
import Image2 from '../../images/delete.png'

const Container = styled.div `
width:90%;
min-height:127px;
border-radius:13px;
border:0px;
background-color:white;
filter: drop-shadow(4px 4px 4px #adadad);
margin:20px;
`;

const Title = styled.div `
width:100%;
height:36px;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
padding-left:10px;
`;

const Time = styled.div `
width:100%;
height:36px;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
padding-left:10px;
`;

const Driver = styled.div `
min-width:68px;
max-width:;
min-height:23px;
max-height:;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
background-color:#A5DAE2;
margin-left:0px;
margin-right:7px;
border-radius:3px;
padding-left:5px;
padding-right:5px;
`;

const Vehicle = styled.div `
min-width:68px;
max-width:;
min-height:23px;
max-height:;
margin-left:7px;
margin-right:0px;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
background-color:#84D6AF;
border-radius:3px;
padding-left:5px;
padding-right:5px;
`;

const Edit = styled.img `
width:25px;
height:25px;
display:flex;
// background-color:red;
flex-direction: column;
text-align: left;
justify-content:center;
position:absolute;
right:10px;
top:15px;
`;

const Delete = styled.img `
width:25px;
height:25px;
display:flex;
// background-color:red;
flex-direction: column;
text-align: left;
justify-content:center;
position:absolute;
right:10px;
bottom:15px;
`;

const FeatureDiv = styled.div `
position:absolute;
left:10px;
bottom:15px;
display:flex;
flex-direction: row;
align-items: left;
justify-content:center;
// padding-left:10px;
// padding-left:10px;
`;


// const Title = styled.div `

// `;



const TaskCard = ({TitleText, TimeText, DriverText, VehicleText}) =>{

    return  <Container>
                <Title>{TitleText}</Title> 
                <Time>{TimeText}</Time>
                <FeatureDiv>
                    <Driver>{DriverText}</Driver>
                    <Vehicle>{VehicleText}</Vehicle>
                </FeatureDiv>
                <Edit src={Image}/>
                <Delete src={Image2}/>
            </Container>
}

TaskCard.defaultProps = {
    TitleText:"Title text",
    TimeText:"Time text",
    DriverText:"Driver text",
    VehicleText:"Vehicle text",
}

export default TaskCard;