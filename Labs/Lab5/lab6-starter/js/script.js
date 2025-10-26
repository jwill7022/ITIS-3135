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
    button.textContent = 'x';
    button.setAttribute('class', 'delete-btn');
    newEntry.appendChild(button);

  //Header
  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('class', 'article-header');
  
  const avatar = document.createElement('img');
  avatar.setAttribute('class', 'avatar');

  const authorIndex = authors.indexOf(article.author);
  if(authorIndex != -1){
    avatar.setAttribute('src', `images/avatar${authorIndex}.png`);
  }
  else{
    avatar.setAttribute('src', 'images/default.jpeg');
  }

  avatar.setAttribute('alt', 'avatar picture');

  const authorDateDiv = document.createElement('div');
  authorDateDiv.setAttribute('class', 'author-date');
  authorDateDiv.textContent = `${article.author} · ${article.date.toDateString()}`;

  headerDiv.appendChild(avatar);
  headerDiv.appendChild(authorDateDiv);
  newEntry.appendChild(headerDiv);

  //Body
  const body = document.createElement('div');
  body.setAttribute('class', 'article-body');
  const title = document.createElement('h3');
  title.textContent = article.title;
  const content = document.createElement('p');

  if(article.content.length < MAX_LENGTH){
    body.appendChild(title);
    content.textContent = article.content.substring(0, MAX_LENGTH);
    body.appendChild(content);
  }
  else{
    body.appendChild(title);
    splitContent(article, body, content);
  }

  
  newEntry.appendChild(body);

}

    //content split into two paragraphs if max length exceeded
function splitContent(article, body, content){
  content.textContent = article.content.slice(0, MAX_LENGTH);
  body.append(content);
  const elipse = document.createElement('span');
  elipse.textContent = '...';
  content.append(elipse);
  const hiddenText = document.createElement('span');
  hiddenText.setAttribute('class', 'hidden');
  hiddenText.textContent = article.content.slice(MAX_LENGTH + 1, article.content.length);
  content.append(hiddenText);
  const readBtn = document.createElement('button');
  readBtn.textContent = "Read More";
  readBtn.setAttribute('class', 'btn');
  body.append(readBtn);
}

// adding event listener to respond to form submission
const form = document.querySelector('form');

form.addEventListener('submit', function(event){

  if(form.reportValidity()){
    preventDefault();
    const title = document.getElementById('title').value = '';
    const author = document.getElementById('author').value = '';
    const content = form.querySelector('#content').value = '';
    const date = new Date();
    articles.push({title, author, date, content});
    addEntry(article);
    form.reset();
  }
});


