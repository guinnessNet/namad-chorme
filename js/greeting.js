const loginForm =document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const greetingList = [
  'Nice to Meet You again.',
  'Have a Nice Day.',
  'I Wish You Have Great Day.'
]

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings(username)
}

function paintGreetings(username){
  const selectedGreeting = greetingList[Math.floor(Math.random() * greetingList.length)]
  greeting.innerText = `${selectedGreeting} ${username}!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit',onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
