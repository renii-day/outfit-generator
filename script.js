const items = {
    shirts: ['images/shirt1.jpg', 'images/shirt2.jpg', 'images/shirt3.jpg', 'images/shirt4.jpg', 'images/shirt5.jpg'],
    pants: ['images/pants1.jpg', 'images/pants2.jpg', 'images/pants3.jpg', 'images/pants4.jpg', 'images/pants5.jpg'],
    shoes: ['images/shoes1.jpg', 'images/shoes2.jpg', 'images/shoes3.jpg', 'images/shoes4.jpg', 'images/shoes5.jpg'],
    bags: ['images/bag1.jpg', 'images/bag2.jpg', 'images/bag3.jpg', 'images/bag4.jpg', 'images/bag5.jpg']
};

// Randomize outfit
function randomizeOutfit() {
    const randomShirt = items.shirts[Math.floor(Math.random() * items.shirts.length)];
    const randomPants = items.pants[Math.floor(Math.random() * items.pants.length)];
    const randomShoes = items.shoes[Math.floor(Math.random() * items.shoes.length)];
    const randomBag = items.bags[Math.floor(Math.random() * items.bags.length)];

    // Update the images
    document.getElementById('shirt-image').src = randomShirt;
    document.getElementById('pants-image').src = randomPants;
    document.getElementById('shoes-image').src = randomShoes;
    document.getElementById('bag-image').src = randomBag;
}

// Toggle Explanation Visibility
function toggleExplanation() {
    const explanation = document.getElementById('explanation');
    if (explanation.style.display === 'none') {
        explanation.style.display = 'block';
    } else {
        explanation.style.display = 'none';
    }
}
