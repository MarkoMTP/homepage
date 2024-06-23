const container = document.querySelector('.container')


//header
const divHeader = document.createElement('div');
const imgHeader = document.createElement('img')
imgHeader.src = '../images/photo-1920.jpg';
imgHeader.srcset = '../images/480.jpg 480w, ../images/1024.jpg 1024w, ../images/1920.jpg 1920w';
imgHeader.sizes = '(max-width: 480px) 480px, (max-width: 1024px) 1024px, 1920px';
imgHeader.alt = 'Description of the photo';
divHeader.appendChild(imgHeader)
const descriptionHeader = document.createElement('div')
const h1Header = document.createElement('h1Header')
h1Header.textContent = 'Lorem ipsum jdiwjowkowofjwojfjjjjjjjjjjjjjjjjjjjjjjjjj'
descriptionHeader.appendChild(h1Header)
divHeader.appendChild(descriptionHeader)


container.appendChild(divHeader)