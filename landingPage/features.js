const workingContainer = document.querySelector('#working-container');


export function features(){

    const section = document.createElement('section');
    section.id = "features"
    const html = `
    <!-- FEATURES SECTION -->
      <h3>Features of Allotrix</h3>
      <h4>Allotrix offers a wide range of features to help you automate your debate tournament</h4>

      <!-- Container -->
      <div class="feature-items">

        <!-- Item 1 -->
        <article class="feature-item">
          <div class="feature-head">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.394 13.742L7.137 17.362 14.753 8.658 13.247 7.342 6.863 14.638 3.606 12.152zM21.753 8.658L20.247 7.342 13.878 14.621 13.125 14.019 11.875 15.581 14.122 17.379z"></path></svg>
            <p style="font-weight: 400;">Smart allotments</p>
          </div>
          <aside>
            <p>Allotrix uses a sophisticated algorithm to make accurate allotments, even for large MUNs with thousands of delegates.</p>
          </aside>
        </article>

        <!-- Item 2 -->
        <article class="feature-item">
          <div class="feature-head">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
            <p style="font-weight: 400;">Emailing</p>
          </div>
          <aside>
            <p>Allotrix can automatically send emails to delegates with their allotment information and other important tournament details.</p>
          </aside>
        </article>

        <!-- Item 3 -->
        <article class="feature-item">
          <div class="feature-head">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M11 3H5v3h6V3zM5 2a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H5zm3 11a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"></path><circle cx="8" cy="11" r="1"></circle></svg>
            <p style="font-weight: 400;">Reporting & Analysis</p>
          </div>
          <aside>
            <p>Allotrix provides detailed insights into your tournament data, so you can make informed decisions about future events all for free!</p>
          </aside>
        </article>
      </div>
    `
section.innerHTML=html;
    
    workingContainer.appendChild(section);
  
  

  

}