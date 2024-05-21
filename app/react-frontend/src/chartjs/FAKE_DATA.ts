
export const lineChartData = {
    labels: [
        "",
        "November",
        "December",
        "January",
        "February",
        "March",
        "April"
    ],
    datasets: [
        {
            label: "Login",
            data: [0, 5900, 6900, 8700, 9500, 9700, 9900],
            borderColor: 'rgba(0, 71, 171, 1)'
        },
        {
            label: "PDD",
            data: [0, 4000, 4500, 5300, 5600, 7900, 9000],
            borderColor: 'rgba(60, 184, 51, 1)'
        }
    ]
}

export const barChartData: any = {
    labels: [
        "December",
        "January",
        "Februrary",
        "March",
        "April",
        "May"
    ],
    datasets: [{
      axis: 'y',
      label: 'LOGIN',
      data: [7600, 7200, 9500, 10200, 10500, 3000],
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
    },
    {
        axis: 'y',
        label: 'PDD',
        data: [3600, 4200, 4500, 7000, 9000, 2000],
        fill: false,
        backgroundColor: [
          'rgba(60, 184, 51, 0.6)',
          'rgba(60, 184, 51, 0.6)'
        ],
        borderColor: [
          'rgba(24, 122, 17, 0.9)',
          'rgba(24, 122, 17, 0.9)'
        ],
        borderWidth: 1
      }]
}

export const pieChartData = {
    labels: [ "Invoice : 523", "Payment : 426", "Retention : $236K"],
    datasets: [
        {
            label: "Amount",
            data: [44, 39, 23],
            backgroundColor: [
                "rgba(31, 32, 54, 1)",
                "rgba(111, 104, 227, 1)",
                "rgba(197, 198, 201, 1)"
            ],
            hoverOffset: 25
        }
    ]
}