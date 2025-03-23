// Sample gallery images data
const galleryImages = [
    {
        src: 'images/image4.jpg',
       
   },
    {
        src: 'images/image2.jpg', 
       
    },
    {
        src: 'images/image3.jpg',
       
    },
    {
        src: 'images/image1.jpg',
       
    },
    {   
        src: 'images/image5.jpg',
      
    },
    {
        src: 'images/image6.jpg',
      
    },
    {
        src: 'images/image7.jpg',
    
    },
    {
        src: 'images/image8.jpg',
     
    },
    {
        src: 'images/image9.jpg',
      
    },
    {
        src: 'images/image10.jpg',
       
    },
    {
        src: 'images/image11.jpg',
      
    },
    {
        src: 'images/12.jpg',
      
    },
    {
        src: 'images/image13.jpg',
       
    },
    {
        src: 'images/image14.jpg',
       
    },
    {
        src: 'images/image15.jpg',
       
    },
    {
        src: 'images/image16.jpg',
       
    },
    {
        src: 'images/image17.jpg',
       
    },
    {
        src: 'images/image18.jpg',
       
    },
    {
        src: 'images/image19.jpg',
       
    },
    {
        src: 'images/image20.jpg',
       
    },
    {
        src: 'images/image21.jpg',
       
    },
    {
        src: 'images/image22.jpg',
       
    },
        {
            src: 'images/image23.jpg',
            
        },
        {
            src: 'images/image24.jpg',
            
        },  
        {
            src: 'images/image25.jpg',
            
        },

  
    {
        src: 'images/image26.jpg',
       
    },
    {
        src: 'images/image27.jpg',
       
    },
    {
        src: 'images/image28.jpg',
       
    },
    
    



    
];


// Sample activity data
const activities = [
    {
        title: 'Photography Exhibition📸',
        date: 'March 15, 2024',
        description: 'Participated in a local photography exhibition showcasing my work.'
    },
    {
        title: 'Nature Hike🏞️',
        date: 'March 10, 2024',
        description: 'Explored new trails and captured stunning landscape photos.'
    },
    {
        title: 'Modeling🕴️',
        date: 'March 5, 2024',
        description: 'Modeling for a local fashion brand.'
    },
    {
        title: 'Singer🎸',
        date: 'February 28, 2024',
        description: 'A singer is a person who uses their voice to produce music, typically performing songs in various styles and genres'
    }
];
 // Function to toggle dark mode
 function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save the mode in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Check local storage for theme preference
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (document.body.classList.contains('show-mobile-menu')) {
            menuCloseButton.click();
        }
    });
});


// Function to populate gallery
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="gallery-item-info">

            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Function to populate activity timeline
function populateActivity() {
    const activityTimeline = document.querySelector('.activity-timeline');
    
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <h3>${activity.title}</h3>
            <div class="date">${activity.date}</div>
            <p>${activity.description}</p>
        `;
        
        activityTimeline.appendChild(activityItem);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateGallery();
    populateActivity();
}); 












