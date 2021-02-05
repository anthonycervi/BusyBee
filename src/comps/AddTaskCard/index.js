import React from 'react';
import styled from 'styled-components';
import Input1 from '../Input1';
import Date from '../Date';
import Time from '../Time';
import Button1 from '../Button1';
import Image from '../../images/arrow-down.png';

const Downarrow = styled.img`
width:24px;
height:24px;
text-align:right;
padding:5px;
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
`;

const Row2 = styled.div`
flex-direction:row;
display:flex;
margin:20px;
`;

const Row1 = styled.div`
flex-direction:row;
display:flex;
margin:20px;
`;


const Title = styled.div`
text-align:left;
padding:10px;
padding-top:20px;
font-weight:600;`;

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
left:45px;
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

const AddTaskCard = ({ }) => {

    return <Container>
        <Downarrow src={Image} />
        <TitleDiv>
            <Title>Add a new task</Title>
            <Row1>
                <Input1 />
            </Row1>
        </TitleDiv>

        <DayTimeDiv>
            <Row2>
                <DateDiv>
                    <Date />
                </DateDiv>
                <TimeDiv>
                    <Time />
                </TimeDiv>
            </Row2>

        </DayTimeDiv>

        <Row3>
            <Input1Div>
                <Input1 />
            </Input1Div>

            <Input2Div>
                <Input1 />
            </Input2Div>
        </Row3>

        <Buttondiv>
            <Button1 />
        </Buttondiv>

    </Container>
}

AddTaskCard.defaultProps = {

}

export default AddTaskCard;