import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from './layout/MainLayout/MainLayout';
import router from './router';

function App() {

  return ( 
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            router.map((route, index) => {
              const Page = route.component;

              return (
                <Route key={index} path={route.path} element={
                  <MainLayout>
                    <Page/>
                  </MainLayout>
                } />
              ) 
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;