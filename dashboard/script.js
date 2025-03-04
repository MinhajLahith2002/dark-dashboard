
// Sales Chart
new Chart(document.getElementById('salesChart'), {
    type: 'line',
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#00ff88',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: true
    }
});

// Revenue Chart
new Chart(document.getElementById('revenueChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: '#00ff88'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: true
    }
});


