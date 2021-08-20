const myArray = [`Whataburger`, `East Cafe`, `Taqueria Monterrey`, `Mambo Seafood`];

const randomBtn = document.querySelector('#randomBtn');

randomBtn.addEventListener('click', () => {
    const random = myArray[Math.floor(Math.random() * myArray.length)];
    alert(random);
    console.log(random);
});
