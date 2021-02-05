import Main from 'pages/main';
import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
display:flex;
flex-direction:column;

`;

const MainContainer = styled.div`
display:flex;
margin:20px;
`;

const ProfImg = styled.div`

border: 9px solid  #C4C4C4;
border-radius: 50px;
width:100px;
height:100px;
${props=>props.imgurl ? "background-image: url("+ props.imgurl + ");" : "background-image: url('https://media.wired.com/photos/5a970eb4927dc94e67685b0e/16:9/w_2400,h_1350,c_limit/matterhorn-802950172.jpg');"}

background-position: center;
background-size: cover;
`;

const Name = styled.div`
width: 253px;
height: 53px;
${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
margin:5px;
border-radius: 0px 10px 10px 0px;
text-align: left;
padding:5px;
`;

const Snippet = styled.div`
background: #C4C4C4;
border-radius: 0px 10px 10px 10px;
${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
margin:5px;
width:267px;
height:93px;
text-align: left;
padding:5px;
`;

const Status = styled.text`
color:#a6a6a6
margin:5px;
text-align: right;
`;

const fakedb = [
  {
      id:1,
      name:'fake',
      avatar:'fake stuff',
      snippet:'This is my snip',
      status:"This is my stat"
  }
]

//must at least have these props
const Profile = ({imgurl,username, snip, stat}) => {
  return <MainContainer>
    <ProfImg imgurl={imgurl}></ProfImg>
<TextContainer>
<Name bgcolor='#E4C5C5'>{username}</Name>
<Snippet bgcolor='#FF8080'>{snip}</Snippet>
<Status>{stat}</Status>
</TextContainer>

  </MainContainer>
} 

Profile.defaultProps = {
stat:"status text",
username:'Josh Mountain',
bgcolor:'null',
snip:'Snippet Text'
}

export default Profile;