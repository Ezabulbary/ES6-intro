document.getElementById('add-border').addEventListener('click', function(){
    const containar = document.getElementById('friend-containar');
    containar.style.border = '1px solid black';
    containar.style.padding = '10px';
});

function addBackground(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'skyblue';
    }
};

document.getElementById('add-friend').addEventListener('click', function(){
    const containar = document.getElementById('friend-containar');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, temporibus.</p>
    `;
    containar.appendChild(friendDiv);
})