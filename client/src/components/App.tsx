import { BrowserRouter } from 'react-router-dom';
import Layout from '/layout.tsx';

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
