import React from 'react';
import Button1 from '../../comps/Button1';
import Button2 from '../../comps/Button2';
import DateDropdown from '../../comps/Date';
import TimeDropdown from '../../comps/Time'
import DeleteTaskCard from '../../comps/DeleteTaskCard';
import TaskCard from '../../comps/TaskCard';
import Header from '../../comps/Header';
import AddTaskCard from '../../comps/AddTaskCard';



/*
var menu_state = false;
var img_state = 1;
function MenuToggle(){
  console.log("menu_state start", menu_state);
  if(menu_state == false) {
  SlideRight();
} else {
  SlideLeft();

}

function SlideRight() {
  document.querySelector("#menu").style.left = "0em";
  menu_state = true;
  console.log(menu_state);
}
function SlideLeft() {
  document.querySelector("#menu").style.left = "-13.5em";
  menu_state = false;
  console.log(menu_state);
}
*/
const Home = () =>{
    return  <div className="main">
                <Header></Header>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <AddTaskCard/>
            </div>
}

export default Home;