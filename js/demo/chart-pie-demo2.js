// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('myPieChart2');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Mesin', 'Sipil', 'Elektro', 'Industri', 'Informatika'],
    datasets: [
      {
        data: [18, 17, 22, 18, 25],
        backgroundColor: ['#1cc88a', '#ff1100', '#fff700', '#00b3ff', '#bb00ff'],
        hoverBackgroundColor: ['#108259', '#960a00', '#a19b00', '#0070a1', '#7d00ab'],
        hoverBorderColor: 'rgba(234, 236, 1)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});
