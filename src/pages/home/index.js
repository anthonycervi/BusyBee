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

    const [TitleText,setTitle] = useState([])
    const [TimeText,setTime] = useState([])
    const [DriverText,setDriver] = useState([])
    const [VehicleText,setVehicle] = useState([])

    const HandleFormComplete = async (TitleText,TimeText,DriverText,VehicleText) => {
    setTitle(TitleText);
    setTime(TimeText);
    setDriver(DriverText);
    setVehicle(VehicleText);
    console.log("complete");
    console.log(TitleText);
    }
    var left = 0 + 'px';
    var top = 0 + 'px';
    var padding = 0 + 'px';

    

    return <div>
    <div className="main">
                <Header ></Header>
               
                <FilterBy></FilterBy>
              
                <TaskCard TitleText={TitleText} ></TaskCard>
           

                
                <Button2></Button2>
              
            </div>
            <FadeIn delay={150} transitionDuration={1600}>
            <div className="card" style={{padding, left, top,position:'relative'}}>
            <AddTaskCard onPreview={HandleFormComplete} TitleText={TitleText} onPress={console.log(TitleText)}></AddTaskCard>
            </div>
            </FadeIn>
            </div>
}

export default Home;

// TitleText
// TimeText
// DriverText
// VehicleText