/*!
 * Start Bootstrap - Freelancer v6.0.3 (https://startbootstrap.com/themes/freelancer)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */

(function($) {


    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });
    
    // Split the entire HTML file into multiple HTML files
    // 就是一整个HTML file屎长屎长的，看着就很蛋疼，所以要分开
 
    $('#header').load('header.html');
    $('#portfolio').load('portfolio/index.html'); 
    $('#footer').load('footer.html'); 
  
 
 
    
    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
   
       
    
})(jQuery); // End of use strict



function myFunction() {
    //  alert("Hello! I am an alert box!");
    window.location.href = 'https://illi-507.github.io/portfolio-test1/';
}


//window.location.href = ' https://romantic-borg-d59d4d.netlify.app/';


function model0GitLink() {
    window.open('https://github.com/illi-507/React-Movie-Search');
}

function model0LiveLink() {
    window.open('https://sad-hypatia-6d00ca.netlify.app/');
}


function model1GitLink() {
    window.open(' https://github.com/illi-507/React-ToDoList');
}

function model1LiveLink() {
    window.open('https://react-todolist-0c3cf0.netlify.app');
}

function model2GitLink() {

    window.open('https://github.com/illi-507/react-color-selector');

}

function model2LiveLink() {

    window.open('https://react-color-d59d4d.netlify.app');

}

function model3GitLink() {
    window.open('https://github.com/illi-507/React-Calculator');
}

function model3LiveLink() {
    window.open('https://react-calculator-04eb9a.netlify.app');
}

function model4GitLink() {
    window.open('https://github.com/illi-507/React-Markdown');
}

function model4LiveLink() {
    window.open('https://react-markdown-cc72bd.netlify.app');
}

function model5GitLink() {
    window.open('https://github.com/illi-507/React-Weather2');
}

function model5LiveLink() {
    window.open('https://weather2-7a1fd3.netlify.app');
}

function model6GitLink() {
    window.open('https://github.com/illi-507/React-Drum-Machine');
}

function model6LiveLink() {
    window.open('https://react-drum-machine-4ff48.netlify.app');
}

function model7GitLink() {
    window.open('https://github.com/illi-507/React-GithubFinder');
}

function model7LiveLink() {
    window.open('https://react-gitfinder-6eb456.netlify.app/');
}

/*nodejs */
function nodeModal1LiveLink() {
    window.open('https://node-header-parser-xj.herokuapp.com/');
}

function nodeModal2LiveLink() {
    window.open('https://node-imageuploader.herokuapp.com/');
}

function nodeModal3LiveLink() {
    window.open('https://node-urlshorten.herokuapp.com/');
}

function nodeModal4LiveLink() {
    window.open('https://node-loginsimu.glitch.me/');
}

function nodeModal5LiveLink() {
    window.open('https://node-timestamp-xj.glitch.me/');
}




/*responsive web*/

function responsiveModal0GitLink() {
    window.open('https://github.com/illi-507/HTML-Nike-Shoes/tree/master');
}
function responsiveModal0LiveLink() {
    window.open('https://quirky-cori-592847.netlify.app/');
}

function responsiveModal1GitLink() {
    window.open('https://github.com/illi-507/HTML_Product-Landing-Page');
}

function responsiveModal1LiveLink() {
    window.open('https://html-razorlandingpaget.netlify.app/');
}

function responsiveModal2GitLink() {
    window.open('https://github.com/illi-507/HTML_Build-A-Document-Page');
}

function responsiveModal2LiveLink() {
    window.open('https://html-documentpage-c7b794.netlify.app/');
}

function responsiveModal3GitLink() {
    window.open('https://github.com/illi-507/HTML-Survery-Form');
}

function responsiveModal3LiveLink() {
    window.open('https://html-survey-form-731eb7.netlify.app');
}

function responsiveModal4GitLink() {
    window.open('https://github.com/illi-507/jQuery-Random-Quote');
}

function responsiveModal4LiveLink() {
    window.open('https://jquery-random-quote-19f6.netlify.app');
}




/*html canvas*/
function canvasModal1GitLink() {
    window.open('https://github.com/illi-507/ComputerGraphics-Solar');
}

function canvasModal1LiveLink() {
    window.open('https://solor-system-c76909.netlify.app/');
}

