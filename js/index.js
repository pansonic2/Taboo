descWord = ["Laugh", "Street", "Marriage", "Watermelon", "Crosswalk", "Bicycle", "Flamingo"]
tabooWords = ["funny ha-ha chuckle giggle joke", "road avenue way drive cross", "wedding husband wife ceremony vows", "fruit seeds picnics pink green", "pedestrians cars line intersection street", "2-wheeler handlebars pedal 10-speed ride", "pink bird lawn long legs"]

word = 0;

document.getElementById('descWord').innerHTML = "You have to explain this word.";
document.getElementById('tabooWords').innerHTML = "You can't use these words.";

function nextQuestion() {
  if(typeof descWord[word+1] === 'undefined') {
    word = 0
}
else {
    word += 1;
}
document.getElementById('descWord').innerHTML = descWord[word];
  document.getElementById('tabooWords').innerHTML = tabooWords[word];
}