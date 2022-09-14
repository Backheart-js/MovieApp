import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import router from './router';

function App() {

  return ( 
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            router.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout;

              return (
                <Route key={index} path={route.path} element={
                  <Layout>
                    <Page layout={route.layout}/>
                  </Layout>
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