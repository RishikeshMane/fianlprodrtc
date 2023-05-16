import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App'
import FeedBackForm from './components/feedbackform'
import Products from './Products/Products'
import Contact from './components/last'
import Endid from './components/coughtsame';
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

ReactDOM.render(
        <BrowserRouter > 
            <Routes>
                <Route path='feedback' element={<FeedBackForm/>}></Route>
                <Route path="/app/:id" element={<App/>} component={App}></Route>
                <Route path="/Products" component={Products} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/endpointid" element={<Endid />} />
            </Routes>
        </BrowserRouter>
    , document.getElementById('root'))