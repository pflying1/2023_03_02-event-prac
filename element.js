const body = document.body;
const moveBtn = document.getElementById('move-btn');
//moveBtn > h1
const h1 = document.createElement('h1')
h1.textContent = "move!";
moveBtn.appendChild(h1);


const root = document.getElementById('root');

//root > main
const main = document.createElement('main');
root.appendChild(main);

//root > main > section[0]
const sectionLeft = document.createElement('section');
sectionLeft.setAttribute("id", "left-sect");
root.children[0].appendChild(sectionLeft);


//root > main > ul
const ul = document.createElement('ul');
root.children[0].children[0].appendChild(ul);

//root > main > ul > li
for(let i=1; i<6; i++) {
  const li = document.createElement('li');
  li.textContent= `items-${i}`;
  root.children[0].children[0].children[0].appendChild(li);
}

//root > main > section[1]
const sectionRight = document.createElement('section');
sectionRight.setAttribute("id", "right-sect");
root.children[0].appendChild(sectionRight);

//root > main > section[1] > ul
const ul2 = document.createElement('ul');
root.children[0].children[1].appendChild(ul2);