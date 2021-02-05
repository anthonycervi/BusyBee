import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
text-align:center;
width: 75.77px;
height: 25.76px;
border: 1px solid #263238;
box-sizing: border-box;
border-radius:4px;
line-height:1.5;
margin:8px;
color:${props => props.color ? props.color : "#FFFF"};
background-color:${props => props.bgcolor ? props.bgcolor : "#A33939"};
`;

const Options = styled.div`
flex-direction:row;
display:flex;
padding-top:5px;
position:relative;

`;

const TitleText = styled.div`
text-align:center;
width:100%;
height:25px;
font-weight:500;
padding-top:5px;
padding:10px;
position:relative;
`;


const Box = styled.div`
width:20%;
height:100%;
background: #FFFFFF;
box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
border-radius: 17px;
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
`;




const DeleteTaskCard = ({ deletetext, canceltext, bgcolor, color }) => {

    return <Box>

        <TitleText>Are you sure you want to delete this task?</TitleText>
        <Options>
            <Button bgcolor="#FFFF" color="#000000">{deletetext}</Button>
            <Button bgcolor="#A33939" color="#FFFF">{canceltext}</Button>
        </Options>

    </Box>

}

DeleteTaskCard.defaultProps = {
    deletetext: "Cancel",
    canceltext: "Delete",
    bgcolor: "#A33939",
    color: "#FFFF",
}

export default DeleteTaskCard;