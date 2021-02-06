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



const Home = () =>{
// Preview / Updates Practices
const fakedb = [
    {
        TitleText:"Take Susie to School",
        DriverText:"Sarah",
        VehicleText:"Honda Civic"
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

    const [TitleText,setTitle] = useState([]);
    const [TimeText,setTime] = useState([]);
    const [DriverText,setDriver] = useState([]);
    const [VehicleText,setVehicle] = useState([]);
    const [DateText,setDateText] = useState([]);
    const [alldb, setAllDb] = useState([]);
  

    //Handles information from the form to update preview. [ADD TO DB FROM SAM]
    const HandleFormComplete = async (TitleText,TimeText,DriverText,VehicleText,compDate) => {
    setTitle(TitleText);
    setTime(TimeText);
    setDriver(DriverText);
    setVehicle(VehicleText);
    setDateText(compDate);
    console.log(DateText)
    setAllDb(arr)
    var arr = fakedb;
    }

    const onFilterVehicle = (text) => {
        setAllDb(fakedb.filter((o)=>{
          return o.VehicleText.includes(text);
        })
        )
      }

     


    var left = 0 + 'px';
    var top = 0 + 'px';
    var padding = 0 + 'px';

    //Fake Database with Information on the Title, Driver, Vehicle, etc.
   

    



    return <div>
    <div className="main">
                <Header ></Header>
               
                <FilterBy onFilterVehicle={onFilterVehicle}></FilterBy>
              <div className="ScrollDiv">

                  {/* Maps out the fake database and assigns those values directly to the comps */}

                {fakedb.map(o=>{
                    return <TaskCard TitleText={o.TitleText} DriverText={o.DriverText} VehicleText={o.VehicleText}>
                        {o.TitleText} - {o.VehicleText} - {o.DriverText}
                    </TaskCard>
                })}
                </div>

                
                <Button2></Button2>
              
            </div>

                    {/* Controls / Fade in animation on the form */}

            <FadeIn delay={150} transitionDuration={1600}>
            <div className="card" style={{padding, left, top,position:'relative'}}>
            <AddTaskCard onPreview={HandleFormComplete} onPress={console.log(TitleText)}></AddTaskCard>
            </div>
            </FadeIn>
            </div>
}

export default Home;

// TitleText
// TimeText
// DriverText
// VehicleText