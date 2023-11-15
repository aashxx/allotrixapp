


export async function createPopup(){

    //create pop up
    const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
      
        const popup = document.createElement('div');
        popup.classList.add('popup');
      
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
      
        const heading = document.createElement('h2');
        heading.textContent = 'Allotrix Account';
      
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
      
        const popupContent = document.createElement('div');
        popupContent.innerHTML= ""
        popupContent.id = "pop-up-content";
        popupContent.classList.add('content');
      
        // Append the elements to build the structure
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popupContainer.appendChild(popup)
      
        // Add the popup to the document body
        document.body.appendChild(popupContainer);
      
        // Show the popup by removing the 'hidden' class
        popupContainer.classList.remove('hidden');


        closeButton.addEventListener('click', () => {

            const popupContent = document.getElementById("pop-up-content");
            popupContent.innerHTML=""
            popupContainer.classList.add('hidden');


          });

          loginpage()
          //loginPage

          function loginpage(){

            const mainContent = document.createElement('div');
            mainContent.id = "main-content"
            mainContent.classList.add('row', 'main-content', 'bg-success', 'text-center');
            
        
            
            const loginForm = document.createElement('div');
            loginForm.classList.add('col-md-8', 'col-xs-12', 'col-sm-12', 'login_form');
            
            const formContainer = document.createElement('div');
            formContainer.classList.add('container-fluid');
            
            const formHeading = document.createElement('h2');
            formHeading.innerHTML = 'Log In to <b style = "color: #EF4036;">Allotrix<b>';
            
            formContainer.appendChild(formHeading);
            
            const emailInput = document.createElement('input');
            emailInput.type = 'text';
            emailInput.name = 'email';
            emailInput.id = 'email_id';
            emailInput.placeholder = 'Email ID';
            emailInput.classList.add('form__input');
            
            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.name = 'password';
            passwordInput.id = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.classList.add('form__input');


            const rememberMeContainer = document.createElement('div');
            rememberMeContainer.style.display = "flex";
            rememberMeContainer.style.alignItems = "center";
            rememberMeContainer.style.justifyContent = "center";
            rememberMeContainer.style.width = "50%";



            const rememberMeCheckbox = document.createElement('input');
            rememberMeCheckbox.type = 'checkbox';
            rememberMeCheckbox.name = 'remember me';
            rememberMeCheckbox.id = 'remember_me';
            
            const rememberMeLabel = document.createElement('label');
            rememberMeLabel.setAttribute('for', 'remember_me');
            rememberMeLabel.textContent = 'Remember Me';

            rememberMeContainer.appendChild( rememberMeLabel);
            rememberMeContainer.appendChild(rememberMeCheckbox)

            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.value = 'Submit';
            submitButton.classList.add('btn');
            
            const form = document.createElement('form');
            form.className = "account-form"
            form.appendChild(emailInput);
            form.appendChild(passwordInput);
            form.appendChild(rememberMeContainer);
            form.appendChild(submitButton);
            form.addEventListener('submit', (event) => {
            
            // Handle form submission here
            });
            
            formContainer.appendChild(form);
            
            const noAccountText = document.createElement('p');
            noAccountText.innerHTML = `Don't have an account? <a href="#" class="no-account">Register Here</a>`;
            noAccountText.addEventListener("click",()=>{
                popupContent.innerHTML="";
                signupPage();
            })
            
            
            formContainer.appendChild(noAccountText);
            loginForm.appendChild(formContainer);
            mainContent.appendChild(loginForm);
            popupContent.appendChild(mainContent);

          }

          function signupPage(){

            const mainContent = document.createElement('div');
            mainContent.id = "main-content"
            mainContent.classList.add('row', 'main-content', 'bg-success', 'text-center');
            
        
            
            const loginForm = document.createElement('div');
            loginForm.classList.add('col-md-8', 'col-xs-12', 'col-sm-12', 'login_form');
            
            const formContainer = document.createElement('div');
            formContainer.classList.add('container-fluid');
            
            const formHeading = document.createElement('h2');
            formHeading.innerHTML = 'Sign Up with <b style = "color: #EF4036;">Allotrix<b>';
            
            formContainer.appendChild(formHeading);
            
            const usernameInput = document.createElement('input');
            usernameInput.type = 'text';
            usernameInput.name = 'username';
            usernameInput.id = 'username';
            usernameInput.placeholder = 'Username';
            usernameInput.classList.add('form__input');

            const emailInput = document.createElement('input');
            emailInput.type = 'text';
            emailInput.name = 'email';
            emailInput.id = 'email_id';
            emailInput.placeholder = 'Email ID';
            emailInput.classList.add('form__input');
            
            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.name = 'password';
            passwordInput.id = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.classList.add('form__input');


            const rememberMeContainer = document.createElement('div');
            rememberMeContainer.style.display = "flex";
            rememberMeContainer.style.alignItems = "center";
            rememberMeContainer.style.justifyContent = "center";
            rememberMeContainer.style.width = "50%";



            const rememberMeCheckbox = document.createElement('input');
            rememberMeCheckbox.type = 'checkbox';
            rememberMeCheckbox.name = 'remember me';
            rememberMeCheckbox.id = 'remember_me';
            
            const rememberMeLabel = document.createElement('label');
            rememberMeLabel.setAttribute('for', 'remember_me');
            rememberMeLabel.textContent = 'Remember Me!';

            rememberMeContainer.appendChild( rememberMeLabel);
            rememberMeContainer.appendChild(rememberMeCheckbox)

            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.value = 'Submit';
            submitButton.classList.add('btn');
            
            const form = document.createElement('form');
            form.className = "account-form"
            form.appendChild(usernameInput);
            form.appendChild(emailInput);
            form.appendChild(passwordInput);
            form.appendChild(rememberMeContainer);
            form.appendChild(submitButton);
            form.addEventListener('submit', (event) => {
            
            // Handle form submission here
            });
            
            formContainer.appendChild(form);
            
            const noAccountText = document.createElement('p');
            noAccountText.innerHTML = `Already have an account? <a href="#" class="no-account">Login Here</a>`;

            noAccountText.addEventListener("click",()=>{
                popupContent.innerHTML="";
                loginpage();
            })
            
            formContainer.appendChild(noAccountText);
            loginForm.appendChild(formContainer);
            mainContent.appendChild(loginForm);
            popupContent.appendChild(mainContent);
          }


}


export async function createLoginPage(){
    //login page.

    const popupContent = document.getElementById("pop-up-content");
    
    
}


export async function createSigninPage(){}
