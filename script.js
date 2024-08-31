const lineChartCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineChartCtx, {
    type: 'line',
    data: {
        labels: ['6/30/2024', '7/6/2024', '7/13/2024', '7/21/2024'],
        datasets: [{
                label: 'Orders',
                data: [4, 3, 2, 1],
                borderColor: '#FFA726',
                backgroundColor: 'rgba(255, 167, 38, 0.5)',
                fill: false,
                yAxisID: 'y-axis-1',
            },
            {
                label: 'Sales',
                data: [1404, 1100, 800, 600],
                borderColor: '#26C6DA',
                backgroundColor: 'rgba(38, 198, 218, 0.5)',
                fill: false,
                yAxisID: 'y-axis-2',
            },
        ],
    },
    options: {
        scales: {
            yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false,
                    },
                },
            ],
        },
    },
});



const pieChartCtx = document.getElementById('doughnutChart').getContext('2d');
const pieChart = new Chart(pieChartCtx, {
    type: 'pie',
    data: {
        labels: ['WooCommerce Store', 'Shopify Store'],
        datasets: [{
            data: [55.8, 44.2], // WooCommerce (Red) has a larger portion
            backgroundColor: ['#FF6384', '#36A2EB'], // Red for WooCommerce, Blue for Shopify
            hoverBackgroundColor: ['#FF4D61', '#239FDB'], // Darker shades on hover
        }, ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top', // Position the legend at the top
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    let percentage = (value / total * 100).toFixed(1) + '%';
                    return percentage; // Only display the percentage inside each slice
                },
                color: '#000', // Set text color to black
                font: {
                    weight: 'bold',
                    size: 14,
                },
                align: 'center', // Align text to center of the slice
                anchor: 'center', // Anchor the text to the center
            },
        },
        title: {
            display: true,
            text: 'Total: 2659', // Display the total value above the chart
            fontSize: 18,
            padding: 20,
            fontColor: '#000', // Set title color to black
        },
    },
});
