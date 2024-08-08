var body = document.body;
function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var menuIcon = document.getElementById("menuIcon");
    

    if (dropdownMenu.style.display === "flex") {
      dropdownMenu.style.display = "none";
      menuIcon.textContent = "☰";
      body.classList.remove("no-scroll");
    } else {
      dropdownMenu.style.display = "flex";
      menuIcon.textContent = "X";
      body.classList.add("no-scroll");
    }
  }
var ctx = document.getElementById('myBarChart').getContext('2d');
var labels = ['Interpersonal Skills','Technical Proficiency','Problem-Solving Skills','Flutter','English Communication', 'Data Management', 'Machine Learning', 'Game Development', 'Web Development'];
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
            data: [87.5, 90, 95, 87.50, 95, 85, 85, 87.5, 87.5, 100],
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
                    display: false // Hide the x-axis labels
                }
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false // Disable the chart legend
            }
        }
    }
});

// Generate the legend items
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

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            const isActive = dropdownContent.style.display === 'block';

            // Hide all dropdown contents
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-btn span').forEach(span => {
                span.textContent = '▼';
            });
             // Toggle the clicked dropdown
             if (!isActive) {
                dropdownContent.style.display = 'block';
                this.querySelector('span').textContent = '▲'; // Change to up arrow
            }

            // Toggle the clicked dropdown
            dropdownContent.style.display = isActive ? 'none' : 'block';
        });
    });
});

//For the certification display
// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal image element
var modalImg = document.getElementById("modal-img");

// Get all list items
var listItems = document.querySelectorAll('.cert .des');

// Loop through the list items and add click event listeners
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Get the image source from the data attribute
        var imgSrc = item.getAttribute('data-img');
        // Set the modal image source to the clicked item's image
        modalImg.src = imgSrc;
        // Display the modal
        modal.style.display = "flex";
        body.classList.add("no-scroll");
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("no-scroll");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.classList.remove("no-scroll");
    }
}
