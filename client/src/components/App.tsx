import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';

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
