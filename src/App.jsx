import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemListContainer from './componentes/Catalog/ItemListContainer'
import ItemDetailContainer from './componentes/ProductDeailt/ItemDetailContainer'
import Home from './componentes/Home/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <NavBar />
      
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/productos" element={<ItemListContainer/>} />

          <Route  path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
  
        </Routes>
        {/* <ItemListContainer /> */}
        
        
      </header>
    </div>
  );
}

export default App;
