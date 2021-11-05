//opdracht 1

const alertButton = document.querySelector("#mybutton");

alertButton.addEventListener('click', function(){
    alert('button clicked');
});

//opdracht 2

const changeBackgroundButton = document.querySelector("#mybutton2");

changeBackgroundButton.addEventListener('click', function(){
    changeBackgroundButton.parentNode.classList.add('red-background');
});

//opdracht 3

const toggleBackgroundButton = document.querySelector("#mybutton3");

const toggleColor = () => {
    toggleBackgroundButton.parentNode.classList.toggle('red-background');
};

toggleBackgroundButton.addEventListener('click', function() {
    toggleColor();
});
