import React from 'react';
import Weather from '../components/Weather';
import Header from '../components/Header';
import Footer from '../components/Footer';



import '../assets/styles/App.css';




const App = () => {


    return (
        <div className="App">

            <Header/>
            <Weather/>
            <Footer/>

        </div>
)}
export default App;