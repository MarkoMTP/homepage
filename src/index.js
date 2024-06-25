import "./style.css"
import linkedinSVg from '../images/linkedin.svg'

const container = document.querySelector('.container')

//header
const divHeader = document.createElement('div');
divHeader.classList.add('divHeader')
const picture = document.createElement('picture')
picture.classList.add('picture')
       

const sourceSmall = document.createElement('source');
sourceSmall.setAttribute('media', '(max-width: 400px)');
sourceSmall.setAttribute('srcset', '../images/small.jpg');


        const sourceLarge = document.createElement('source');
        sourceLarge.setAttribute('media', '(min-width: 401px)');
        sourceLarge.setAttribute('srcset', '../images/big.jpg');

 
        const img = document.createElement('img');
        img.setAttribute('src', '../images/big.jpg');
        img.setAttribute('alt', 'Description of the photo');

        picture.appendChild(sourceSmall);

        picture.appendChild(sourceLarge);
        picture.appendChild(img);



divHeader.appendChild(picture)
const descriptionHeader = document.createElement('div')
descriptionHeader.classList.add('descriptionHeader')
const h1Header = document.createElement('h1Header')
h1Header.textContent = 'Designers use lorem ipsum to fill spaces where they want to place content when creating mockups or draft copies of a final design. Lorem ipsum allows designers to work on a design without waiting for writers to create the actual content. Often, if designers place the actual content in a layout before completing the design, the content might distract the designer or client and draw focus away from the visual elements of the project.'
descriptionHeader.appendChild(h1Header)
divHeader.appendChild(descriptionHeader)


container.appendChild(divHeader)


// my work section


// Create the container for the cards
const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

const containerWork = document.createElement('div');
containerWork.classList.add('containerWork');
const createCard = (projectName) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const cardDiv1 = document.createElement('div');
        cardDiv1.style.backgroundColor = getRandomColor()
        const cardDiv2 = document.createElement('div');
        
        const cardH1 = document.createElement('h1');
        cardH1.textContent = projectName;
        
        cardDiv1.appendChild(cardH1);
        
        const cardP = document.createElement('p');
        cardP.textContent = 'Project Picture';
        
        cardDiv2.appendChild(cardP);
        
        card.appendChild(cardDiv1);
        card.appendChild(cardDiv2);
        
        return card;
    }
    
    // Create six cards with the same content
    for (let i = 0; i < 6; i++) {
        const card = createCard('Project Name');
        containerWork.appendChild(card);
    }

    container.appendChild(containerWork);


// contact me area
const contactContainer = document.createElement('div');
contactContainer.classList.add('contactContainer');

// Create the info div
const infoDiv = document.createElement('div');
infoDiv.classList.add("descriptionContact");


const headerC = document.createElement('h1')
headerC.textContent = 'Contact me!'
infoDiv.appendChild(headerC)
// Add email, number, random street, and a message of greetings to infoDiv
const email = document.createElement('p');
email.textContent = 'Email: example@example.com';
infoDiv.appendChild(email);

const phoneNumber = document.createElement('p');
phoneNumber.textContent = 'Phone: 123-456-7890';
infoDiv.appendChild(phoneNumber);

const address = document.createElement('p');
address.textContent = 'Address: 123 Random Street';
infoDiv.appendChild(address);

const greetingMessage = document.createElement('p');
greetingMessage.textContent = 'Greetings!';
infoDiv.appendChild(greetingMessage);

// Create the picture element
const pictureContact = document.createElement('picture');
pictureContact.classList.add('picture3');

const sourceSmall2 = document.createElement('source');
sourceSmall2.setAttribute('media', '(max-width: 400px)');
sourceSmall2.setAttribute('srcset', '../images/small.jpg');

const sourceLarge2 = document.createElement('source');
sourceLarge2.setAttribute('media', '(min-width: 401px)');
sourceLarge2.setAttribute('srcset', '../images/big.jpg');

const img2 = document.createElement('img');
img2.setAttribute('src', '../images/big.jpg');
img2.setAttribute('alt', 'Description of the photo');

pictureContact.appendChild(sourceSmall2);
pictureContact.appendChild(sourceLarge2);
pictureContact.appendChild(img2);

// Append infoDiv and pictureContact to contactContainer
contactContainer.appendChild(infoDiv);
contactContainer.appendChild(pictureContact);


//svg
const svgImg = document.createElement('img');
svgImg.classList.add('svgImg')
svgImg.setAttribute('src', linkedinSVg);
infoDiv.appendChild(svgImg);


// Append contactContainer to the main container
container.appendChild(contactContainer);
