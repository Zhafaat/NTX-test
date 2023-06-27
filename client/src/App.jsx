// import React from 'react'
import { useContext} from "react"

// import component
import ChartBar from "./components/ChartBar"
import ChartLine from "./components/ChartLine"
import Maps from "./components/Maps"
import ListOffice from "./components/ListOffice"
import AddNew from "./components/AddNew"

// import asset
import { iconChartBar, iconChartLine} from './assets'

// import GlobalContext
import GlobalContext from "./context/GlobalContext"

function App() {

  const { setShowChart, showAddOffice, showAddAttendance } = useContext(GlobalContext)

  return (
    <div className=" relative w-full">
      <div className=" rounded-md m-3 absolute md:top-[70px] top-0 md:left-0 left-12 z-20">
        <ListOffice />
        {showAddOffice && <AddNew />}
      </div>
      <Maps />
      <div className=" bg-transparent xs:p-5 p-1 pb-5 lg:w-[40%] md:w-[50%] w-full md:h-full h-fit flex md:flex-col sm:flex-row ss:flex-row flex-col justify-around absolute bottom-0 right-0 z-10">
        <div className="sm:hidden flex ss:flex-col flex-row">
          <img src={iconChartLine} alt="chart line" className=' bg-blue-gradient rounded-md m-1 w-[28px] h-[28px] object-contain' onClick={() => {
            setShowChart(false)
          }}/>
          <img src={iconChartBar} alt="chart bar" className=" bg-blue-gradient rounded-md m-1 w-[28px] h-[28px] object-contain" onClick={() => {
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