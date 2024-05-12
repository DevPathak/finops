export const lineChartData = {
    labels: [
        "November",
        "December",
        "January",
        "February",
        "March",
        "April"
    ],
    datasets: [
        {
            label: "Retention",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: 'rgba(0, 71, 171, 0.5)'
        }
    ]
}

export const barChartData: any = {
    labels: [
        "Calculation Pending",
        "Calculation Done",
        "Invoice Accepted",
        "Payment Released"
    ],
    datasets: [{
      axis: 'y',
      label: 'Pending Payments',
      data: [356, 238, 221, 138],
      fill: false,
      backgroundColor: [
        'rgba(0, 71, 171, 0.6)',
        'rgba(0, 71, 171, 0.6)'
      ],
      borderColor: [
        'rgba(0, 71, 171, 0.9)',
        'rgba(0, 71, 171, 0.9)'
      ],
      borderWidth: 1
    }]
}

export const pieChartData = {
    labels: [ "Invoice", "Pending", "Payment", "Retention"],
    datasets: [
        {
            label: "Time Spent",
            data: [120, 60, 30, 90],
            backgroundColor: [
                "rgba(255, 99, 132, 0.9)",
                "rgba(54, 162, 235, 0.9)",
                "rgba(255, 206, 86, 0.9)",
                "rgba(75, 192, 192, 0.9)"
            ],
            hoverOffset: 4
        }
    ]
}