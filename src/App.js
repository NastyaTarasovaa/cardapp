import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Changecard from './components/Changecard';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//+ импорт страницы ошибки


function App() {

  let words = [
    {id:1, english:"carrot",transcription:"[ ˈkærət ]",russian:"морковь"},
    {id:2, english:"buttefly",transcription:"[ ˈbʌtəflaɪ ]",russian:"бабочка"},
    {id:3, english:"street", transcription:"[ stri:t ]", russian:"улица"},
    {id:4,english:"car",transcription:"[ kɑ: ]",russian:"автомобиль"},
    {id:5,english:"arm",transcription:"[ ɑ:m ]",russian:"рука"},
    {id:6,english:"air",transcription:"[  eər ]",russian:"воздух"},
    {id:7,english:"fox",transcription:"[ fɒks ]",russian:"лиса"},
    {id:8,english:"rabbit",transcription:"[ ˈræbɪt ]",russian:"кролик"},
    {id:9,english:"owl",transcription:"[ aʊl ]",russian:"сова"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"}
    ];

    return (
      <BrowserRouter>
      <div className={styles.App}>
       <Table></Table>
      </div>
    </BrowserRouter>
    );
  }







export default App;
