var body = document.body;
function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");

    if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300); 
        body.classList.remove("no-scroll");
    } else {
        dropdownMenu.style.display = "flex";
        setTimeout(() => {
            dropdownMenu.classList.add("show");
        }, 10); 
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
                data: [82.5, 85, 90, 82.5, 90, 80, 80, 82.5, 82.5, 100],
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
function smoothScrollTo(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600; 
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 
        const scrollY = startPosition + distance * easeInOutQuad(progress);
        window.scrollTo(0, scrollY);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            const isActive = dropdownContent.classList.contains('show');
            document.querySelectorAll('.dropdown-content.show').forEach(content => {
                if (content !== dropdownContent) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    setTimeout(() => {
                        content.style.maxHeight = '0';
                        content.style.opacity = '0';
                    }, 10);
                    setTimeout(() => {
                        content.classList.remove('show');
                    }, 300);
                }
            });
            document.querySelectorAll('.dropdown-btn span').forEach(span => {
                span.textContent = '▼';     
            });
            if (!isActive) {
                setTimeout(() => {
                    smoothScrollTo(this);
                },300); 
                setTimeout(() => {
                
                    dropdownContent.classList.add('show');
                    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
                    dropdownContent.style.opacity = '1';
                    this.querySelector('span').textContent = '▲';
                },1200);
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'; 
                setTimeout(() => {
                    dropdownContent.style.maxHeight = '0';
                    dropdownContent.style.opacity = '0';
                }, 10); 
                setTimeout(() => {
                    dropdownContent.classList.remove('show');
                }, 300); 
            }
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

