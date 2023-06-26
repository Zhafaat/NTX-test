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

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function ChartLine() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [{
            label: 'Weekdays',
            data: [30, 33, 66],
            borderColor: 'aqua',
            backgroundColor: 'aqua',
            tension: 0.4,
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
    <div className={` m-1 md:p-[20px] p-[10px] bg-white w-[100%] sm:block ${showChart ? 'hidden' : 'block'}`} >
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