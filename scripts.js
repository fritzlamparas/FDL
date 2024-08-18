var body = document.body;
function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    

    if (dropdownMenu.style.display === "flex") {
      dropdownMenu.style.display = "none";
      body.classList.remove("no-scroll");
    } else {
      dropdownMenu.style.display = "flex";
      body.classList.add("no-scroll");
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myBarChart').getContext('2d');
    if (!ctx) {
        console.error('Canvas element not found');
        return;
    }

    var labels = ['Interpersonal Skills', 'Technical Proficiency', 'Problem-Solving Skills', 'Flutter', 'English Communication', 'Data Management', 'Machine Learning', 'Game Development', 'Web Development'];
    var backgroundColors = [
        'rgba(255, 0 , 0, 1)',
        'rgba(255, 127, 0, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(75, 0, 130, 1)',
        'rgba(148, 0, 211, 1)',
        'rgba(139,69,19,1)',
        'rgba(0,0,0,1)',
    ];
    var borderColors = [
        'rgba(255, 0 , 0, 1)',
        'rgba(255, 127, 0, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(75, 0, 130, 1)',
        'rgba(148, 0, 211, 1)',
        'rgba(139,69,19,1)',
        'rgba(0,0,0,1)',
    ];

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Proficiency',
                data: [87.5, 90, 95, 87.5, 95, 85, 85, 87.5, 87.5, 100],
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var legendContainer = document.getElementById('legrow');
    labels.forEach((label, index) => {
        var legendItem = document.createElement('div');
        legendItem.className = 'legendItem';

        var colorBox = document.createElement('div');
        colorBox.className = 'colorBox';
        colorBox.style.backgroundColor = backgroundColors[index];
        legendItem.appendChild(colorBox);

        var text = document.createElement('span');
        text.textContent = label;
        legendItem.appendChild(text);

        legendContainer.appendChild(legendItem);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            const isActive = dropdownContent.style.display === 'block';
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-btn span').forEach(span => {
                span.textContent = '▼';
            });
             if (!isActive) {
                dropdownContent.style.display = 'block';
                this.querySelector('span').textContent = '▲';
            }
            dropdownContent.style.display = isActive ? 'none' : 'block';
        });
    });
});

var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

var modalImg = document.getElementById("modal-img");

var listItems = document.querySelectorAll('.cert li');

listItems.forEach(function(item) {
    item.addEventListener('click', function() {
  
        var imgSrc = item.getAttribute('data-img');
    
        modalImg.src = imgSrc;
   
        modal.style.display = "flex";
        body.classList.add("no-scroll");
    });
});

span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("no-scroll");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.classList.remove("no-scroll");
    }
}

