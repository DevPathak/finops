
import { Bar } from "react-chartjs-2" 
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale,  
         BarElement, 
         Title, 
         Tooltip, 
         Legend 
        } from "chart.js"
import { barChartData } from "./FAKE_DATA";

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

export const BarGraph = () => {

    const options: any = {
        responsive: true,
        indexAxis: 'y',
        barThickness: 20,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 10
                }
            }
        }
    };

    return <Bar options={options} data={barChartData}/>
}