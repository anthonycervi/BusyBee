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

//This page emulates a mobile interface

const Home = () =>{
// Preview / Updates Practices
//Fake Database with Information on the Title, Driver, Vehicle, etc.
const fakedb = [
    {
        TitleText:"Take Susie to School",
        DriverText:"Sarah",
        VehicleText:"Honda Civic",
        TimeText:"9:45AM"
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
//Preview Components on Page; Title, Time, Driver Name, Vehicle Name, Hour,Minute,Meridian: [WORKING]
    const [TitleText,setTitle] = useState([]);
    const [TimeText,setTime] = useState([]);
    const [DriverText,setDriver] = useState([]);
    const [VehicleText,setVehicle] = useState([]);
    const [DateText,setDateText] = useState([]);
    const [alldb, setAllDb] = useState([]);
  
//Async get DB [WILL BE REPLACED WITH REAL DATABASE LINK]
    const GetDB = async() => {
        var arr = fakedb.slice(0,4);
        setAllDb(arr)
    }

    //Handles information from the form to update preview. [ADD TO DB FROM SAM]
    const HandleFormComplete = async (TitleText,TimeText,DriverText,VehicleText,compDate) => {
    setTitle(TitleText);
    setTime(TimeText);
    setDriver(DriverText);
    setVehicle(VehicleText);
    setDateText(compDate);
    console.log(DateText)
    }

    //Filter 1 Vehicle, needs to be integrated into real database.
    const OnFilterVehicle = (text) => {
        setAllDb(alldb.filter((o)=>{
          return o.VehicleText.includes(text);
        })
        )
      }

    //Filter 1 Name, needs to be integrated into real database.
    const OnFilterName = (text) => {
        setAllDb(alldb.filter((o)=>{
          return o.DriverText.includes(text);
        })
        )
      }
     
    //Will be replaced with real DB async
      useEffect(()=>{
        GetDB()
      },[]);

    var left = 0 + 'px';
    var top = 0 + 'px';
    var padding = 0 + 'px';
    return <FadeIn><div>
    <div className="main">
                <Header></Header>
               
                <FilterBy onFilterVehicle={OnFilterVehicle}></FilterBy>
             
              <div className="ScrollDiv">

                  {/* Maps out the fake database and assigns those values directly to the comps */}

                {fakedb.map(o=>{
                    return <TaskCard TitleText={o.TitleText} DriverText={o.DriverText} VehicleText={o.VehicleText}>
                        {o.TitleText} - {o.VehicleText} - {o.DriverText}
                    </TaskCard>
                })}
                </div > 
                <div className="Button1">
                    <Button2 ></Button2>   
                </div>           
                </div>

                    {/* Controls / Fade in animation on the form */}

            <FadeIn delay={150} transitionDuration={1600}>
            <div className="card" style={{padding, left, top,position:'relative'}}>
            <AddTaskCard onPreview={HandleFormComplete} onPress={console.log(TitleText)}></AddTaskCard>
            </div>
            </FadeIn>
            </div>
            </FadeIn>
}

export default Home;