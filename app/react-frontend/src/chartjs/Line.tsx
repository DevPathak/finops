
import { Line } from "react-chartjs-2" 
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale, 
         PointElement, 
         LineElement, 
         Title, 
         Tooltip, 
         Legend 
        } from "chart.js"
import { lineChartData } from "./FAKE_DATA";

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend
)

export const LineGraph = () => {

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Last 6 months"
            }
        }
    };

    return <Line options={options} data={lineChartData}/>
}