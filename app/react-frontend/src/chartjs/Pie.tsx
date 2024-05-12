
import { Pie } from "react-chartjs-2" 
import { Chart as ChartJS,
         Tooltip, 
         Legend,
         ArcElement
        } from "chart.js"
import { pieChartData } from "./FAKE_DATA";

ChartJS.register(
    Tooltip, 
    Legend,
    ArcElement
)

export const PieGraph = () => {

    const options: any = {
        responsive: true,
        cutout: "70%",
        radius: "59%",
        plugins: {
            doughnutLabel: [],
            legend: {
                display: true,
                position: "top",
                labels: {
                    boxWidth: 10,
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 30
                }
            }
        }
    };

    const textCenter: any = {
        id: "textCenter",
        beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const { ctx, data } = chart;

            ctx.save();
            ctx.font = 'bolder 30px sans-serif'
            ctx.fillStyle = 'red'
            ctx.textAlign = 'center'
            ctx.fillText('90%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

    return <Pie options={options} data={pieChartData} plugins={[textCenter]}/>
}