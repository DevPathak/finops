import { Doughnut } from 'react-chartjs-2';


export default function BarChart() {

    const bar_data = {
        labels: ["Positive Reviews", "Neutral Reviews", "Negative Reviews"],
        datasets: [{
            label: "Number of reviews",
            data: [10, 20, 15, 26],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0.5,
        }]
    }
   

  return (
      <Doughnut data={bar_data} />
  )
}