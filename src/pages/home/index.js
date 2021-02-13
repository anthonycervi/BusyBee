import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import Button1 from '../../comps/Button1';
import Button2 from '../../comps/Button2';
import DateDropdown from '../../comps/Date';
import TimeDropdown from '../../comps/Time'
import DeleteTaskCard from '../../comps/DeleteTaskCard';
import TaskCard from '../../comps/TaskCard';
import Header from '../../comps/Header';
import FilterBy from '../../comps/FilterBy'
import FadeIn from 'react-fade-in';
import AddTaskCard from '../../comps/AddTaskCard'
import EditTaskCard from '../../comps/EditTaskCard'
import BeeImage from '../../images/bee.png';
import styled from 'styled-components';

const BeeImage2 = styled.img`
width:70px;
height:70px;
`;

//This page emulates a mobile interface

const Home = () =>{
//Fake Database with Information on the Title, Driver, Vehicle, etc.
// const fakedb = [
//     {
//         TitleText:"Take Susie to School",
//         DriverText:"Sarah",
//         VehicleText:"Honda Civic",
//         TimeText:"9:45AM",
//         namecolor:"#0000FF",
//         vehiclecolour:"tomato"
//     },
//     {
//         TitleText:"Take Tim to School",
//         DriverText:"Dad",
//         VehicleText:"Tesla",
//           namecolor:"#0000FF",
//         vehiclecolour:"tomato"
//     },
//     {
//         TitleText:"Take Jimmy himmy to School",
//         DriverText:"Henry",
//         VehicleText:"Lambo"
//         ,
//           namecolor:"#0000FF",
//         vehiclecolour:"tomato"
//     }
// ]    

//Preview Components on Page; Title, Time, Driver Name, Vehicle Name, Hour,Minute,Meridian
    const [TitleText,setTitle] = useState([]);
    const [HourTime,setHourTime] = useState([]);
    const [MinuteTime,setMinuteTime] = useState([]);
    const [MeridianTime,setMeridianTime] = useState([]);
    const [DriverText,setDriver] = useState([]);
    const [VehicleText,setVehicle] = useState([]);
    const [DateText,setDateText] = useState([]);
    const [alldb, setAllDb] = useState([]);
    const [namecolor, setnamecolor] = useState([]);
    const [vehiclecolour, setvehiclecolour] = useState([]);
    const [respDB, setRespDB] = useState([]);
   
    var ShowTask = false;
  
//Handle Form Complete from Page Components.
    const HandleFormComplete = async ({TitleText, HourTime, MinuteTime, MeridianTime, DriverText,VehicleText,compDate, ColourValue, VehicleNameColour}) => {
    setTitle(TitleText);
    setHourTime(HourTime);
    setMinuteTime(MinuteTime);
    setMeridianTime(MeridianTime)
    setDriver(DriverText);
    setVehicle(VehicleText);
    setDateText(compDate);
    console.log(ColourValue)
    setnamecolor(ColourValue)
    setvehiclecolour(VehicleNameColour)
    }

    //Async call to database and stores as const usestates
    const GetDB = async() => {
      var resp = await axios.get("https://comp4130busybee.herokuapp.com/api/tasks")
      setRespDB(resp.data);
      var arr = (resp.data.tasks)
      setAllDb(arr)
      console.log(resp.data.tasks)
      }

      //Async call to post a new task to the database
      const HandlePost = async (TitleText, DateText, DriverText, VehicleText, HourText, MinuteText, MeridianText, namecolor, vehiclecolour) => {
        var resp = await axios.post("https://comp4130busybee.herokuapp.com/api/tasks", {TitleText:TitleText, DateText:DateText, DriverText:DriverText, VehicleText:VehicleText, HourText:HourText, MinuteText:MinuteText, MeridianText:MeridianText, namecolor:namecolor, vehiclecolour:vehiclecolour});
        console.log("created", resp.data)
        GetDB();
        }

        //Async call to patch/edit Task #1 / ID 171 in the database
        const EditPost = async (TitleText, DateText, DriverText, VehicleText, HourText, MinuteText, MeridianText, namecolor, vehiclecolour) => {
          var resp = await axios.patch("https://comp4130busybee.herokuapp.com/api/tasks/171", {TitleText:TitleText, DateText:DateText, DriverText:DriverText, VehicleText:VehicleText, HourText:HourText, MinuteText:MinuteText, MeridianText:MeridianText, namecolor:namecolor, vehiclecolour:vehiclecolour});
          console.log("created", resp.data)
          GetDB();
          }
          //Async call to delete Task #2 / ID 181 from database
          const DeletePost = async (TitleText, DateText, DriverText, VehicleText, HourText, MinuteText, MeridianText, namecolor, vehiclecolour) => {
            var resp = await axios.delete("https://comp4130busybee.herokuapp.com/api/tasks/181", {TitleText:TitleText, DateText:DateText, DriverText:DriverText, VehicleText:VehicleText, HourText:HourText, MinuteText:MinuteText, MeridianText:MeridianText, namecolor:namecolor, vehiclecolour:vehiclecolour});
            console.log("deleted", resp.data)
            GetDB();
            }

    //Filter 1 Vehicle, 
    const OnFilterVehicle = (text) => {
        //console.log(text, alldb);
        setAllDb(alldb.filter((o)=>{
            //console.log(o.VehicleText);
          return o.VehicleText.includes(text);
        })
        )
      }

    //Filter 1 Name
    const OnFilterName = (text) => {
        setAllDb(alldb.filter((o)=>{
          return o.DriverText.includes(text);
        })
        )
      }


     
    //UseEffect to run the GetDB function
      useEffect(()=>{
        GetDB()
      },[]);

    var left = 0 + 'px';
    var top = 0 + 'px';
    var padding = 0 + 'px';
    return    <div className="EntirePage">
                <div className="div1">
                <AddTaskCard onFormComplete={HandlePost} onPreview={HandleFormComplete} onPress={console.log(TitleText)} ></AddTaskCard>
                </div>
                <div className="div2">
                  <div className="LogoTitleDiv">
                    <div className="TitleDiv">Busy</div>
                    <div className="LogoDiv"> <BeeImage2 src={BeeImage}/> </div>
                  </div>
                <div className="main">
                      <Header></Header>
                      <FilterBy onFilterVehicle={OnFilterVehicle} onFilterName={OnFilterName}></FilterBy>
                
                      <div className="ScrollDiv">             
                        {/* Maps out the database and assigns those values directly to the comps */}

                        {alldb.map(o=>{
                            return <TaskCard onDelete={DeletePost} namecolor={o.namecolor} vehiclecolor={o.vehiclecolour} DateText={o.DateText} HourText={o.HourText} MinuteText={o.MinuteText} MeridianText={o.MeridianText} TitleText={o.TitleText} DriverText={o.DriverText} VehicleText={o.VehicleText}>
                                {o.TitleText} - {o.VehicleText} - {o.DriverText} - {o.DateText} - {o.HourText} - {o.MinuteText} - {o.MeridianText} 
                            </TaskCard>
                        })}
                      </div >
                      {/* <div className="Button1">
                          <Button2  onClick={()=>{
                          ShowTask(true)
                      }}></Button2>
                      </div>            */}
                    </div>
                </div>
                <div className="div3">
                <EditTaskCard onFormComplete={EditPost} /> 
                </div>
              </div>
    
              }

export default Home;
