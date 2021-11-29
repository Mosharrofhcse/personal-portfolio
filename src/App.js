import * as React from "react";
import { Route, Routes } from 'react-router';
import './App.css';
import Blogs from "./Pages/Blog/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contactus" element={<ContactUs />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Footer />} />

        <Route path="*" element={<NotFound />} />
        {/* <Route path="about" element={<About />} /> */}

        {/* <MessengerCustomerChat
          pageId={process.env.REACT_APP_PAGE_ID}
          appId={process.env.REACT_APP_FAC_ID}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
