import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Bar from './components/Header/Bar';
import ListCards from './components/Main/ListCards/ListCards';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [data, setData] = useState([]);


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  },[])

  return (
    <>
      <header>
        <Bar/>
      </header>

      <main>
        <h1>List Banks</h1>
        <div className='cards_container'>
          <ListCards data={data} />
        </div>
      </main>

      <footer className="footer_container">
        <Footer/>
      </footer>
    </>
  )
}

export default App
