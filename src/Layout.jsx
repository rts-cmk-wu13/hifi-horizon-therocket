import { Outlet } from 'react-router'
import Header from './components/UniversalComponents/Header'
import Footer from './components/UniversalComponents/Footer'

function Layout() {

  return (
    <>
      <Header/>

      <main>
        < Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default Layout
