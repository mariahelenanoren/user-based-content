import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Layout />
         </BrowserRouter>
      </div>
   );
}

export default App;