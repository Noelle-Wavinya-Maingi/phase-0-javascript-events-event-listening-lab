function addingEventListener() {
    let input;
    input = document.getElementById('input');
    function clickAlert(){
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener();