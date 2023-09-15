import React from 'react'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useToogle } from './context'

const App = () => {
  // eslint-disable-next-line
  const [toogle,setToogle] = useToogle()
  return (
    <div style={{background:toogle?'':'#333'}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
    </div>
  )
}

export default App