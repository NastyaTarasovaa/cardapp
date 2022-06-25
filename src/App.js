import './App.css';
import Add_word from'./components/Add_word';
import Card from './components/Card';
import Delete_button from './components/Delete_button';
import Dictionary from './components/Dictionary';
import Edit_word from './components/Edit_word';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import styles from './components/Table.module.css';
import Slider from './components/Slider';





function App() {
  return (
    <div className="App">
      <div>
        <Slider></Slider>
        <Card></Card>
        </div>
      <div className={styles.Table}>
      <Table></Table>
      </div>
    </div>
  );
}

export default App;
