//JS for modal and cart
(function(){
    //Variables
    const orderBtn = document.querySelector(".menu__button");
    const modal = document.querySelector("#menu-modal");
    let menuItem = document.querySelector(".menu-modal__cart");
    let total = 0;
    let orderDisplay = document.querySelector(".order-display");
    let orderItem = document.querySelector(".menu-modal__order");

    //Event listener for button to open modal
    orderBtn.addEventListener("click", e => {
        e.preventDefault();

        //Open modal
        modal.style.display = "block";

    });

    //Event listener to close modal
    modal.addEventListener("click", e => {
        if(e.target.classList.contains("menu-modal__container")){
            modal.style.display = "none";
        }

    });

    //Add items to cart
    const cartBtn = document.querySelectorAll(".fa-cart-plus");

    //Loop through cart icons
    cartBtn.forEach((btn) => {
        //Add event listener to each button
        btn.addEventListener("click", e => {
            //Check that user has clicked on the icon
            if(e.target.parentElement.classList.contains("cart-item-icon")){
                //capture item name
                let itemName = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
                //capture item price
                let itemPrice = e.target.parentElement.previousElementSibling.textContent;

                //create item object
                const item = {
                    name: itemName,
                    price: itemPrice
                };


                //Create new cart item element div
                let cartItem = document.createElement("div");
                //Add classes to div
                cartItem.classList.add("menu-modal__order--item");
                //Add inner HTML
                cartItem.innerHTML = `<p>${item.name}</p><p>${item.price}`;
                //create element for remove icon
                let remove = document.createElement("span");
                //create inner HTML for remove icon
                remove.innerHTML = "<i class='fas fa-times'></i>"
                //append remove icon to cart item
                cartItem.appendChild(remove);
                //Insert cart item into UI
                orderItem.insertAdjacentElement("beforeend", cartItem);


                //Calculate and display total cost
                //Take item price and remove £ sign
                price = item.price.slice(1);
                //Convert to number
                price = Number(price);
                //Add each item price to total amount
                total += price;
                //Display total amount to two decimal places
                orderDisplay.textContent = total.toFixed(2);
            }

        });

    })

    //Remove items from cart
    menuItem.addEventListener("click", e => {
        //Check user has clicked delete icon
        if(e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("menu-modal__cart")){
            //Capture item price
            let orderItemPrice = e.target.parentElement.previousElementSibling.textContent;
            //Remove £ sign from price
            orderItemPrice = orderItemPrice.slice(1);
            //Convert to number
            orderItemPrice = Number(orderItemPrice);
            //Remove item amount from total
            total -= orderItemPrice;
            //display updated value to two decimal places
            orderDisplay.textContent = total.toFixed(2);
            //Remove item from UI
            e.target.parentElement.parentElement.remove();
        }

    });

})();


//Contact form validation
//Variables
(function(){

    const firstName = document.querySelector("#fname");
    const lastName = document.querySelector("#lname");
    const email = document.querySelector("#email");
    const visitDate = document.querySelector("#date");
    const branch = document.querySelector("#branch");
    const subject = document.querySelector("#subject");
    const checkFood = document.querySelector("#cb-food");
    const checkService = document.querySelector("#cb-service");
    const checkDrink = document.querySelector("#cb-drink");
    const checkOther = document.querySelector("#cb-other");
    const message = document.querySelector("#message");
    const form = document.querySelector(".contact__form");

    //Function for error
    showError = input => {
        input.style.border = ".2rem solid red";
    }

    //Function for success
    showSuccess = input => {
        input.style.border = ".2rem solid green";
    }

    //Function to check email is valid
    isValidEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Listen for submit
    form.addEventListener("submit", e => {

        //Prevent default submit behaviour
        e.preventDefault();

        //Test first name input for content
        if(firstName.value === ""){
            showError(firstName);
        } else {
            showSuccess(firstName);
        }

        //Test last name input for content
        if(lastName.value === ""){
            showError(lastName);
        } else {
            showSuccess(lastName);
        }

        //Test email input for content and ensure it is a valid email format
        if(email.value === ""){
            showError(email);
        } else if(!isValidEmail(email.value)){
            showError(email);
        } else {
            showSuccess(email);
        }

        //Test visit date input for content
        if(visitDate.value === ""){
            showError(visitDate);
        } else {
            showSuccess(visitDate);
        }

        //Test branch input for content
        if(branch.value === ""){
            showError(branch);
        } else {
            showSuccess(branch);
        }

        //Test subject input for content
        if(subject.value === ""){
            showError(subject);
        } else {
            showSuccess(subject);
        }

        //Test message input for content
        if(message.value === ""){
            showError(message);
        } else {
            showSuccess(message);
        }


    });

})();
