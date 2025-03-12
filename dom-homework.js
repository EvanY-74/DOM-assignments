const ul = document.querySelector('ul');

let itemNum = 1;

document.querySelector('button').addEventListener('mouseup', () => {
    const li = document.createElement('li');
    li.textContent = 'New List Item ' + itemNum;
    li.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.5)`;
    ul.append(li);
    itemNum++;
});

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseup', () => {
    myDiv.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.25)`;
})

function randomColor() {
    return Math.random() * 256;
}