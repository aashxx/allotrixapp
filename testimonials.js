const workingContainer = document.querySelector('#working-container');

export function testimonials() {
  const testimonialHeading = document.createElement("h1");
  testimonialHeading.className = "testimonial-heading";
  testimonialHeading.textContent = "Testimonials";
  workingContainer.appendChild(testimonialHeading);

  const testimonialContainer = document.createElement("section");
  testimonialContainer.className = "testimonials";
  testimonialContainer.style.color = "black";


  testimonialContainer.innerHTML= `
  

  <div class='wrappe'>
        <!--1st person testimonial-->
        <div class='contin'>
        <div class='profi'>
          <div class='imgBx'>
            <img src='https://i.postimg.cc/zXQ0Tjh2/image.png'/>
          </div>
          <h2>Atheeb Hussain</h2>
          </div>
           <div class='left'><img src='https://cdn-icons-png.flaticon.com/512/56/56937.png'/></div>
                <p> I am immensely proud to be the Director General at CPS Prime MUN. It was a totally different experience with MUNers from all over Chennai with different levels of experience. The MUN arrangements were exceptionally good. Looking forward to collab with Prime MUN again in future.</p>
          <div class='right'><img src='https://cdn-icons-png.flaticon.com/512/56/56826.png'/></div>
          <div class='soci'>
           
            <a href='https://www.instagram.com/atheebxh/'> <img src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png'/></a>
             <a href='https://www.linkedin.com/in/atheeb-hussain-79a2751a1/'> <img src='https://cdn-icons-png.flaticon.com/512/145/145807.png'/></a>
             <a href='https://twitter.com/Atheeb33092407'> <img src='https://cdn-icons-png.flaticon.com/512/733/733579.png'/></a>
          </div>
        </div>


        <!--2nd person testimonial-->
         <div class='contin'>
        <div class='profi'>
          <div class='imgBx'>
            <img src='https://i.postimg.cc/Cxh70R0J/image.png'/>
          </div>
          <h2>Atul Raj Sokhi</h2>
          </div>
           <div class='left'><img src='https://cdn-icons-png.flaticon.com/512/56/56937.png'/></div>
                <p> Being the Secretary General in the first chapter of the cps prime mun was a great experience for me. having attended a lot of such conferences in the past, it just made me feel like this one was the best. the delegates, the faculty advisors, the school management were supportive and made our work of conducting this conference a cup of tea. looking forward to be a part of the second chapter</p>
          <div class='right'><img src='https://cdn-icons-png.flaticon.com/512/56/56826.png'/></div>
          <div class='soci'>
           
            <a href='http://www.instagram.com/attttuuullll/'> <img src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png'/></a>
             <a href='#'> <img src='https://cdn-icons-png.flaticon.com/512/145/145807.png'/></a>
             <a href='https://twitter.com/AtulSokhi'> <img src='https://cdn-icons-png.flaticon.com/512/733/733579.png'/></a>
          </div>
        </div>


        <!--3rd person testimonial-->
         <div class='contin'>
        <div class='profi'>
          <div class='imgBx'>
            <img src='https://i.postimg.cc/q7WzBfVx/image.png'/>
          </div>
          <h2>Nithin Vishal</h2>
          </div>
           <div class='left'><img src='https://cdn-icons-png.flaticon.com/512/56/56937.png'/></div>
                <p> MUN is a good place to develop your leadership skills and social skills as everyone is required t form a team with someone for the final amendment. These two days were one hell of an emotional roller coasters cause we kept breaking and merging teams and i believe that all of us learnt something new.</p>
          <div class='right'><img src='https://cdn-icons-png.flaticon.com/512/56/56826.png'/></div>
          <div class='soci'>
           
            <a href='#'> <img src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png'/></a>
             <a href='#'> <img src='https://cdn-icons-png.flaticon.com/512/145/145807.png'/></a>
             <a href='#'> <img src='https://cdn-icons-png.flaticon.com/512/733/733579.png'/></a>
          </div>
        </div>
       
</div>
  `


  
  workingContainer.appendChild(testimonialContainer);

 
}
