//Function to apply styles, input element to style and array of style objects
//object Format: {id: 'property', value: 'desired value'}
function applyStyles(array, element){
  array.forEach(styleObj => {
    element.style[styleObj.id] = styleObj.value;
  });
}

function addChildElement(parentElement, element){
  parentElement.appendChild(element);
}
  
//Putting code to make each segment of the page into a function to make it easier to read

function designHeader (){
  
  const header = document.createElement('div');
  header.id ='header';

  //Styles for the header element
  let styles = [
    {id: 'height', value: '140px'},
    {id: 'margin', value: '-10px'},
    {id: 'display', value: 'flex'},
    {id: 'position', value: 'relative'},
    {id: 'boxShadow', value: 'rgba(0, 0, 0, 0.04) 0px 1px 8px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px'}
    
  ];
  applyStyles(styles, header);
 /* 
  header.style.height = '140px';
  header.style.margin = '-10px';
  header.style.display = 'flex';
  header.style.position = 'relative';
  header.style.boxShadow = 'rgba(0, 0, 0, 0.04) 0px 1px 8px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px';
  */

  const navContainer = document.createElement('div');
  navContainer.id = 'nav-container';

//Styles for navContainer

  styles = [
    {id: 'width:', value: '65%'},
    {id: 'padding-right', value: '50px'},
    {id: 'display', value: 'flex'},
    {id: 'margin', value: 'auto'},
    {id: 'height', value: '100px'}
  ];

  applyStyles(styles, navContainer);

  //Adding all the elements to the navContainer
  //Starting with the Logo

  const mcDonaldsLogo = document.createElement('img');
  mcDonaldsLogo.id = 'mcdonalds-logo';

  styles = [
    {id: 'height', value: '105px'},
    {id: 'margin-left', value: '-45px'}
  ];
  applyStyles(styles, mcDonaldsLogo);
  mcDonaldsLogo.src = 'Images/mcdonalds-logo.jpg';

  addChildElement(navContainer, mcDonaldsLogo);

  //Adding the top left section of elements
  const topLeft = document.createElement('div');
  topLeft.id ='top-left-section';
  styles = [
    {id: 'width', value: '400px'},
    {id: 'height', value: '40px'},
    {id: 'margin-left', value: '50px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'}
  ];

  applyStyles(styles, topLeft);
  
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');
  button1.textContent = 'Language';
  button2.textContent = 'Sign up for Email';
  button3.textContent = 'Careers';
  
  
  styles = [
    {id: 'font-size', value: '13px'},
    {id: 'text-align', value: 'center'},
    {id: 'padding', value: '5px 10px'},
    {id: 'margin-right', value: '15px'},
    {id: 'border', value: 'none'},
    {id: 'background-color', value: 'white'}
  ]
  applyStyles(styles, button1);
  applyStyles(styles, button2);
  applyStyles(styles, button3);

  const downArrow = document.createElement('i');
  styles = [
    {id: 'border',value: 'solid #292929'},
    {id: 'border-width', value: '0 1px 1px 0'},
    {id: 'display', value: 'inline-block'},
    {id: 'padding', value: '0.8mm'}, 
    {id: 'margin-bottom', value: '2px'},
    {id: 'margin-left', value: '8px'},
    {id: 'transform', value: 'rotate(45deg)'},
    {id: '-webkit-transform', value: 'rotate(45deg)'}
  ];
  applyStyles(styles, downArrow);
  addChildElement(button1, downArrow);


  addChildElement(topLeft, button1);
  addChildElement(topLeft, button2);
  addChildElement(topLeft, button3);
  
  //Top Right section
  const topRight = document.createElement('div');
  topRight.id = 'top-right-section';

  styles = [
    {id: 'width', value: '400px'},
    {id: 'height', value: '40px'},
    {id: 'margin-left', value: '130px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'}
  ]
  applyStyles(styles, topRight);

  //search button
  const search = document.createElement('div');
  styles = [
    {id: 'position', value: 'relative'},
    {id: 'height', value: '25px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'padding', value: '2px 5px'},
    {id: 'margin-right', value: '20px'},
    {id: 'font-size', value: '14px'}
  ];
  applyStyles(styles, search);
  
  const searchIcon = document.createElement('img');
  searchIcon.src = 'Images/search-icon.png';
  applyStyles([{id: 'margin-right', value: '5px'}], searchIcon);
  addChildElement(search, searchIcon);
  
  const searchText = document.createElement('span');
  searchText.textContent = 'Search';
  applyStyles([{id: 'font-size', value: '14px'}], searchText);
  addChildElement(search, searchText);
  addChildElement(topRight, search);
  
  //Change your Location
  const location = document.createElement('div');
  const gpsIcon = document.createElement('img');
  const locationText = document.createElement('span');
  
  
  gpsIcon.src = 'Images/gps-icon.png';
  addChildElement(location, gpsIcon);
  locationText.textContent = 'Change your Location';
  applyStyles([{id: 'margin-left', value: '3px'}], locationText);
  addChildElement(location, locationText);

  //styling location
  styles = [
    {id: 'height', value: '25px'},
    {id: 'text-align', value: 'center'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'text-decoration', value: 'underline'},
    {id: 'padding', value: '2px 5px'},
    {id: 'margin-right', value: '20px'},
    {id: 'font-size', value: '13px'},
    {id: 'color', value: 'rgb(0, 107, 174)'}
  ];

  applyStyles(styles, location);
  addChildElement(topRight, location);

  //Order button
  const orderButton = document.createElement('div');
  orderButton.textContent = 'Order now';
  styles = [
    {id: 'width', value: '120px'},
    {id: 'height', value: '40px'},
    {id: 'background-color', value: 'rgb(255, 188, 13)'},
    {id: 'font-size', value: '15px'},
    {id: 'border', value: 'none'},
    {id: 'border-radius', value: '4px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'justify-content', value: 'center'}
  ];

  applyStyles(styles, orderButton);
  addChildElement(topRight, orderButton);
  addChildElement(navContainer, topLeft);
  addChildElement(navContainer, topRight); 

  const navbar = document.createElement('nav');
  const navElements = ['Our Menu', 'Download App', `MyMcDonald's Rewards`, 'Exclusive Deals', 'About Our Food', 'Locate', 'Gift Cards'];

  function createNavElements(navElements, navbar){
    for(element of navElements){
      const navElement = document.createElement('a');
      navElement.textContent = element;
      if(element === 'Our Menu'){
        const arrow = document.createElement('i');
        styles = [
          {id: 'border',value: 'solid #292929'},
          {id: 'border-width', value: '0 1px 1px 0'},
          {id: 'display', value: 'inline-block'},
          {id: 'padding', value: '0.8mm'}, 
          {id: 'margin-bottom', value: '2px'},
          {id: 'margin-left', value: '8px'},
          {id: 'transform', value: 'rotate(45deg)'},
          {id: '-webkit-transform', value: 'rotate(45deg)'},
          {id: 'border-color', value: 'black'}
        ];
        applyStyles(styles, arrow);
        addChildElement(navElement, arrow);
      }
      addChildElement(navbar, navElement);
    }
  }
  createNavElements(navElements, navbar);
  //adding styles for the nav elements inside the navbar
  for(element of navbar.children){
    applyStyles([{id: 'padding', value: '5px'}, {id: 'margin-right', value: '20px'}, {id: 'font-size', value: '15px'}], element);
  }  
  //Applying styles to the navbar itself
  styles = [
    {id: 'width', value: '880px'},
    {id: 'position', value: 'absolute'},
    {id: 'bottom', value: '30px'},
    {id: 'left', value: '530px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'}
  ]
  applyStyles(styles, navbar);
  addChildElement(navContainer, navbar);
  addChildElement(header, navContainer);
  document.body.appendChild(header);

  // Creating array to store elements I want a listener for. 
  const objectsToLisen = [location, search, orderButton, mcDonaldsLogo, button1, button2, button3, ...navbar.children];
  
  return objectsToLisen;
  
}

function designMainContent (){

  const mainContent = document.createElement('div');
  
  //Main Headline
  const h1 = document.createElement('h1');
  h1.textContent = 'Meet Our Food Experts';
  let styles = [
    {id: 'font-weight', value: 'bold'},
    {id: 'font-size', value: '54px'},
    {id: 'padding', value: '0px'},
    {id: 'margin', value: '0px'},
    {id: 'margin-bottom', value: '20px'}
  ];
  applyStyles(styles, h1);
  addChildElement(mainContent, h1);

  //Image
  const foodImage = document.createElement('img');
  foodImage.src = 'Images/food-image.jpg';
  addChildElement(mainContent, foodImage);

  //Description
  const desc = document.createElement('div');
  const descText = document.createElement('span');
  descText.textContent = 
  "Our food experts are more than just pros at their craft." + 
  "They are people who care about the food you eat and bring innovation into our kitchens";

  styles = [
    {id: 'font-size', value: '21px'},
    {id: 'width', value: '1170px'},
    {id: 'height', value: '100px'},
    {id: 'padding', value: '0px 12px'},
    {id: 'padding-top', value: '80px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'line-height', value: '22px'}
  ];
  applyStyles(styles, desc);
  addChildElement(desc, descText);
  addChildElement(mainContent, desc);
  
  //bottom part of mainContent
  const bottomContainer = document.createElement('div');
  //first card
  const card1  =document.createElement('div');
  const card2  =document.createElement('div');
  const card3  =document.createElement('div');
  
  const card1Text = document.createElement('span');
  card1Text.textContent = 'Everyday, culinary masters are cooking up new tastes in our kitchens.';
  const card2Text = document.createElement('span');
  card2Text.textContent = 'Get to know our Registered Dietitian Nutritionists who add a different type of value to your meal.';
  const card3Text = document.createElement('span');
  card3Text.textContent = 'Meet some of the people who provide the ingredients for your favorite menu items.';
  
  [card1Text, card2Text, card3Text].forEach(cardText =>{
    applyStyles([{id: 'font-size', value: '17px'},
                {id: 'margin-top', value: '20px'}], cardText);
  });

  const chefImage = document.createElement('img');
  chefImage.src = 'Images/chef.jpg';
  const dietImage = document.createElement('img');
  dietImage.src = 'Images/cynthia.jpg';
  const supplierImage = document.createElement('img');
  supplierImage.src = 'Images/supplierLetuce.jpg';

  const headline1 = document.createElement('h2');
  headline1.textContent = 'Our Chefs';
  const headline2 = document.createElement('h2');
  headline2.textContent = 'Our Chefs';
  const headline3 = document.createElement('h2');
  headline3.textContent = 'Our Chefs';

  [headline1, headline2, headline3].forEach(headline =>{
    applyStyles([{id: 'font-size', value: '32px'},
                {id: 'font-weight', value: '700'},
                {id: 'margin-top', value: '30px'},
                {id: 'margin-bottom', value: '0px'}], headline)
  });

  
  const button1 = document.createElement('button');
  button1.textContent = 'Meet Our Chefs';
  const button2 = document.createElement('button');
  button2.textContent = 'Meet Our Dietitians';
  const button3 = document.createElement('button');
  button3.textContent = 'See Supplier Stories';

  const buttons = [button1, button2, button3];
  styles = [
    {id: 'width', value: '140px'},
    {id: 'height', value: '50px'},
    {id: 'border', value: 'none'},
    {id: 'border-radius', value: '3px'},
    {id: 'background-color', value: 'rgb(255, 188, 13)'},
    {id: 'margin-top', value: '40px'},
    {id: 'font-size', value: '15px'}
  ];
  buttons.forEach(button =>{
    applyStyles(styles, button);
  });

  applyStyles([{id: 'width', value: '170px'}], button2);
  applyStyles([{id: 'width', value: '170px'}], button3);
  //Styling elements
  //styles for Bottom Container
  styles = [
    {id: 'height', value: '550px'},
    {id: 'width', value: '1170px'},
    {id: 'padding', value: '0px 12px'},
    {id: 'padding-bottom', value: '70px'},
    {id: 'padding-top', value: '50px'},
    {id: 'display', value: 'flex'},
    {id: 'flex-direction', value: 'row'},
    {id: 'column-gap', value: '20px'},
    {id: 'justify-content', value: 'center'},
    {id: 'align-items', value: 'center'}
  ];
  applyStyles(styles, bottomContainer);

  applyStyles([{id: 'width', value: '100%'}], chefImage);
  applyStyles([{id: 'width', value: '100%'}], dietImage);
  applyStyles([{id: 'width', value: '100%'}], supplierImage);
  

  
  
  //Styles for Card
  const cards = [card1, card2, card3];
  styles = [
    {id: 'width', value: '380px'},
    {id: 'height', value: '500px'},
    {id: 'display', value: 'flex'},
    {id: 'flex-direction', value: 'column'},
    {id: 'text-align', value: 'left'}
  ];

  cards.forEach(card =>{
    applyStyles(styles, card);
  })
  
  

  addChildElement(card1, chefImage);
  addChildElement(card1, headline1);
  addChildElement(card1, card1Text);
  addChildElement(card1, button1);

  addChildElement(card2, dietImage);
  addChildElement(card2, headline2);
  addChildElement(card2, card2Text);
  addChildElement(card2, button2);

  addChildElement(card3, supplierImage);
  addChildElement(card3, headline3);
  addChildElement(card3, card3Text);
  addChildElement(card3, button3);
  

  addChildElement(bottomContainer, card1);
  addChildElement(bottomContainer, card2);
  addChildElement(bottomContainer, card3);
  addChildElement(mainContent, bottomContainer);



  //Styling mainContent
  styles = [
    {id: 'padding-top', value: '100px'},
    {id: 'display', value: 'flex'},
    {id: 'flex-direction', value: 'column'},
    {id: 'align-items', value: 'center'}
  ];
  applyStyles(styles, mainContent);

addChildElement(document.body, mainContent);

  const objectsToLisen = [...buttons];
  return objectsToLisen;
}

function designFooter(){
  const objectsToLisen = [];
  const footer = document.createElement('footer');

  //The design functions should return array consisting of objects to implement hover on, second element should be the container for the section. 
  //Then we can add the section to the footer element itself.
  const footerCards = designFooterTop();
  const footerBottom = designFooterBottom();
  addChildElement(footer, footerCards[1]);

  //Two containers in the bottom part
  addChildElement(footer, footerBottom[1]);
  //addChildElement(footer, footerBottom[2]);

  //Styling footer element
  let styles = [
    {id: 'height', value: '700px'},
    {id: 'width', value: '1130px'},
    {id: 'margin', value: 'auto'},
    {id: 'padding', value: '30px'},
    {id: 'display', value: 'flex'},
    {id: 'flex-direction', value: 'column'},
    {id: 'padding-bottom', value: '100px'}
  ];
  applyStyles(styles, footer);
  addChildElement(document.body, footer);

  //First element of the returned array is the objects we want to have hover function on
  objectsToLisen.push(...footerCards[0]);
  //objectsToLisen.push(...footerBottom[0]);

  //Array is returned for the main loop to implement the eventListener
  return objectsToLisen;
}


//Help function to create footerCards and add them to the container. 
function footerCard(textArray, footerCardContainer, objectsToLisen){
  const footerCard = document.createElement('div');
  const fixedLinksArray1 = textArray.map((element, index) =>{
    if(index === 0) {
      const h2 = document.createElement('h2');
      h2.textContent = element;
      return h2;
    }
    else {
      const spanElement = document.createElement('span');
      spanElement.textContent = element;
      return spanElement;
    }
    
  });
  console.log(fixedLinksArray1);
  const headline1 =fixedLinksArray1.splice(0, 1)[0];

  // ---- styling -------
  //card
  let styles = [
    {id: 'height', value: '450px;'},
    {id: 'width', value: '300px'},
    {id: 'display', value: 'flex'},
    {id: 'flex-direction', value: 'column'},
    {id: 'row-gap', value: '15px'}
  ];
  applyStyles(styles, footerCard);
  //headline
  applyStyles([{id: 'font-size', value: '18px'}], headline1);

  //text elements
  fixedLinksArray1.forEach(element =>{
    applyStyles([{id: 'font-size', value: '16px'}], element);
    objectsToLisen.push(element);
  });

  addChildElement(footerCard, headline1);
  fixedLinksArray1.forEach(element =>{
    addChildElement(footerCard, element);
  });
  addChildElement(footerCardContainer, footerCard);
  return objectsToLisen;
}
function designFooterTop (){
  const objectsToLisen = [];

  const footerCardContainer = document.createElement('div');
  

  const text1='About Us,About Us Overview,Leadership Team,Values In Action,Franchise Info,Recalls & Alerts,Real Estate,Accessibility,Investor Relations,News & Notifications';
  const textArray1 = text1.split(',');
  const text2 = `Services,Services Overview,Wi-Fi,PlayPlaces & Parties,McDelivery®,Mobile Order & Pay,Trending Now,McDonald’s Merchandise,Family Fun Hub,MyMcDonald's Rewards,McCafé®`
  const textArray2 = text2.split(',');
  const text3 = `Community,Community Overview,Meet the 1 in 8,HACER® Scholarships for Hispanic Students,Ronald McDonald House Charities,McDonald’s Asian Pacific American,McDonald’s International,`
                + `Black and Positively Golden,McDonald’s LGBTQ+`;
  const textArray3 = text3.split(',');
  const text4 = 'Contact Us,Contact Us Overview,Gift Card FAQs,Donations,Employment,Customer Feedback,Frequently Asked Questions';
  const textArray4 = text4.split(',');
  

  const arraysOfText = [textArray1, textArray2, textArray3, textArray4];

  //For every array we create a card. Returned from footerCard is the objects in the card that we should implement hover functionality on. These are pushed into our collection.
  //Each array consists of the text to be put into text elements on each card
  arraysOfText.forEach(textArray => {
    objectsToLisen.push(...footerCard(textArray, footerCardContainer, objectsToLisen));
  });
  
  // ---- Styling footerCardContainer
  let styles = [
    {id: 'display', value: 'flex'},
    {id: 'column-gap', value: '80px'},
    {id: 'justify-content', value: 'center'},
    {id: 'padding-bottom', value: '80px'}
  ];
  applyStyles(styles, footerCardContainer);
  
  return [objectsToLisen, footerCardContainer];
}
function designFooterBottom(){
  const objectsToLisen = [];


  //First section
  const buttonsIconsContainer = document.createElement('div');
  //styling Container
  let styles = [
    {id: 'height', value: '100px'},
    {id: 'width', value: '100%'},
    {id: 'display', value: 'flex'},
    {id: 'position', value: 'relative'},
    {id: 'border-bottom', value: '1px solid rgb(200, 200, 200)'}    
    //{id: 'padding-bottom', value: '0px'}
  ];
  applyStyles(styles, buttonsIconsContainer);
  const iconsContainer = document.createElement('div');
  const icons = ["Images/facebook.png", 'Images/twitter.png', 'Images/youtube.png', 'Images/instagram.png', 'Images/tumblr.png', 'Images/spotify.png'];

  //Creating and styling the icons. Finishing with adding them to container
  icons.forEach(element =>{
    const icon = document.createElement('img');
    icon.src = element;
    
    applyStyles([{id: 'height', value: '32px'},
                {id: 'width', value: '32px'},
                {id: 'margin-right', value: '16px'}], icon);
    addChildElement(iconsContainer, icon);
                
  });

  

  //Styling the iconsContainer
  applyStyles([{id: 'width', value: '300px'}, {id: 'display', value: 'flex'}], iconsContainer);
  addChildElement(buttonsIconsContainer, iconsContainer);

  const buttonContainer = document.createElement('div');
  //Styling the buttonContainer
  styles = [
    {id: 'width', value: '400px'},
    {id: 'height', value: '50px'},
    {id: 'position', value: 'absolute'},
    {id: 'right', value: '0'},
    {id: 'display', value: 'flex'},
    {id: 'column-gap', value: '30px'}
  ];
  applyStyles(styles, buttonContainer);
  //styling for each image/button
  styles = [
    {id: 'width', value: '150px'},
    {id: 'height', value: '36x'},
    {id: 'border-radius', value: '6px'},
    {id: 'padding', value: '2px'},
    {id: 'background-color', value: 'black'}
  ];

  ['Images/appstore.png', 'Images/googleplay.png'].forEach(element =>{
    const image = document.createElement('img');
    image.src = element;
    applyStyles(styles, image);
    addChildElement(buttonContainer, image);
    

  });
  
  addChildElement(buttonsIconsContainer, buttonContainer);
  //Bottom Section
  const footerBottom = document.createElement('div');
  
  return [objectsToLisen, buttonsIconsContainer, footerBottom];
}
//Defining array of objects to implement Eventlistener for hover functionality
//The design functions should return array of objects that should have a hover function
//Will add elements into this array from each section of the page.

applyStyles([{id: 'padding-bottom', value: '50px'},
            {id: 'padding', value: '0px'},
            {id: 'color', value: 'rgb(41, 41, 41)'}],document.body);
 const hoverObjects = designHeader();
 
 hoverObjects.push(...designMainContent());
 hoverObjects.push(...designFooter());
 
 

//Adding Eventlisteners to implement hover functionality

  for(element of hoverObjects){
    element.addEventListener (
      'mouseover', (event)=> {
        event.target.style.cursor = 'pointer';
      });
    }

  

  

  
    
  







