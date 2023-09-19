import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDymSv7NIZufePM27ZXVf97KDdwb9QxY8s",
  authDomain: "mun-automator.firebaseapp.com",
  databaseURL: "https://mun-automator-default-rtdb.firebaseio.com",
  projectId: "mun-automator",
  storageBucket: "mun-automator.appspot.com",
  messagingSenderId: "536970944281",
  appId: "1:536970944281:web:c82c6174ef9a816124af88",
  measurementId: "G-B7EDJMNPHV"
};
// Initialize Firebase
const App = initializeApp(firebaseConfig);
const database = getDatabase(App);


const navHome = document.getElementById("home");
const navAbout = document.getElementById("about");
const navPricing = document.getElementById("pricing");
const navContact = document.getElementById("contact");
const download = document.getElementById("download");



navHome.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".hero");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

navAbout.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".info-section-container");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

navPricing.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".subscription-container");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

navContact.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".contact-container");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

download.addEventListener("click", (e)=>{
  e.preventDefault();
})

const contactFormButton = document.getElementById("form-button");

contactFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  const contactName = document.getElementById("name");
  const contactEmail = document.getElementById("email");
  const contactMessage = document.getElementById("message");

  let userName = contactName.value;
  let userEmail = contactEmail.value;
  let message = contactMessage.value;

  let obj = { name: userName, email: userEmail, msg: message }; 

  const messagesRef = ref(database, "contactMessages"); 
  const newMessageRef = push(messagesRef); 
  set(newMessageRef, obj)
    .then(() => {
      console.log("Data added to the database successfully.");
    })
    .catch((error) => {
      console.error("Error adding data to the database:", error);
    });

  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
});


const navDownloadButton = document.getElementById("download");
const heroDownloadButton = document.getElementById("hero-download");

heroDownloadButton.addEventListener("click", (e)=>{
  e.preventDefault();
  heroDownloadButton.textContent = "Coming Soon..."
  setTimeout(()=>{heroDownloadButton.textContent = "Download" }, 2000  );
})

navDownloadButton.addEventListener("click", (e)=>{
  e.preventDefault();
  navDownloadButton.textContent = "Coming Soon..."
  setTimeout(()=>{navDownloadButton.textContent = "Download" }, 2000  );
})

const preOrder = document.getElementById("pre-order");


//----------PRE ORDER SCREEN ----------------

preOrder.addEventListener("click", preOrderScreen);

