
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Weather from './Components/Weather/Weather';
import FoodSearch from './Components/FoodRecipe/FoodSearch';
import FoodRecipe from './Components/FoodRecipe/FoodRecipe';

function App() {
  return (
   <>

<Routes>
  <Route index element={<Home/>}/>
  <Route path='/Weather' element={<Weather/>}/>
  <Route path='/Recipe' element={<FoodRecipe/>}/>
  <Route  path='/*' element={<h1>ERROR</h1>}/>
</Routes>
</>
  );
}

export default App;
