import React, { useState } from "react"
import './App.css'
import Header from "./Header"
import Profile from "./Profile"
import Count from "./Count"
import Form from "./Form"
import Ref from "./Ref"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Table from "./table"
import Ureducer from "./Ureducer"
import ThemeContext from "./ThemeContext"
import Ucontext from "./Ucontext"
import Umemo from "./uMemo"
import Ucallback from "./Ucallback"
import Counter from "./Redux/Counter"
import { Provider } from "react-redux"
import store from "./Redux/store"

function App() {
  const data = [
    {
      id : 1,
      name: "Rigel Tate",
      phone: "(578) 750-7680",
      email: "ullamcorper.viverra.maecenas@aol.com",
      address: "P.O. Box 291, 6604 Cum St."
    },
    {
      id : 2,
      name: "Rigel Tate",
      phone: "(578) 750-7680",
      email: "ullamcorper.viverra.maecenas@aol.com",
      address: "P.O. Box 291, 6604 Cum St."
    },{
      id : 3,
      name: "Rigel Tate",
      phone: "(578) 750-7680",
      email: "ullamcorper.viverra.maecenas@aol.com",
      address: "P.O. Box 291, 6604 Cum St."
    }
  ]

  const [show, setShow] = useState(false);

  return (
    <div>
       <Router >
       <Provider store={store}>
      <Header />
      <Counter/>
      </Provider>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    <ThemeContext.Provider value="dark">
      {/* <Ucontext/> */}
    </ThemeContext.Provider>
    {/* <Table/> */}
      {/* <Profile data={data} show={show} /> */}
      {/* <Count/> */}
      {/* <Form/> */}
      {/* <Ref/> */}
      {/* <Ureducer/> */}
      {/* <Umemo/> */}
      {/* <Ucallback/> */}
     
    </div>
  )
}

export default App
