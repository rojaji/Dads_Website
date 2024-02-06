const images = [
    { src: "/src/safari-pictures/just-Toyota.jpeg", alt: "Embracing the untamed beauty of the wild on an unforgettable safari journey. Witnessing majestic creatures in their natural habitat under the vast African sky is an experience that etches itself into the soul. 🌿🦓 #SafariMagic #WildlifeWonder" },
    { src: "/src/Pictures/Picture2.jpeg", alt: "Enriching travel experiences as you interact with the vibrant local culture. Sharing smiles, stories, and moments of genuine connection that transcend borders. 🌍❤️ #GlobalHarmony #CulturalExchange" },
    { src: "/src/Pictures/Picture3.jpeg", alt: "As the golden sun sets over the savannah, a tranquil symphony unfolds. Witness the magic of wildlife roaming and interacting in their natural habitat, painting the evening sky with the colors of harmony. 🌅🦒 #SafariSunset #WildlifeWonder" },
];

let currentIndex = 0;
const section = document.getElementById("imageSection");

function changeImage() {
    section.style.backgroundImage = `url('${images[currentIndex].src}')`;

    // Create new elements
    const figure = document.createElement("figure");
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const paragraph = document.createElement("p");

    // Set attributes and content
    image.src = images[currentIndex].src;
    image.alt = images[currentIndex].alt.split('"')[1];
    figcaption.textContent = images[currentIndex].alt.split('"')[1];
    paragraph.textContent = images[currentIndex].alt;

    // Append elements to the DOM
    imageDiv.appendChild(image);
    figure.appendChild(imageDiv);
    figure.appendChild(figcaption);
    figure.appendChild(paragraph);
    section.innerHTML = ""; // Clear existing content
    section.appendChild(figure);

    currentIndex = (currentIndex + 1) % images.length;
}

// Initial call
changeImage();

// Set interval for image change
setInterval(changeImage, 5000); // Change image every 5 seconds




