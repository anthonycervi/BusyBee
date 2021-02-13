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
font-weight:bold;
font-family: Inter;
`;

const Time = styled.div `
width:100%;
height:36px;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
padding-left:10px;
font-family: Inter;
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
background-color:${props => props.namecolor ? props.namecolor : "#d3d3d3"};
margin-left:0px;
margin-right:7px;
border-radius:3px;
padding-left:5px;
padding-right:5px;
font-family: Inter;
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
background-color:${props => props.vehiclecolor ? props.vehiclecolor : "#d3d3d3"};
border-radius:3px;
padding-left:5px;
padding-right:5px;
font-family: Inter;
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

const MainCont = styled.div`

`;

const fakedb = [
    {
        TitleText:"Take Susie to School",
        DriverText:"Sarah",
        VehicleText:"Honda Civic",
        TimeText:"9:45AM",
        namecolor:"#0000FF"

    },
    {
        TitleText:"Take Tim to School",
        DriverText:"Dad",
        VehicleText:"Tesla"
    },
    {
        TitleText:"Take Jimmy himmy to School",
        DriverText:"Henry",
        VehicleText:"Lambo"
    },
    {
        TitleText:"Take Tom to School",
        DriverText:"Dave",
        VehicleText:"Buggy"
    },
    {
        TitleText:"Take Barry B Benson to the Hive",
        DriverText:"Dad",
        VehicleText:"Plane"
    },
    {
        TitleText:"Take Bon. Eless Pizza to School",
        DriverText:"Dave",
        VehicleText:"Honda Civic"
    },
    {
        TitleText:"Pick up Rob",
        DriverText:"Sally",
        VehicleText:"Ferrari"
    },
    {
        TitleText:"Take Tom to Practice",
        DriverText:"Dave",
        VehicleText:"Porsche"
    }
]



const TaskCard = ({onPreview, TitleText, TimeText, DriverText, VehicleText, DateText,fakedb, HourText,MinuteText,MeridianText, namecolor, vehiclecolor, onDelete}) =>{



    return  <Container>
                <Title>{TitleText}</Title> 
                <Time>{HourText}:{MinuteText}{MeridianText} {DateText}</Time>
                <FeatureDiv>
                    <Driver namecolor={namecolor}>{DriverText}</Driver>
                    <Vehicle vehiclecolor={vehiclecolor}>{VehicleText}</Vehicle>
                </FeatureDiv>
                <Edit src={Image}/>
                <Delete onClick={onDelete} src={Image2}/>
            </Container>
}

TaskCard.defaultProps = {
    TitleText:"Title text",
    HourText:"8",
    MinuteText:"30",
    MeridianText:"AM",
    DriverText:"Driver text",
    VehicleText:"Vehicle text",
    DateText:"Monday",
    fakedb:fakedb,
    namecolor:"#d3d3d3",
    vehiclecolor:"#d3d3d3",
    onDelete:()=>{}

}

export default TaskCard;

// TitleText
// TimeText
// DriverText
// VehicleText