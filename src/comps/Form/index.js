import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
min-width:${props=>props.width ? props.width : "386px"};
min-height${props=>props.height ? props.height : "250px"};
background-color:#C4C4C4;
display:flex;
flex-direction:column;
padding:10px;
max-width:386px;
`;

// max-width:${props=>props.width ? props.width : "50%"};
// max-height:${props=>props.height ? props.height : "300px"};

const FormInput = styled.input`
min-height:25px;
padding:5px;
border-radius:7px;
margin:10px;
max-width:${props=>props.width ? props.width : "228px"};
max-height${props=>props.height ? props.height : "40px"};
`;

const FormButton = styled.button`
border-radius:5px;
max-width:${props=>props.width ? props.width : "228px"};
max-height${props=>props.height ? props.height : "100px"};
justify-content: center;
    align-items: center;
    position:relative;
    
    height:50px;
    margin:10px;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
`;


//must at least have these props
const Form = ({onPreview, onFormComplete, onInsert, text, formplace,color}) => {

const [username, setUserName] = useState("")
const [avatarurl,setAvatarUrl] = useState("")
const [snip,setSnip] = useState("")
const [stat,setStat] = useState("")

useEffect(()=>{
  // alert("changed bg");
}, [username])


  return <Container>
    <FormInput type='text' placeholder='avatar url' onChange={(e)=>{
        setAvatarUrl(e.target.value); }}/>
    <FormInput type='text' placeholder='name' onChange={(e)=>{
        setUserName(e.target.value); }}/>
    
    <FormInput type='text' placeholder='snippet' onChange={(e)=>{
        setSnip(e.target.value); }}/>
    <FormInput type='text' placeholder='status' onChange={(e)=>{
        setStat(e.target.value); }}/>
    


<FormButton onClick={()=>{onPreview(username, avatarurl, snip, stat)}} color={color} bgcolor="#D19A67">Preview</FormButton>
<FormButton onClick={()=>{onFormComplete(username, avatarurl, snip, stat)}} color={color} bgcolor="#67D198">Insert</FormButton>
  </Container>
}

Form.defaultProps = {
  width:null,
  height:null,
  bgcolor:null,
  text:'text',
  formplace:'text',
  bgcolor:"white",
  color:"white",
  onPreview:()=>{},
  onFormComplete:()=>{}
}

export default Form;