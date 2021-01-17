let title = document.getElementById(`myTitle`);
console.log(title);

title.innerHTML = `Seems this page to be hacked`;




let paragraphs = document.querySelectorAll('p');
console.log(paragraphs[0]);

paragraphs[0].innerHTML = `I thing i changed this in the right way`;
paragraphs[1].innerHTML = `and i guess and this worked too`;



let textDiv = document.getElementsByTagName('text');
console.log(textDiv[0]);

textDiv[0].innerHTML = `I hope i select all the elements in the right wayy`;




let downHeader = document.getElementsByTagName(`h1`);
console.log(downHeader);

downHeader[1].innerHTML = `I changed this ...`;



let lastHeader = document.getElementsByTagName(`h3`);
console.log(lastHeader[0]);

lastHeader[0].innerHTML = `and this one too and i hope i did the right thing`;