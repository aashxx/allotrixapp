const workingContainer = document.querySelector('#working-container');


const sponsorLogos = [
    {
      name: "Google",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Apple",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Amazon",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Facebook",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Microsoft",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Netflix",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Twitter",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "Instagram",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "YouTube",
      logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
        name: "YouTube",
        logoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      }
  ];

export function partners(){


    //heading
    const subheading = document.createElement('h6');
    subheading.classList.add('subheading');
    subheading.id = 'why-choose-allotrix';
    subheading.textContent = 'Our Customers';

    const paragraph = document.createElement('p');
    paragraph.classList.add('why-choose-head');
    paragraph.textContent = 'MUN orgs that loved our product';

    const whyChoose = document.createElement('div');
    whyChoose.classList.add('partners');


    whyChoose.appendChild(subheading);
    whyChoose.appendChild(paragraph);

    //content

    workingContainer.appendChild(whyChoose);

    const sponsorGrid = document.createElement('section');
    sponsorGrid.classList.add('sponsor-grid');

    for (const sponsorLogo of sponsorLogos) {
    const logoElement = document.createElement('div');
    logoElement.classList.add('sponsor-logo');

    const imgElement = document.createElement('img');
    imgElement.src = sponsorLogo.logoUrl;
    imgElement.alt = sponsorLogo.name;

    logoElement.appendChild(imgElement);
    sponsorGrid.appendChild(logoElement);
    }

    workingContainer.appendChild(sponsorGrid);


    


}

