import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/home" element={<Home></Home>}></Route>
          <Route exact path="/courseDetails/:id" element={<CourseDetails></CourseDetails>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
