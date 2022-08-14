import React, {useEffect} from 'react'
import {Footer, Blog, Possibility, Header, What, Features} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';

// All these containers and componenets are from the folders wer created earlier.
const App = () => {
  useEffect(() => {
    document.title = "D-N Hardwood"
  }, [])
  return (
    <div className='App'>

        <div className='gradient__bg'>
          
            <Navbar/>
            <Header/>

        </div>
        <Brand/>
        <What/>
        <Possibility/>
        <Blog/>
        <Features/>
        <Cta/>
        <Footer/>

    </div>
  )
}

export default App