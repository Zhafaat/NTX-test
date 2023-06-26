// import React from 'react'
import { useContext } from "react"

// import component
import ChartBar from "./components/ChartBar"
import ChartLine from "./components/ChartLine"
import Maps from "./components/Maps"

// import asset
import { iconChartBar, iconChartLine} from './assets'

// import GlobalContext
import GlobalContext from "./context/GlobalContext"

function App() {

  const { setShowChart } = useContext(GlobalContext)

  return (
    <div className=" relative w-full">
      <Maps />
      <div className=" bg-transparent xs:p-5 p-1 pb-5 lg:w-[40%] md:w-[50%] w-full md:h-full h-fit flex md:flex-col sm:flex-row flex-col justify-around absolute bottom-0 right-0 z-10">
        <div className="sm:hidden flex flex-row">
          <img src={iconChartLine} alt="chart line" className=' bg-white rounded-md m-1 w-[28px] h-[28px] object-contain' onClick={() => {
            setShowChart(false)
          }}/>
          <img src={iconChartBar} alt="chart bar" className=" bg-white rounded-md m-1 w-[28px] h-[28px] object-contain" onClick={() => {
            setShowChart(true)
          }}/>
        </div>
        <ChartLine />
        <ChartBar />
      </div>
    </div>
  )
}

export default App