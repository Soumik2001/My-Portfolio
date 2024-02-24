// turn pages when clicking on next or previous button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)

        }
    }
})



// contact me button when click 

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// create reverse index function

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {

    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


// back profile button when click 

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            },500)
        }, (index + 1) * 200 + 100)

    })
}


//  Opening animations

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//  Opening animations(Cover right animation)

setTimeout(()=> {
    coverRight.classList.add('turn');
},2100)
setTimeout(()=> {
    coverRight.style.zIndex = -1;
},2800)


//  Opening animations(Page left animation)


setTimeout(()=> {
    pageLeft.style.zIndex = 20;
},3200)



//  Opening animations(All page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        },500)
    }, (index + 1) * 200 + 2100)

})



// Type js function


new Typed('#typed',{
    strings : ['a Front-end Developer',' a Designer',' a Photographer', ' a Musician',],
    typeSpeed : 50,
    delaySpeed : 100,
    loop : true
  });





//   Message Function start Here



    // Initialize EmailJS with your user ID
    emailjs.init("zpsVfsx6ozJA3hRJy");

    // Function to send email
    function sendEmail(e) {
        e.preventDefault(); // Prevent form submission

        // Get user inputs
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Send email
        emailjs.send("service_fo9rg8y", "template_o6rsebr", {
            from_name: name,
            reply_to: email,
            message_html: message
        }).then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Your message has been sent!');
        }, function(error) {
            console.error('Email sending failed:', error);
            alert('There was an error sending your message. Please try again later.');
        });

        // Clear form inputs
        document.getElementById('contact-form').reset();
    }

    // Attach sendEmail function to form submission
    document.getElementById('contact-form').addEventListener('submit', sendEmail);

