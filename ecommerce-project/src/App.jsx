import { HomePage } from './pages/HomePage'
import './App.css'
import {Routes, Route} from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<h1>Orders Page</h1>} />
        <Route path="tracking" element={<h1>Tracking Page</h1>} />
      </Routes>
    </>
  );
}

export default App
