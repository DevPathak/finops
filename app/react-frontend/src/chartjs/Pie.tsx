
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
        radius: "90%",
        plugins: {
            doughnutLabel: [],
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 20,
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20
                }
            }
        }
    };

    const textCenter: any = {
        id: "textCenter",
        beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const { ctx, data } = chart;

            ctx.save();
            ctx.font = 'bold 20px sans-serif'
            ctx.fillStyle = 'grey'
            ctx.textAlign = 'center'
            // ctx.width = 1
            // ctx.height = 1
            ctx.fillText(`236K`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

    return <Pie options={options} data={pieChartData} plugins={[textCenter]}/>
}