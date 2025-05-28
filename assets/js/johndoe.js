/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

//article scroller
$(document).ready(function () {
    $('.article-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000, // Auto slide speed in milliseconds
      infinite: true,
      responsive: [
        {
          breakpoint: 768, // Tablet and mobile screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.674, lng: -73.945}, // Update with valid coordinates
      zoom: 12,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]},
          {featureType: 'poi', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]},
          {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#263c3f'}]},
          {featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#6b9a76'}]},
          {featureType: 'road', elementType: 'geometry', stylers: [{color: '#38414e'}]},
          {featureType: 'road', elementType: 'geometry.stroke', stylers: [{color: '#212a37'}]},
          {featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#9ca5b3'}]},
          {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#746855'}]},
          {featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{color: '#1f2835'}]},
          {featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{color: '#f3d19c'}]},
          {featureType: 'transit', elementType: 'geometry', stylers: [{color: '#2f3948'}]},
          {featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]},
          {featureType: 'water', elementType: 'geometry', stylers: [{color: '#17263c'}]},
          {featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#515c6d'}]},
          {featureType: 'water', elementType: 'labels.text.stroke', stylers: [{color: '#17263c'}]}
      ]
  });
}

//Skills
const skills = [
    { name: "Cypress with JS", percentage: 98 },
    { name: "Selenium Webdriver", percentage: 97 },
    { name: "Java Automation Test Cases", percentage: 97 },
    { name: "HTML5 & CSS3", percentage: 97 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Tailwind Css", percentage: 97 },
    { name: "JavaScript", percentage: 85 },
    { name: "Java", percentage: 80 },
    { name: "SQL", percentage: 55 },
    { name: "Ruby on Rails", percentage: 60 },
    { name: "Test Planning", percentage: 85 },
    { name: "Regression Testing", percentage: 90 },
    { name: "Bug Tracking", percentage: 99 },
    { name: "Performance Testing", percentage: 84 },
    { name: "Cross-Browser Testing", percentage: 100 },
    { name: "Mobile Testing", percentage: 99 },
    { name: "Test Documentation", percentage: 90 }
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
    const skillHTML = `
        <div class="progress-bar-main mb-2 position-relative">
            <div class="skill-progress-bar" role="progressbar" style="width: ${skill.percentage}%" aria-valuenow="${skill.percentage}"
                aria-valuemin="0" aria-valuemax="100">
                ${skill.name}
            </div>
            <p class="m-0 p-0 percentage-position position-absolute">${skill.percentage}%</p>
        </div>`;
    
    skillsContainer.innerHTML += skillHTML;
});
