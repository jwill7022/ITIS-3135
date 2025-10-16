"use strict";

const MAX_LENGTH = 200;

const authors = ['Tyrone', 'Ava', 'Elijah', 'Lucas', 'Ebony', 'Keisha', 'Jemila', 'Daniel'];

const articles = [
  {
    title: 'CSS Selectors',
    author: 'Tyrone',
    date: new Date(2023, 1, 20),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'
  },

  {
    title: 'Cascading',
    author: 'Jemila',
    date: new Date(2023, 2, 1),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum iste? Nisi exercitationem, consectetur unde ab placeat nemo deserunt consequuntur.'
  },

  {
    title: 'CSS Grid',
    author: 'Keisha',
    date: new Date(2023, 2, 12),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam aliquam debitis dolores dolorem corporis ipsum itaque culpa, et eaque? Aliquam, est eveniet voluptatem nemo doloremque esse odit dolorum dicta consectetur ipsam corrupti perspiciatis voluptas cupiditate et sapiente. Eligendi modi fugiat pariatur facere, molestiae nihil accusamus animi a impedit laboriosam tempora, eum in iure tenetur fugit praesentium consectetur mollitia ut obcaecati delectus ipsa dolores commodi? Rerum, temporibus velit eum iste praesentium modi amet molestiae illum enim quos pariatur quasi vero quidem, minus placeat assumenda recusandae fugit sunt voluptatem est neque qui! Ut optio quis accusamus placeat ipsa laboriosam laborum debitis.'
  }
];

articles.forEach(article=>{
  addEntry(article);
});


/**
 * This function creates a DOM elment with information from the article object, and adds the element into the DOM.
 * @param {object} article - an article
 */
function addEntry(article) {
  
    //create a new article
    const newEntry = document.createElement('article');
    newEntry.setAttribute('class', 'article-container');

    
    //Add new article to list of articles
    const articlesWrapper = document.querySelector('.articles-wrapper');
    articlesWrapper.appendChild(newEntry);
    
    //Delete Button
    const button = document.createElement('button');
    button.textContent = '✕';
    button.setAttribute('class', 'delete-btn');
    newEntry.appendChild(button);

  //Header
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'article-header');
    newEntry.appendChild(headerDiv);

    //Creating the new header image 
    const headerImg = document.createElement('img');
    headerImg.setAttribute('class', 'avatar');
    
    var avatarSrc = "./images/default.jpeg";
    if(authors.includes(article.author)){ //checking if the authors array has the articles author name
      avatarSrc = "./images/avatar" + authors.indexOf(article.author) + ".png";
    }
    headerImg.setAttribute('src', avatarSrc);
    headerImg.setAttribute('alt', 'avatar picture');
    headerDiv.appendChild(headerImg);

    //Creating the author/date div
    const headerAuthDate = document.createElement('div');
    headerAuthDate.innerText = article.author + " · " + article.date.toDateString();
    headerDiv.appendChild(headerAuthDate);
    
  //Body
    const body = document.createElement('div');
    body.setAttribute('class', 'article-body');
    newEntry.appendChild(body);

    //title creation
    const title = document.createElement('h3');
    title.textContent = article.title;
    body.appendChild(title);

    //paragraph creation
    const content = document.createElement('p');
    if (article.content.length <= MAX_LENGTH){
      content.textContent = article.content;
      body.appendChild(content);
    } else {
      //unhidden text and elipse
      content.textContent = article.content.slice(0, MAX_LENGTH);
      body.append(content);
      const elipse = document.createElement('span');
      elipse.textContent = '...';
      content.append(elipse);

      //hidden text
      const hiddenText = document.createElement('span');
      hiddenText.setAttribute('class', 'hidden');
      hiddenText.textContent = article.content.slice(MAX_LENGTH + 1, article.content.length);
      content.append(hiddenText);
      
      //read more button
      const readBtn = document.createElement('button');
      readBtn.textContent = "Read More";
      readBtn.setAttribute('class', 'btn');
      body.append(readBtn);
    }
}

const submitBtn = document.querySelector('.accent-btn');
const form = document.querySelector('form');


form.addEventListener('submit', e => {
  e.preventDefault();
  const title = form.querySelector('#title').value;
  const author = form.querySelector('#author').value;
  const content = form.querySelector('#content').value;
  if (form.reportValidity()){
    const date = new Date();
    const article = {title, author, date, content};
    articles.push(article);
    addEntry(article);
    form.reset();
  }
});

const wrapper = document.querySelector('.articles-wrapper');
wrapper.addEventListener('click', e => {
  const deleteBtn = e.target.closest('.delete-btn');
  if (deleteBtn){
    const parent = deleteBtn.closest('.article-container');
    if(parent){
      const body = deleteBtn.nextElementSibling.nextElementSibling;
      const title = body.firstElementChild.innerText;
      const articleIndex = articles.findIndex(articles => articles.title === title); 
      articles.splice(articleIndex, 1);
      parent.remove();
    }
  }
});

const readMore = document.querySelector('.articles-wrapper');
readMore.addEventListener('click', e => {
  console.log(e);
  const paragraph = e.target.previousElementSibling;
    if(paragraph){
      const spans = paragraph.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('hidden'));
    }
    if(e.target.innerText === 'Read More'){
      e.target.innerText = 'Read Less';
    } else {
      e.target.innerText = 'Read More';
    }
});
