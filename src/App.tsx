//import { useState } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import './App.css'

import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Projects from "./components/mains/Projects.tsx";
import Contact from "./components/mains/Contact.tsx";
import Skills from "./components/mains/Skills.tsx";
import styled from "styled-components";

//fix the colors
const StyledWrapper=styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: burlywood;
`;

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root(){
  return(
      <StyledWrapper>
        <Header/>
        <StyledContainer>
          <Nav/>
          <Routes>
            <Route
                path={`/`}
                element={<Home/>}
            />
            <Route
                path={`/projects/projects.html`}
                element={<Projects/>}
            />
            <Route
                path={`/education/education.html`}
                element={<Education/>}
            />
            <Route
                path={`/skills/skills.html`}
                element={<Skills/>}
            />
            <Route
                path={`/contact/contact.html`}
                element={<Contact/>}
            />
            <Route
                path={`/experiences/experiences.html`}
                element={<Experiences/>}
            />

          </Routes>
        </StyledContainer>
        <Footer/>
      </StyledWrapper>
  );
}
const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}
