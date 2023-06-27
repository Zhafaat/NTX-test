// import react
import {useContext, useRef} from 'react'

// import library
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar, getElementsAtEvent } from "react-chartjs-2";

// import context
import GlobalContext from '../context/GlobalContext';

ChartJS.register(
    BarElement,
    // PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
    );
    
    function ChartBar() {

    const { showChart, attendances } = useContext(GlobalContext)
    
    let sick = []
    let leave = []
    let onProject = []
    let inOffice = []
    let dates = []

    if (attendances) {
        sick = attendances.reduce((acc, curr) => {
            acc.push(curr.sick);
            return acc
        }, [])

        leave = attendances.reduce((acc, curr) => {
            acc.push(curr.leave);
            return acc
        }, [])

        onProject = attendances.reduce((acc, curr) => {
            acc.push(curr.onProject);
            return acc
        }, [])

        inOffice = attendances.reduce((acc, curr) => {
            acc.push(curr.inOffice);
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
            label: 'Sick',
            data: sick,
            backgroundColor: '#7de7eb',
            borderWidth: 1,
        }, {
          label: 'Leave',
          data: leave,
          backgroundColor: '#9dedf0',
          borderWidth: 1,
        }, {
            label: 'On Project',
            data: onProject,
            backgroundColor: '#bef3f5',
            borderWidth: 1,
        }, {
            label: 'In Office',
            data: inOffice,
            backgroundColor: '#def9fa',
            borderWidth: 1,
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
    <div className={` m-1 md:p-[20px] p-[10px] bg-black-gradient-2 rounded-xl w-[100%] sm:block ${showChart ? 'block' : 'hidden'}`}>
        <h2 className=' text-white'>Attendance Informations</h2>
        <Bar
            data = {data}
            options = {options}
            onClick = {onClick}
            ref = {chartRef}
        >

        </Bar>
    </div>
  )
}

export default ChartBar