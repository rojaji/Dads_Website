
function goToPage(page) {
    window.location.href = page;
  }


document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var buttonElement = document.getElementById('About');

    // Add a click event listener to the button
    buttonElement.addEventListener('click', function () {
        // Change the location to the desired page
        window.location.href = 'page2.html';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var buttonElement = document.getElementById('Home');

    // Add a click event listener to the button
    buttonElement.addEventListener('click', function () {
        // Change the location to the desired page
        window.location.href = 'index.html';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var buttonElement = document.getElementById('Services');

    // Add a click event listener to the button
    buttonElement.addEventListener('click', function () {
        // Change the location to the desired page
        window.location.href = 'page3.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var buttonElement = document.getElementById('Contact');

    // Add a click event listener to the button
    buttonElement.addEventListener('click', function () {
        // Change the location to the desired page
        window.location.href = 'page4.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function for the first page (image rotation with fig captions)
    const imagesWithCaptions = [
        { src: "/src/safari-pictures/Toyota.jpg", alt: "Embracing the untamed beauty of the wild on an unforgettable safari journey. Witnessing majestic creatures in their natural habitat under the vast African sky is an experience that etches itself into the soul. 🌿🦓 #SafariMagic #WildlifeWonder" },
        { src: "/src/safari-pictures/Tourist.jpg", alt: "Enriching travel experiences as you interact with the vibrant local culture. Sharing smiles, stories, and moments of genuine connection that transcend borders. 🌍❤️ #GlobalHarmony #CulturalExchange" },
        { src: "/src/safari-pictures/Just-Toyota.jpg", alt: "As the golden sun sets over the savannah, a tranquil symphony unfolds. Witness the magic of wildlife roaming and interacting in their natural habitat, painting the evening sky with the colors of harmony. 🌅🦒 #SafariSunset #WildlifeWonder" },
    ];

    let currentIndexWithCaptions = 0;
    const sectionWithCaptions = document.getElementById("imageSection");

    function changeImageWithCaptions() {
        sectionWithCaptions.style.backgroundImage = `url('${imagesWithCaptions[currentIndexWithCaptions].src}')`;

        // Create new elements
        const figure = document.createElement("figure");
        const imageDiv = document.createElement("div");
        const image = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        const paragraph = document.createElement("p");

        // Set attributes and content
        image.src = imagesWithCaptions[currentIndexWithCaptions].src;
        image.alt = imagesWithCaptions[currentIndexWithCaptions].alt.split('"')[1];
        figcaption.textContent = imagesWithCaptions[currentIndexWithCaptions].alt.split('"')[1];
        paragraph.textContent = imagesWithCaptions[currentIndexWithCaptions].alt;

        // Append elements to the DOM
        imageDiv.appendChild(image);
        figure.appendChild(imageDiv);
        figure.appendChild(figcaption);
        figure.appendChild(paragraph);
        sectionWithCaptions.innerHTML = ""; // Clear existing content
        sectionWithCaptions.appendChild(figure);

        currentIndexWithCaptions = (currentIndexWithCaptions + 1) % imagesWithCaptions.length;
    }

    // Function for the last three pages (background image rotation)
    const imagesForBackground = [
        "/src/safari-pictures/ballon.jpg",
        "/src/safari-pictures/Closer-Lion.jpg",
        "/src/safari-pictures/giraph.jpg",
        "/src/safari-pictures/Lion.jpg",
        "/src/safari-pictures/More-toyota.jpg",
        "/src/safari-pictures/tourist.jpg",
        "/src/safari-pictures/Zebra.jpg",
    ];

    let currentIndexForBackground = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url('${imagesForBackground[currentIndexForBackground]}')`;

        currentIndexForBackground = (currentIndexForBackground + 1) % imagesForBackground.length;
    }

    // Check if the current page URL contains the specified keywords
    const currentPage = window.location.href;
    if (currentPage.includes('page2.html') || currentPage.includes('page3.html') || currentPage.includes('page4.html')) {
        // Initial call for background change
        changeBackground();

        // Set interval for background change
        setInterval(changeBackground, 5000); // Change background every 5 seconds
    } else {
        // Initial call for image rotation with fig captions
        changeImageWithCaptions();

        // Set interval for image change with fig captions
        setInterval(changeImageWithCaptions, 10000); // Change image with fig captions every 5 seconds
    }
});