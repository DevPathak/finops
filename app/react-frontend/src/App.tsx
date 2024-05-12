import './App.css'
// import { PieGraph } from './chartjs/Pie'
// import { LineGraph } from './component/Line'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Calculation } from './pages/Calculation'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculation" element={<Calculation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


// function App() {
//   return <div className="App"> <PieGraph /> </div>
// }

// export default App