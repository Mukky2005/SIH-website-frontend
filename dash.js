var ctx1 = document.getElementById('lineChart1').getContext('2d');
        var lineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
                datasets: [{
                    label: 'NITROGEN',
                    data: [26, 35, 39, 38, 41.2, 40, 29],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3, // Increased line width
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    
    
        var ctx1 = document.getElementById('lineChart2').getContext('2d');
        var lineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
                datasets: [{
                    label: 'POTASSIUM',
                    data: [230, 255, 287, 296, 289, 301, 322.75],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3, // Increased line width
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var ctx1 = document.getElementById('lineChart3').getContext('2d');
        var lineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
                datasets: [{
                    label: 'PHOSPHORUS',
                    data: [650, 590, 680, 671, 660, 720, 750],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3, // Increased line width
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var ctx1 = document.getElementById('lineChart4').getContext('2d');
        var lineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
                datasets: [{
                    label: 'SOIL MOISTURE',
                    data: [55, 54, 49, 58, 48.5,42.5,57.5],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3, // Increased line width
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var ctx1 = document.getElementById('lineChart5').getContext('2d');
        var lineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
                datasets: [{
                    label: 'SOIL TEMPERATURE',
                    data: [22, 27, 30.84, 24.55, 20.5, 28.5, 31.55],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3, // Increased line width
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var ctx1 = document.getElementById('lineChart6').getContext('2d');
        var lineChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
                datasets: [{
                    label: 'WATER PH',
                    data: [7.1, 6.8, 8.2, 7.5, 6.9, 8.0, 7.3],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3, // Increased line width
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });