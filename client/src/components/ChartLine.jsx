// import react
import {useContext, useRef} from 'react'

// import library
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Line, getElementsAtEvent } from "react-chartjs-2";

// import context
import GlobalContext from '../context/GlobalContext';
import AddAttendance from './AddAttendance';



ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
    );
    
    function ChartLine() {

        const { showChart, selectOffice, attendances, showAddAttendance, setShowAddAttendance } = useContext(GlobalContext)
        
        let present = []
        let dates = []

        if (attendances) {
            present = attendances.reduce((acc, curr) => {
                acc.push(curr.present);
                return acc
            }, [])

            dates = attendances.reduce((acc, curr) => {
                const date = curr.date.toDate()
                const formatedDate = date.toLocaleDateString()
                acc.push(formatedDate);
                return acc
            }, [])
            
        }



        const data = {
        labels: dates,
        datasets: [{
            label: 'Present',
            data: present,
            borderColor: 'aqua',
            backgroundColor: 'aqua',
            tension: 0.4,
        }]
    };

    const options = {

    }
    
    const chartRef = useRef();
    const onClick = (event) => {
        if (getElementsAtEvent(chartRef.current, event).length > 0) {
            const clickDatasetIndex = getElementsAtEvent(chartRef.current, event)[0].datasetIndex;
            const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
        }
    }



  return (
    <div className={` m-1 md:p-[20px] p-[10px] bg-black-gradient-2 rounded-xl  w-[100%] sm:block ${showChart ? 'hidden' : 'block'}`} >
        {
            selectOffice ? 
                <div className=' w-full flex justify-between'>
                    <h2 className='text-white'>
                        Attendance in {selectOffice.city} office
                    </h2> 
                    <button 
                    className='py-0 px-2 bg-blue-gradient font-semibold text-[14px] text-primary outline-none rounded-[10px]'
                    onClick={() => setShowAddAttendance(true)}
                    >
                        Add Attendance
                    </button>
                    {showAddAttendance && <AddAttendance id={selectOffice.id} />}

                </div>
            : 
                <h2 className=' text-white'>
                    Attendance
                </h2>
        }
        <Line
            data = {data}
            options = {options}
            onClick = {onClick}
            ref = {chartRef}
        >

        </Line>
    </div>
  )
}

export default ChartLine