function preOrderScreen(){
  const preOrderScreenDiv = document.createElement('div');
  preOrderScreenDiv.classList.add("preOrderScreenDiv")
  document.body.appendChild(preOrderScreenDiv);



  

  const backBtnContainer= document.createElement("div");
  backBtnContainer.classList.add("back-btn-container");

  



  const backBtn = document.createElement("button");
  backBtn.textContent = "Back";
  backBtn.id = "back-button";
  backBtn.classList.add("btn")
  backBtnContainer.appendChild(backBtn)
  preOrderScreenDiv.appendChild(backBtnContainer);

  const divWrap = document.createElement("div");
  divWrap.classList.add("hero")

  preOrderScreenDiv.appendChild(divWrap);

  const PreOrderTag = document.createElement('h1');
  PreOrderTag.classList.add("heading");
  PreOrderTag.textContent = "PRE ORDER"
  PreOrderTag.style.fontWeight = "bold";


  const allotrixHead = document.createElement('h1');
  allotrixHead.classList.add("heading");
  allotrixHead.textContent = "allotrix"
  allotrixHead.style.color = "rgba(239, 64, 54, 1)";
  allotrixHead.style.fontWeight = "bold";

  divWrap.appendChild(allotrixHead);
  divWrap.appendChild(PreOrderTag);

// Create the form
const form = document.createElement('form');
form.style.width = "100%";
form.style.paddingLeft =  "5em";
form.style.paddingTop =  "2em";
form.style.paddingRight =  "5em";

// Create Name input
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
nameInput.required = true;

// Create Email input
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;

// Create Product select
const productSelect = document.createElement('select');
productSelect.name = 'product';

const productOptions = ['Allotrix Standard', 'Allotrix Premium'];

productOptions.forEach((optionText) => {
  const option = document.createElement('option');
  option.value = optionText;
  option.textContent = optionText;
  productSelect.appendChild(option);
});

// Create Submit button
const submitButton = document.createElement('button');
submitButton.classList.add("btn");
submitButton.type = 'button';
submitButton.textContent = 'Whitelist Me';

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(productSelect);
form.appendChild(submitButton);

divWrap.appendChild(form);

document.body.appendChild(preOrderScreenDiv);

submitButton.addEventListener('click', () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const product = productSelect.value;

  const formData = {
    name: name,
    email: email,
    product: product,
  };

  if (name!= "" && email!= ""){
    checkEmailExists(email);


    function checkEmailExists(email) {
      const msgRef = ref(database, "preOrders");
    
      // Get the data from the "preOrders" node
      get(msgRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Loop through the children to check for existing emails
            let emailExists = false;
            snapshot.forEach((childSnapshot) => {
              const childData = childSnapshot.val();
              if (childData.email === email) {
                emailExists = true;
                return; // Exit the loop early if the email is found
              }
            });
    
            if (emailExists) {
              showPopup("Email already exists in our database.", "Whoops");
            } else {
              // Email doesn't exist, upload the formData to "preOrders" child
              const messagesRef = ref(database, "preOrders");
              const newMessageRef = push(messagesRef);
              set(newMessageRef, formData)
                .then(() => {
                  console.log("Data added to the database successfully.");
                  showPopup("You have been granted a 20% discount; we will promptly inform you upon software release.", "WhiteListed!");
                })
                .catch((error) => {
                  console.error("Error adding data to the database:", error);
                });
            }
          } else {
            // "preOrders" node doesn't exist, upload the formData
            const messagesRef = ref(database, "preOrders");
            const newMessageRef = push(messagesRef);
            set(newMessageRef, formData)
              .then(() => {
                console.log("Data added to the database successfully.");
                showPopup("You have been granted a 20% discount; we will promptly inform you upon software release.", "WhiteListed!");
              })
              .catch((error) => {
                console.error("Error adding data to the database:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error retrieving data from the database:", error);
        });
    }
    
}else{
    console.log("cant leave empty")
  }
});

  backBtn.addEventListener("click", () => {
    preOrderScreenDiv.parentNode.removeChild(preOrderScreenDiv);
});
function showPopup(msg, head) {
  preOrderScreenDiv.parentNode.removeChild(preOrderScreenDiv);

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');


  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const headingmessage = document.createElement('h1');
  headingmessage.classList.add("subheading");
  headingmessage.textContent =head;
  headingmessage.style.color= "white";
  headingmessage.style.fontWeight= "bold";



  const message = document.createElement('p');
  message.textContent =msg


  const okayButton = document.createElement('button');
  okayButton.classList.add("btn")
  okayButton.textContent = 'Okay';
  okayButton.addEventListener('click', closePopup);

  // Append the message and button to the content div
  popupContent.appendChild(headingmessage);
  popupContent.appendChild(message);

  popupContent.appendChild(okayButton);

  popupContainer.appendChild(popupContent);

  document.body.appendChild(popupContainer);
}

// Function to close the pop-up
function closePopup() {
  const popupContainer = document.querySelector('.popup-container');
  if (popupContainer) {
    popupContainer.remove();
  }
}
}

const premiumSubBtn = document.getElementById("premium-sub-btn")
const standardSubBtn = document.getElementById("standard-sub-btn")

premiumSubBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  premiumSubBtn.textContent = "Coming Soon..."
  setTimeout(()=>{premiumSubBtn.textContent = "Download" }, 2000  );
})


standardSubBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  standardSubBtn.textContent = "Coming Soon..."
  setTimeout(()=>{standardSubBtn.textContent = "Download" }, 2000  );
})



