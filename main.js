var EnglishButton =  document.getElementById('EnglishButton');
var FrenchButton = document.getElementById('FrenchButton');
var EnglishSect = document.getElementById('English');
var FrenchSect = document.getElementById('French');
var bru =  document.getElementById('txtSourceUserOne');
var English = [
  "Hello.",
  "How is your day going?",
  "I hope it is going well.",
  "I know it is late where you are but I wanted to contact you to remind you about our meeting in September there will be an interpreter"
];
var French = [
  "Bonjour",
  "Comment se passe ta journee?",
  "Jespere que ca va bien.",
  "Je sais quil est tard ou vous etes mais je voulais vous contacter pour vous rappeler de notre reunion en septembre il y aura un interprete."
];

function format(msg) {
  return `<br><div class="bg-primary w-50 card text-white text-left">
  <div class="card-body">${msg}</div>
  </div>`;
}

var it =0;
EnglishButton.onclick = () =>{
EnglishSect.innerHTML += format(English[it]);
FrenchSect.innerHTML += format(French[it]);
bru.value = "";
it++;
};



function popUser(user, usermsgs) {
  for (var i = 0; i < usermsgs.length; i++) {
    user.innerHTML += format(usermsgs[i]);
  }
}
