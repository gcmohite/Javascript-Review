'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.getElementById('section--1');
const navLinks = document.querySelectorAll('.nav__link');
const navBar = document.querySelector('.nav');
const navList = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const dotsContainer = document.querySelector('.dots');

//  section section--hidden

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SMOOTH SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to');

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e);

  const sec1Coords = section1.getBoundingClientRect();
  console.log(sec1Coords);
  console.log(window.scrollY);
  // console.log(this.getBoundingClientRect());
  // console.log(sec1Coords.top);

  // console.log(`Current scroll (X/Y): ${window.scrollX} ${window.scrollY}`);

  // console.log(
  //   `Viewport height/width: ${document.documentElement.clientHeight}, ${document.documentElement.clientWidth}`
  // );

  /*
  // Scrolling (using scrollTo)
  window.scrollTo({
    top: sec1Coords.top + window.scrollY,
    left: sec1Coords.left + window.scrollX,
    behavior: 'smooth',
  });
  */

  // Scrolling (using scrollBy)
  // window.scrollBy({
  //   top: sec1Coords.top,
  //   left: sec1Coords.left,
  //   behavior: 'smooth',
  // });

  sec1.scrollIntoView({ behavior: 'smooth' });
});

// PAGE NAVIGATION (using event delegation)

// we are adding an event handler on each of the nav links, which is not efficient
// navLinks.forEach((link, i) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const anchor = this.getAttribute('href');
//     const scrollToElement = document.querySelector(anchor);
//     scrollToElement.scrollIntoView({ behavior: 'smooth' });
//     // console.log(anchor);
//     // console.log(scrollToElement);
//   });
// });

// instead of doing the above, we can use event delegation and attach the handler on the common parent element of the links
navList.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    console.log(`LINK`);
    const anchor = e.target.getAttribute('href');
    const scrollToElement = document.querySelector(anchor);
    scrollToElement && scrollToElement.scrollIntoView({ behavior: 'smooth' });
  }
});

// TABBED COMPONENT
const tabContainer = document.querySelector('.operations__tab-container');
const allTabs = tabContainer.querySelectorAll('.operations__tab');
const allTabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');
  if (clickedTab) {
    const tabNumber = clickedTab.dataset.tab;
    allTabs.forEach(tab => {
      if (tab === clickedTab) {
        tab.classList.add('operations__tab--active');
      } else {
        tab.classList.remove('operations__tab--active');
      }
    });
    allTabsContent.forEach(content => {
      if (content.classList.contains(`operations__content--${tabNumber}`)) {
        content.classList.add('operations__content--active');
      } else {
        content.classList.remove('operations__content--active');
      }
    });
  }
});

