/*
 * Add your JavaScript to this file to complete the assignment.
 */
var twitButton = document.getElementById('create-twit-button');
var modalBackground = document.getElementById('modal-backdrop');
var createTwitModal = document.getElementById('create-twit-modal');
var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];
var closeButton = document.getElementsByClassName('modal-close-button')[0];
var createTwitButton = document.getElementsByClassName('modal-accept-button')[0];
var twitContainer = document.getElementsByClassName('twit-container')[0];
var textInput = document.getElementById('twit-text-input');
var authorInput = document.getElementById('twit-attribution-input');
var searchInput = document.getElementById('navbar-search-input');
var twits = document.getElementsByClassName('twit');

clearTwitModal();
var text = textInput.value;
var author = textInput.value;

var twitArray = [];
updateTwitArray();
function updateTwitArray(){
  twitArray.length = 0;
  for(var i = 0; i < twits.length; i++){
    twitArray.push(twits[i]);
  }
}

function toggleTwitModal(){
  modalBackground.classList.toggle('hidden');
  createTwitModal.classList.toggle('hidden');
}

function clearTwitModal(){
  textInput.value = "";
  authorInput.value = "";
}

twitButton.addEventListener('click', toggleTwitModal);

function cancelTwit(event){
  toggleTwitModal();
  clearTwitModal();
}

cancelButton.addEventListener('click', cancelTwit);
closeButton.addEventListener('click', cancelTwit);

function newTwit(text, author){
  var bullhorn = document.createElement('i');
  bullhorn.classList.add('fas', 'fa-bullhorn');
  var icon = document.createElement('div');
  icon.classList.add('twit-icon');
  icon.appendChild(bullhorn);

  var twitText = document.createElement('p');
  twitText.classList.add('twit-text');
  twitText.textContent = text;
  var authorLink = document.createElement('a');
  authorLink.textContent = author;
  authorLink.href = '#';
  var twitAuthor = document.createElement('p');
  twitAuthor.classList.add('twit-author');
  twitAuthor.appendChild(authorLink);
  var twitContent = document.createElement('div');
  twitContent.classList.add('twit-content');
  twitContent.appendChild(twitText);
  twitContent.appendChild(twitAuthor);

  var twit = document.createElement('article');
  twit.classList.add('twit');
  twit.appendChild(icon);
  twit.appendChild(twitContent);

  twitContainer.appendChild(twit);

  updateTwitArray();
}

textInput.addEventListener('change', function(){
  text = textInput.value;
});

authorInput.addEventListener('change', function(){
  author = authorInput.value;
});

function createNewTwit(){
  if(text.length <= 0 && author.length <= 0){
    alert('You do not have anything');
  }else if(text.length <= 0){
    alert('You do not have any text');
  }else if(author.length <= 0){
    alert('You do not have an author');
  }else{
    newTwit(text, author);
    toggleTwitModal();
    clearTwitModal();
  }
}

createTwitButton.addEventListener('click', createNewTwit);

function search(){
  for(var i = twits.length - 1; i >= 0; i--){
    twitContainer.removeChild(twits[i]);
  }
  for(var i = 0; i < twitArray.length; i++){
    twitContainer.appendChild(twitArray[i]);
  }
  var query = searchInput.value.toLowerCase();
  for(var i = twits.length - 1; i >=0; i--){
    if(!twits[i].textContent.toLowerCase().includes(query)){
      twitContainer.removeChild(twits[i]);
    }
  }
}

searchInput.addEventListener('input', search);
