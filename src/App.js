import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            //            Khi người dùng truy cập một URL:
            // Nếu là route hợp lệ('/', '/products', '/order'):

            //           isShowHeader = true
            //           Layout sẽ là DefaultComponent
            //           DefaultComponent sẽ render cả HeaderComponent và nội dung trang
            //           Nếu là route không hợp lệ (404):

            //           isShowHeader không được định nghĩa (undefined)
            //           Layout sẽ là Fragment
            //           Chỉ render nội dung trang, không có HeaderComponent
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment; // Layout = DefaultComponent
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App;