function canvasModal2GitLink() {
    window.open('https://github.com/illi-507/ComputerGraphics-Cuboids');
}

function canvasModal2LiveLink() {
    window.open('https://cuboids-46d6c0.netlify.app/');
}

function canvasModal3GitLink() {
    window.open('https://github.com/illi-507/ComputerGraphics-Castle-');
}

function canvasModal3LiveLink() {
    window.open('https://castle-bc2d91.netlify.app/');
}

function canvasModal4GitLink() {
    window.open('https://github.com/illi-507/ComputerGraphics-Amuse-Prototype');
}

function canvasModal4LiveLink() {
    window.open('https://amusepark-prototype-546334.netlify.app/');
}

function canvasModal5GitLink() {
    window.open('https://github.com/illi-507/ComputerGraphics-Amuse-Textured');
}

function canvasModal5LiveLink() {
    window.open('https://amuse-park-textured-4cda42.netlify.app/');
}

function mernModal1GitLink() {
    window.open('https://github.com/illi-507/MERN-ShoppingList');
}

function mernModal1LiveLink() {
    window.open('https://mern-shopping-64281.herokuapp.com/');
}

function mernModal2GitLink() {
    window.open('https://github.com/illi-507/travel-search/tree/master');
}

function mernModal2LiveLink() {
    window.open('https://travel-entertainment-search.herokuapp.com/');
}

function mernModal3LiveLink(){
    window.open('https://illi-507.github.io/VueDemo/');
}

function mernModal3GitLink() {
    window.open('https://github.com/illi-507/Vue-P1');
}


function OAModal1GitLink() {
    window.open('https://github.com/illi-507/SAP_OA_2020');
}

function OAModal1LiveLink() {
    window.open('https://dreamy-edison-998846.netlify.app/');
}

function OAModal2GitLink() {
    window.open('https://github.com/illi-507/IBM_OA_2020');
}

function OAModal2LiveLink() {
    window.open('https://adoring-lichterman-25ca4c.netlify.app/');
}



/*
$(document).ready(function() {
    
    let url1 = "https://raw.githubusercontent.com/illi-507/React-ToDoList/master/README.md";
    $.get(url1, function(data, status) {
        console.log("data",data);
       let outer_text = data.split('\n');
        let description = "";
        for (let i = 0; i < outer_text.length; i++) {
            description = description + outer_text[i] + "<br>";
        }
        $("#todolistDescription").html(description);
        console.log("URL1");
        
    });
    console.log("URL1");

   
    let url2 = "https://raw.githubusercontent.com/illi-507/react-color-selector/master/README.md";
    $.get(url2, function(data, status) {
        let outer_text = data.split('\n');
        let description = "";
        for (let i = 0; i < outer_text.length; i++) {
            description = description + outer_text[i] + "<br>";
        }
        $("#colorDescription").html(description);
    });

    let url3 = "https://raw.githubusercontent.com/illi-507/React-Calculator/master/README.md";
    $.get(url3, function(data, status) {
        let outer_text = data.split('\n');
        let description = "";
        for (let i = 0; i < outer_text.length; i++) {
            description = description + outer_text[i] + "<br>";
        }
        $("#calculatorDescription").html(description);
    });

    let url4 = "https://raw.githubusercontent.com/illi-507/React-Markdown/master/README.md";
    $.get(url4, function(data, status) {
        let outer_text = data.split('\n');
        let description = "";
        for (let i = 0; i < outer_text.length; i++) {
            description = description + outer_text[i] + "<br>";
        }
        $("#markdownDescription").html(description);
    });


    let url5 = "https://raw.githubusercontent.com/illi-507/React-Weather2/master/README.md";
    $.get(url5, function(data, status) {
        let outer_text = data.split('\n');
        let description = "";
        for (let i = 0; i < outer_text.length; i++) {
            description = description + outer_text[i] + "<br>";
        }
        $("#weatherDescription").html(description);
    });

    let url6 = "https://raw.githubusercontent.com/illi-507/React-Drum-Machine/master/README.md";
    $.get(url6, function(data, status) {
        let outer_text = data.split('\n');
        let description = "";
        for (let i = 0; i < outer_text.length; i++) {
            description = description + outer_text[i] + "<br>";
        }
        $("#drumDescription").html(description);
    });

});

*/