// MENU FADE ANIMATION
const menuFade = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const hoveredLink = e.target;
    // prettier-ignore
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('#logo');
    // console.log(siblings);
    // console.log(hoveredLink);
    // console.log(logo);

    siblings.forEach(el => {
      if (el !== e.target) {
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};
navBar.addEventListener('mouseover', menuFade.bind(0.4));
navBar.addEventListener('mouseout', menuFade.bind(1));

// STICKY NAVBAR
// window.addEventListener('scroll', function (e) {
//   const sec1Coords = section1.getBoundingClientRect();
//   // console.log(window.scrollY);
//   // console.log(sec1Coords.top);
//   if (window.scrollY > sec1Coords.top) {
//     navBar.classList.add('sticky');
//   } else {
//     navBar.classList.remove('sticky');
//   }
// });

// section1.style.backgroundColor = 'teal';
const section2 = document.querySelector('#section--2');

// STICKY NAVIGATION USING INTERSECTION OBSERVER API
function makeNavStick(entries, observer) {
  // console.log(entries);
  const [entry] = entries;
  !entry.isIntersecting
    ? navBar.classList.add('sticky')
    : navBar.classList.remove('sticky');
}

// const { height: navbarHeight } = navBar.getBoundingClientRect();
const { height: navbarHeight } = getComputedStyle(navBar);
const optionsForHeader = {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight} 0px 0px 0px`,
};

const headerObserver = new IntersectionObserver(makeNavStick, optionsForHeader);
headerObserver.observe(header);

// REVEAL SECTIONS ON SCROLL
function revealSection(entries, observer) {
  const [entry] = entries;
  // console.log(entry.target);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
}

const sectionOptions = {
  root: null,
  rootMargin: `0px 0px -200px 0px`,
  threshold: 0.05,
};

const sectionObserver = new IntersectionObserver(revealSection, sectionOptions);

allSections.forEach(section => {
  sectionObserver.observe(section);
  // instead of applying the class in HTML
  section.classList.add('section--hidden');
});

// LAZY LOADING IMAGES

const lazyImages = document.querySelectorAll('img[data-src]');

function lazyLoadImage(entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  const image = entry.target;

  if (entry.isIntersecting) {
    // console.log(entry.target);
    // console.log(entry.isIntersecting, entry.intersectionRatio);
    image.src = image.dataset.src;
    image.addEventListener('load', () => {
      image.classList.remove('lazy-img');
      observer.unobserve(image);
    });
  }
}

const lazyImgOptions = {
  root: null,
  threshold: 0,
  rootMargin: `150px 0px`, // load images a little before they enter viewport
};

const lazyImagesObserver = new IntersectionObserver(
  lazyLoadImage,
  lazyImgOptions
);

lazyImages.forEach(img => {
  lazyImagesObserver.observe(img);
});

// SLIDER COMPONENT
function slider() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const numOfSlides = slides.length - 1;
  let curSlide = 0;
  createDots();
  goToSlide(0);

  // const slider = document.querySelector('.slider'); // remove later
  // slider.style.scale = 0.5; // remove later
  // slider.style.overflow = 'visible'; // remove later
  // slider.style.padding = '2rem 0'; // remove later
  // slider.style.borderTop = `8px solid red`; // remove later

  function createDots() {
    slides.forEach((s, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dots__dot');
      dot.setAttribute('data-slide', `${i}`);
      dotsContainer.insertAdjacentElement('beforeend', dot);
    });
  }

  function activateDot(slide) {
    const dots = document.querySelectorAll('.dots__dot');
    dots.forEach(d => {
      d.classList.remove('dots__dot--active');
      if (Number(d.dataset.slide) === slide)
        d.classList.add('dots__dot--active');
    });
  }

  function goToSlide(slide) {
    slides.forEach((sld, i) => {
      sld.style.transform = `translateX(${(i - slide) * 100}%)`;
      activateDot(slide);
    });
  }

  function nextSlide() {
    curSlide === numOfSlides ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
  }

  function prevSlide() {
    curSlide === 0 ? (curSlide = numOfSlides) : curSlide--;
    goToSlide(curSlide);
  }

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
    else return;
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log(e.target);
      goToSlide(Number(e.target.dataset.slide));
    }
  });
}
slider();

////////////////////////////////////////////////////////////////////////

// SELECTING, CREATING AND DELETING ELEMENTS
const theDocument = document.documentElement;
const head = document.head;
const body = document.body;

const header1 = document.querySelector('.header');
// console.log(header1);

const allSections2 = document.querySelectorAll('.section');
// console.log(allSections2);

const sec1 = document.getElementById('section--1');
// console.log(sec1);

const allBtns = document.getElementsByClassName('btn');
// console.log(allBtns);

// CREATING AND INSERTING ELEMENTS

const h1 = document.querySelector('h1');
const p = document.createElement('p');
p.textContent = 'Hello';

const htmlStr = `<p>Hello</p>`;

// h1.insertAdjacentHTML('afterbegin', htmlStr);
// h1.insertAdjacentElement('afterbegin', p);
// h1.insertAdjacentText('afterbegin', 'Hello');

const message = document.createElement('div');
message.classList.add('cookie-message');

// prepend and append
message.innerHTML = `We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);

const msgHTMLStr = `<div class="cookie-message">We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button></div>`;
// header.insertAdjacentHTML('afterbegin', msgHTMLStr);

message.innerHTML = `We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.append(message);

// header.before(message);

// const cookieCloseBtn = document.querySelector('.btn--close-cookie');
// cookieCloseBtn.addEventListener('click', () => {
//   // message.remove();
//   body.removeChild(message);
// });

// Setting/reading styles
// console.log(message);
message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(message.style.height); // nothing
// console.log(message.style.color); // nothing

const messageStyles = getComputedStyle(message);
// console.log(messageStyles);
// console.log(messageStyles.height); // 43px
// console.log(messageStyles.color); // rgb(187, 187, 187)
// console.log(messageStyles.height);
message.style.height = `${parseFloat(messageStyles.height) + 40}px`;
// console.log(messageStyles.height);

// Setting custom properties
const rootElement = document.documentElement;
const rootStyles = getComputedStyle(rootElement);
// console.log(rootStyles);

// rootElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.getElementById('logo');
// console.log(logo);
// console.log(logo.src); // "http://127.0.0.1:5500/img/logo.png" (absolute)
// console.log(logo.alt); // "Bankist logo"
// console.log(logo.id); // "logo"
// console.log(logo.className); // "nav__logo"

// // non-standard attributes
// console.log(logo.getAttribute('src')); // "img/logo.png" (relative)

// logo.setAttribute('data-designer', 'Gautam');
// logo.setAttribute('class', 'hello');
// console.log(logo.className); // "nav__logo"
// console.log(logo.dataset.versionNumber);
// console.log(logo.getAttribute('data-version-number'));
// console.log(logo.getAttribute('id'));
// console.log(logo.getAttribute('class'));
// // Classes
// logo.classList.add('g', 'm');
// // logo.classList.remove('g', 'm');
// // logo.classList.toggle('g');
// logo.classList.contains('g');

// console.log(logo.classList);

// dont use this
// logo.className = 'gautam'

// const classArray = Array.from(logo.classList);
// console.log(classArray);

// EVENTS AND EVENT HANDLERS
// const highlights = document.querySelectorAll('.highlight');
// function changeColor(e) {
//   console.log(highlights);
//   highlights.forEach(h => {
//     h.style.color = 'orangered';
//   });
// }

// h1.addEventListener('mouseenter', changeColor);

// setTimeout(() => {
//   highlights.forEach(h => {
//     h.style.color = '#444';
//   });
//   h1.removeEventListener('mouseenter', changeColor);
// }, 5000);

// EVENT PROPOGATION

const randomInt = function (num1, num2) {
  let min, max;
  // prettier-ignore
  if(!num2) {min =0; max = num1}
  else {min = num1; max = num2}

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColor = () =>
  `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`;

const changeBackColor = function (e) {
  e.preventDefault();
  // console.log(e); // the event object
  console.log(e.target); // where i actually clicked
  // console.log(this); // the element on which handler is attached
  // console.log(e.currentTarget); // same as 'this'
  // console.log(this === e.currentTarget); // true
  this.style.backgroundColor = randomColor();

  // stop event propogation (stop bubbling) -- not a good idea generally but needed sometimes
  // e.stopPropagation();
};

// const navBar2 = document.querySelector('.nav');
// const navList2 = document.querySelector('.nav__links');
// const navLink2 = document.querySelector('.nav__link');
// const navLinks2 = document.querySelectorAll('.nav__link');

// navLink2.addEventListener('click', changeBackColor);
// navList2.addEventListener('click', changeBackColor);
// navBar2.addEventListener('click', changeBackColor, true);

// navLinks2.forEach((link, i) => {
//   // dont add the handler on the open account button
//   if (i !== navLinks2.length - 1)
//     link.addEventListener('click', changeBackColor);
// });

////////////////////////////////////////////

// DOM TRAVERSING

// Selecting any child elements
// console.log(h1.querySelector('.highlight')); // first element to match
// console.log(h1.querySelectorAll('.highlight')); // Nodelist

// Selecting direct child nodes
// console.log(h1.childNodes);

// Selecting direct child elements only
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'orangered';

// Selecting parent node

// direct parent node
// console.log(h1.parentNode);

// direct parent element
// console.log(document.querySelector('.highlight').parentNode);

// closest() method - to select any parent element no matter how many levels up
// console.log(document.querySelector('.btn--scroll-to').closest('div'));
// h1.closest('header').style.background = 'var(--gradient-secondary)';
// console.log(h1.closest('h1'));

// Selecting sibling elements/nodes
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log([...h1.parentElement.children]);

// const siblings = [...h1.parentElement.children];
// siblings.forEach(el => {
//   if (el === document.querySelector('button')) console.log(el);
//   console.log(el);
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// console.log(document.getElementsByTagName('h1'));

// INTERSECTION OBSERVER API

function obsCallback(entries, observer) {
  console.log(entries);
  // console.log(observer);
}

const options = {
  root: null,
  // rootMargin: `-100px 0px 0px 0px`,
  rootMargin: `0px 0px 0px 0px`,
  // threshold: 0.1,
  threshold: [0, 0.1, 0.5],
};

const obs = new IntersectionObserver(obsCallback, options);
// obs.observe(section1);

const operations = document.querySelector('.operations');
// obs.observe(operations);

// LIFECYCLE DOM EVENTS
// document.addEventListener('DOMContentLoaded', e => {
//   console.log(`HTML parsed`);
//   console.log(e);
// });

// window.addEventListener('load', e => {
//   console.log(`Page loaded`);
//   console.log(e);
// });

// window.addEventListener('beforeunload', (e) => {
//   // alert(`sure?`);
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
//   // alert(`Do you want to leave?`);
//   // console.log(`Leaving page`);
// });
