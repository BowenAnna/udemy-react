import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import pi, { doublePi, tripplePi } from "./components/math";
// import * as pi from './components/math'; //the same as the above import. * means import everything as... and give it a name.
// console.log(pi);
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Card from "./components/Card";
import Contact from "./components/Contact";
import contacts from "./components/contacts";

export default function App() {
  function createCard(contact) {
    return (
      <Contact
        key={contact.id}
        id = {contact.id}
        name={contact.name}
        img={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  }
  return (
    <div>
      <Header />
      <Heading />
      {/* <h1>{pi}</h1>
      <p>{doublePi()}</p>
      <p>{tripplePi()}</p> */}
      {/* <p>{pi.default}</p> //if importing as *
  <p>{pi.doublePi()}</p>
  <p>{pi.tripplePi()}</p> */}
      {/* <Calculator /> */}
      {/* <Note /> */}
      <Card
        name="Otter"
        img="https://th.bing.com/th/id/OIP.B4jVvL9kZRpg3N_xTYfA_gHaGS?rs=1&pid=ImgDetMain"
        family="Weasel"
      />
      <Card
        name="Dolphin"
        img="https://cff2.earth.com/uploads/2023/03/28140803/Dolphin3-scaled.jpg"
        family="Mammal"
      />
      <h1 className="heading">My Contacts</h1>
      {/* {contacts.map((item)=>{
        return(
        <Contact name={item.name} imgURL={item.imgURL} phone={item.phone} email={item.email}/>)
      })} */}
      {/* <Contact name={contacts[0].name} imgURL={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email}/>
      <Contact name={contacts[1].name} imgURL={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email}/>
      <Contact name={contacts[2].name} imgURL={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email}/> */}
      {contacts.map(createCard)}
      <Footer />
    </div>
  );
}
