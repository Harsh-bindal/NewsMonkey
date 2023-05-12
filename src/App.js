
import React, { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default class App extends Component {



  render() {
    let { country = "in" ,page=10 } = this.props;
    return (



<Router>

{/* <News pageSize={page} country="us" category="sports" ></News> */}
<div className='container'>
<Navbar></Navbar>

<Routes>
            <Route exact path="/" element={<News  key="general" category="general" pageSize={page} country={country} ></News>}/>
             <Route exact path="/business" element={<News  key="business" category="business" pageSize={page} country={country} ></News>}/>
            <Route exact path="/entertainment" element={<News  key="entertainment" category="entertainment" pageSize={page} country={country} ></News>}/>
            <Route exact path="/sports" element={<News  key="sports" category="sports" pageSize={page} country={country} ></News>}/>
            <Route exact path="/Technology" element={<News  key="technology" category="technology" pageSize={page} country={country} ></News>}/>
            <Route exact path="/Health" element={<News key="health" category="health" pageSize={page} country={country} ></News>}/>
            <Route exact path="/Science" element={<News  key="science" category="science" pageSize={page} country={country} ></News>}/> 

          </Routes>
</div>
  
</Router>


    )
  }
}
