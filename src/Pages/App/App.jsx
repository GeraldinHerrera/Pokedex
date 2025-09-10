import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from '../Home/index'; 
import PokemonDetail  from '../PokemonDetail/index';  
import Favorites from '../../components/Favorites';
import { PokemonProvider } from '../../Context';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    {path:'/pokemon/:id',element: <PokemonDetail/>},
    {path:'/favorites' ,element:<Favorites />}
  ]);

  return routes;
};

const App = () => {
  return (
    <PokemonProvider>
      <BrowserRouter basename='/Pokedex'>
        <AppRoutes />
      </BrowserRouter>
    </PokemonProvider>

  );
};

export default App;

