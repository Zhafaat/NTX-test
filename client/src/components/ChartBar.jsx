import {useContext, useRef} from 'react'

// import library
import {
    Chart as ChartJS,
    BarElement,
    // PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar, getElementsAtEvent } from "react-chartjs-2";
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
    const data = {
        labels: ['senin', 'selasa', 'rabu', 'kamis', `jum'at`],
        datasets: [{
            label: 'Weekdays',
            data: [30, 33, 66],
            // borderColor: '',
            backgroundColor: 'aqua',
            borderWidth: 1,
            name: ['data1', 'data2', 'data3']
        }, {
          label: 'ofDays',
          data: [32, 43, 50],
          // borderColor: 'black',
          backgroundColor: 'red',
          borderWidth: 1,
          name: ['data1', 'data2', 'data3']
      }]
    };

    const options = {

    }
    
    const chartRef = useRef();
    const onClick = (event) => {
        if (getElementsAtEvent(chartRef.current, event).length > 0) {
            const clickDatasetIndex = getElementsAtEvent(chartRef.current, event)[0].datasetIndex;
            const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
            console.log(clickDatasetIndex, dataPoint)
            console.log(data.datasets[clickDatasetIndex].name[dataPoint])
        }
    }

    const { showChart } = useContext(GlobalContext)


  return (
    <div className={` m-1 md:p-[20px] p-[10px] bg-white w-[100%] sm:block ${showChart ? 'block' : 'hidden'}`}>
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