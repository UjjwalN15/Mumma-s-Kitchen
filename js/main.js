const navbar = document.getElementById('navbar');
const nav_links = document.getElementById('nav_links');
const social_links = document.getElementById('social-links');
const menu_bars = document.getElementById('menu-bars');
const hamburger_icon = document.getElementById('hamburger-icon');
const close_icon = document.getElementById('close-icon');
const mediaQuery = window.matchMedia('(max-width: 800px)');
const to_top = document.getElementById('to_top');
navbar.style.opacity = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navbar.style.opacity = 1;
        navbar.style.display = 'flex';
        navbar.style.transition = 'all 0.5s';
        // navbar.style.color = 'black';
        // navbar.style.width = '1280px';
        // navbar.style.justifyContent = 'space-between';
        // navbar.style.marginTop = '20px';
        // navbar.style.borderRadius = '20px';
        // navbar.style.boxShadow = '1px 0 10px orangered';
        // nav_links.style.display = 'block';
        // nav_links.style.display = 'flex';
        // social_links.style.display = 'block';
        // social_links.style.display = 'flex';
        to_top.style.opacity = '1';
        to_top.style.pointerEvents = 'auto';
        to_top.style.transform = 'translateY(0)';
        to_top.style.transition = 'all 0.5s';
    } else {
        navbar.style.display = 'none';
        // nav_links.style.display = 'none';
        // social_links.style.display = 'none';
        // navbar.style.backgroundColor = 'transparent';
        // navbar.style.color = 'white';
        // navbar.style.justifyContent = 'center';
        // navbar.style.boxShadow = 'none';
        to_top.style.opacity = '0';
        to_top.style.pointerEvents = 'none';
    }
});


const sections = ['#header', '#about-section', '#contact-us', '#people-says', '#gallery'];
const sr = ScrollReveal();
sections.forEach(section => {
    sr.reveal(section, {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: false
    });
});


// Function to update stars based on user input
const updateStars = (ratingValue) => {
    const starTotal = 5; // Total number of stars
    const starPercentage = (ratingValue / starTotal) * 100; // Percentage for the width
    const starPercentageRounded = `${Math.round(starPercentage * 10) / 10}%`; // Rounded percentage

    // Update the width of the stars-inner element
    document.querySelector('.stars-inner').style.width = starPercentageRounded;

    // Update the displayed rating value
    document.querySelector('.rating-value').textContent = ratingValue.toFixed(1);
};

// Handle user input dynamically
document.getElementById('user-rating').addEventListener('input', (event) => {
    const inputValue = parseFloat(event.target.value);

    // Ensure value is within 0 to 5 range
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 5) {
        updateStars(inputValue);
    }
});


// const swiper = new Swiper(".swiper", {
//     loop: true,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
// });

const orderbox = document.getElementById('order-box');
const order_buttons = document.querySelectorAll('.order-button');
const close = document.querySelector('.close');

order_buttons.forEach(button => {
    button.addEventListener('click', () => {

        const itemContainer = button.closest(".item-types");
        const foodName = itemContainer.querySelector("p").textContent;
        const foodPriceText = itemContainer.querySelector(".price-button p").textContent;
        document.getElementById("food-name").value = foodName.trim();
        document.getElementById("food-price").value = foodPriceText.trim();

        const foodPriceInt = parseInt(foodPriceText.replace(/[^0-9]/g, ''), 10);

        const food_quantity = document.getElementById('food-quantity');
        food_quantity.value = '';
        const totalPriceElement = document.getElementById('total-price');
        totalPriceElement.textContent = 'Your Total will be: 0';
        food_quantity.addEventListener('input', () => {
            const quantity = parseInt(food_quantity.value, 10) || 0; // Default to 0 if input is empty
            if(quantity >=1){
                total = quantity * foodPriceInt;
                totalPriceElement.textContent = `Your Total will be: ${total}`;
            }
            else{
                totalPriceElement.textContent = 'Your Total will be: 0';
            }
        });


        orderbox.style.display = 'block';
        orderbox.style.display = 'flex';
        orderbox.style.pointerEvents = 'auto';
        orderbox.style.transition = 'all 0.5s';
        orderbox.classList.add('flex-center');
    });
});
close.addEventListener('click', ()=>{
    orderbox.style.display = 'none';
});


const radios = document.querySelectorAll('input[name="paymentMethod"]');
radios.forEach((radio) => {
    const paymentOnline = document.getElementById('paymentOnline');
    const cod = document.getElementById('cod');
    const mobileNumberOnlineID = document.getElementById('mobileNumber');
    const PaymentSuccessful = document.getElementById('PaymentSuccessful');
    const FileInput = document.getElementById('PaymentSuccessful');
    const CodmobileNumber = document.getElementById('CodmobileNumber');
    radio.addEventListener("change", function () {
        // Reset visibility for all sections
        paymentOnline.style.display = 'none';
        cod.style.display = 'none';

        if (radio.value === 'esewa') {
            paymentOnline.style.display = 'block';
            mobileNumberOnlineID.value = '9768431599';
            PaymentSuccessful.style.display = 'inline-block';
            FileInput.required = true;
            CodmobileNumber.required = false;
        } else if (radio.value === 'khalti') {
            paymentOnline.style.display = 'block';
            mobileNumberOnlineID.value = '9841588049';
            PaymentSuccessful.style.display = 'inline-block';
            FileInput.required = true;
            CodmobileNumber.required = false;
        } else if (radio.value === 'cash') {
            cod.style.display = 'block';
            FileInput.required = false;
            CodmobileNumber.required = true;
        }
    
    });
});


// const logo_container = document.querySelector('.logo-container')
window.addEventListener('scroll',()=>{
    if (window.innerWidth <= 500 && window.scrollY > 200) {
        // logo_container.style.display = 'block';
        menu_bars.style.display = 'block';
        close_icon.style.display = 'none';
    }else{
        menu_bars.style.display = 'none';
    }
});

hamburger_icon.addEventListener('click', ()=>{
    if(hamburger_icon.style.display === 'block' || hamburger_icon.style.display === '' ){
        hamburger_icon.style.display = 'none';
        close_icon.style.display = 'block';
        nav_links.style.top = '100px';
        nav_links.style.height = '400px';
        nav_links.style.left = 0;
    }else{
        hamburger_icon.style.display = 'block';
        close_icon.style.display = 'none';
    }
});
close_icon.addEventListener('click', ()=>{
    if(close_icon.style.display === 'block' || close_icon.style.display === '' ){
        close_icon.style.display = 'none';
        hamburger_icon.style.display = 'block';
        nav_links.style.top = '-100vh';
    }else{
        close_icon.style.display = 'block';
        hamburger_icon.style.display = 'none';
    }
});

const message_form = document.getElementById('message_form');
message_form.addEventListener('submit',()=>{
    alert("Your message is saved successfully. Thank you !!!")
});

const order_form = document.getElementById('order_form');
const order_food = document.getElementById('food-name');
const order_food_price = document.getElementById('food-price');
const order_food_quantity = document.getElementById('food-quantity');

order_form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the form from actually submitting to show the alert first

    // Convert price and quantity to numbers before calculating total
    const price = parseInt(order_food_price.value);
    const quantity = parseInt(order_food_quantity.value, 10);
    const total = price * quantity;

    alert(`${quantity} orders for ${order_food.value} with price ${order_food_price.value} saved. Your total will be ${total}. Thank you!!!`);
});

