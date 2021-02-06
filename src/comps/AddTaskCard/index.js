import React, {useState} from 'react';
import styled from 'styled-components';
import Image from '../../images/arrow-down.png';


//Collapse Down Arrow
const Downarrow = styled.img`
width:24px;
height:24px;
text-align:right;
padding:5px;
left:320px;
top:10px;
position:relative;
`;

const Buttondiv = styled.div`
align-items:center;
justify-content:center;
display:flex;
position:relative;
top:5px;
`;

const Row3 = styled.div`
flex-direction:row;
display:flex;
// background-color:yellow;
`;

const Row2 = styled.div`
flex-direction:row;
display:flex;
// margin:20px;
// background-color:green;
`;

const Row1 = styled.div`
flex-direction:row;
display:flex;
margin:20px;
// background-color:purple;
`;


const Title = styled.div`
text-align:left;
padding:10px;
padding-top:20px;
padding-left:20px;
font-weight:600;
// background-color:blue;
`;

const Container = styled.div`
width:375px;
height:512px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px 6px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.08), 7px 1px 12px rgba(0, 0, 0, 0.04);
border-radius: 20px;
display:flex;
flex-direction:column;
`;

const TitleDiv = styled.div`
display:flex;
flex-direction:column;
width:98%;
justify-content:center;
`;

const DayTimeDiv = styled.div`
display:flex;
width:98%;
justify-content:center;
`;

const TimeDiv = styled.div`
position:relative;
top:-2px;
left:35px;

`;

const DateDiv = styled.div`
position:relative;
top:-2px;
right:45px;
`;

const Input1Div = styled.div`
margin:15px;
`;

const Input2Div = styled.div`
margin:15px;
`;



// ------------------------------  Input1  -------------------------------

const InputContainer = styled.div `
width:100%;
// background-color:pink;
`;

const Inputdiv = styled.input `
border:0px;
width:80%;
height:40px;
padding-left:10px;
background-color:#F0F0F2;

`;

const InputTitle = styled.div `
// width:100%;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
// padding-left:10px;
margin-bottom:5px;
`;

const InputTitleDiv = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;

`;

// ------------------------------  Date  -------------------------------

const DateContainer = styled.div `
display:flex;
flex-direction:column;
align-items:left;
justify-content:left;
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
// right:70px;
`;

// ------------------------------  Time  -------------------------------

const TimeContainer = styled.div `
display:flex;
flex-direction:column;
`;

const TimeInputContainer = styled.div`
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

// ------------------------------  Input2  -------------------------------

const InputContainer2 = styled.div `
width:100%;

`;

const InputTitleDiv2 = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;

`;

const Test2 = styled.div `
// width:100%;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
padding-bottom:5px;
`;

const Inputdiv2 = styled.input `
border:0px;
 width:80%;
height:40px;
padding-left:10px;
background-color:#F0F0F2;
`;

// ------------------------------  Input3  -------------------------------

const InputContainer3 = styled.div `
width:100%;

`;

const InputTitleDiv3 = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;

`;

const Test3 = styled.div `
// width:100%;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
padding-bottom:5px;
`;

const Inputdiv3 = styled.input `
border:0px;
 width:80%;
height:40px;
padding-left:10px;
background-color:#F0F0F2;
`;

// ------------------------------  Colours  -------------------------------

const ColourContainer = styled.div `
// width:90%;
height:40px;
display:flex;
flex-direction:row;
// background-color:red;
padding-left:15px;
margin-top:10px;
`;

const ColourTextDiv = styled.div `
// background-color:blue;
display:flex;
justify-content:center;
text-align:center;
align-items:center;
margin-right:15px;
`;

const ColourDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
text-align:center;
align-items:center;
`;

const Blue = styled.div `
background-color:#A5DAE2;
width:36px;
height:30px;
border-radius:4px;
margin-right:15px;
`;

const Yellow = styled.div `
background-color:#DFBF7F;
width:36px;
height:30px;
border-radius:4px;
margin-right:15px;
`;

const Green = styled.div `
background-color:#84D6AF;
width:36px;
height:30px;
border-radius:4px;
margin-right:15px;
`;

const Red = styled.div `
background-color:#E3959F;
width:36px;
height:30px;
border-radius:4px;
`;

// ------------------------------  Button  -------------------------------

const ButtonText = styled.div `
color:#FFF;
text-align:center;
font-weight:500;
`;

const ButtonContainer = styled.div `
width: 250px;
height: 50px;
background: #263238;
border-radius: 50px;
align-items:center;
justify-content:center;
display:flex;
margin-top:25px;
`;

const AddTaskCard = ({onPreview, InputTitle1,InputPlaceholder1,InputTitle2,InputPlaceholder2,InputTitle3,InputPlaceholder3,}) => {

    const [TitleText,setTitle] = useState("")
    const [HourTime,setHourTime] = useState("")
    const [MinuteTime,setMinuteTime] = useState("")
    const [MeridianTime,setMeridianTime] = useState("")
    const [compDate,setDate] = useState("")
    const [DriverText,setDriver] = useState("")
    const [VehicleText,setVehicle] = useState("")

    const [Colour1,setColour1] = useState("")
    const [Colour2,setColour2] = useState("") 
    const [Colour3,setColour3] = useState("") 
    const [Colour4,setColour4] = useState("")  
    
    return  <Container>

                <Downarrow src={Image} />

                <TitleDiv>
                    <Title>Add a new task</Title>
                    <Row1>
                        <InputContainer>
                            <InputTitleDiv>
                                <InputTitle>{InputTitle1}</InputTitle>
                                <Inputdiv type='text' placeholder= {InputPlaceholder1} onChange={(e)=>{
        setTitle(e.target.value); }}/>
                            </InputTitleDiv>
                        </InputContainer>
                    </Row1>
                </TitleDiv>

                <DayTimeDiv>
                    <Row2>
                        <DateDiv>
                            <DateContainer>
                                <LabelDate for="daysofweek">Day</LabelDate>
                                    <SelectDate onChange={(e)=>{
        setDate(e.target.value); }}className="daysofweek">
                                        <OptionDate value = "Monday">Monday</OptionDate>
                                        <OptionDate value = "Tuesday">Tuesday</OptionDate>
                                        <OptionDate value = "Wednesday">Wednesday</OptionDate>
                                        <OptionDate value = "Thursday">Thursday</OptionDate>
                                        <OptionDate value = "Friday">Friday</OptionDate>
                                        <OptionDate value = "Saturday">Saturday</OptionDate>
                                        <OptionDate value = "Sunday">Sunday</OptionDate>
                                    </SelectDate>   
                            </DateContainer>
                        </DateDiv>
                        <TimeDiv>
                            <TimeContainer>
                                <LabelTime for="timeofday">Time</LabelTime>
                                <TimeInputContainer>
                                    <InputTime placeholder="00"></InputTime>
                                    <InputTime placeholder="00"></InputTime>
                                    <SelectTime className="timeofday">
                                        <OptionTime value = "AM">AM</OptionTime>
                                        <OptionTime value = "PM">PM</OptionTime>
                                    </SelectTime> 
                                </TimeInputContainer>  
                            </TimeContainer>
                        </TimeDiv>
                    </Row2>
                </DayTimeDiv>

                <Row3>
                    <Input1Div>
                        <InputContainer2>
                            <InputTitleDiv2>
                                <Test2>{InputTitle2}</Test2>
                                <Inputdiv2 placeholder= {InputPlaceholder2} onChange={(e)=>{
        setDriver(e.target.value); }}/>
                            </InputTitleDiv2>
                        </InputContainer2>
                    </Input1Div>

                    <Input2Div>
                        <InputContainer3>
                                <InputTitleDiv3>
                                    <Test3>{InputTitle3}</Test3>
                                    <Inputdiv3 placeholder= {InputPlaceholder3} onChange={(e)=>{
        setVehicle(e.target.value); }}/>
                                </InputTitleDiv3>
                        </InputContainer3>
                    </Input2Div>
                </Row3>

                <ColourContainer>
                    <ColourTextDiv>Name</ColourTextDiv>
                    <ColourDiv>
                        <Blue onClick="ChangeColour()">{Colour1}</Blue>
                        <Yellow>{Colour2}</Yellow>
                        <Green>{Colour3}</Green>
                        <Red>{Colour4}</Red>
                    </ColourDiv>
                </ColourContainer>

                <Buttondiv>
                    <ButtonContainer onClick={()=>{onPreview(TitleText, compDate, DriverText, VehicleText)}}>
                        <ButtonText>Create New Task</ButtonText>
                    </ButtonContainer>
                </Buttondiv>

            </Container>
}

AddTaskCard.defaultProps = {
InputTitle1:"Title",
InputPlaceholder1:"Add title",
InputTitle2:"Name",
InputPlaceholder2:"John Doe",
InputTitle3:"Vehicle",
InputPlaceholder3:"Honda",
onPreview:()=>{}
}

export default AddTaskCard;