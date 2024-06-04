var holdFg = false;
let imageInterval;

function changeImage() {
    const qualitySelect = document.getElementById("qualitySelect");
    const qualityImage = document.getElementById("qualityImage");
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        "144p": "images/144p.png",
        "240p": "images/240p.png",
        "480p": "images/480p.png",
        "720p": "images/720p.png",
        "1080p": "images/1080p1.png",
    };

    // Change image source based on selected quality
    let imagePath = qualityImageMap[selectedQuality];
    if (!holdFg) {
        if (imagePath) {
            qualityImage.classList.remove("d-none");
            qualityImage.src = imagePath;
        } else {
            qualityImage.classList.add("d-none");
        }
    }
    if (selectedQuality == "1080p") {
        if (!imageInterval) {
            var audio = new Audio("./cute.mp3");
            audio.volume = 0.4;
            audio.loop = true;
            audio.play();
            let index = 0;
            imageInterval = setInterval(() => {
                index = (index + 1) % 6;
                qualityImage.src = "images/1080p" + index + ".png";
            }, 1000);
        }
        holdFg = true;
        qualitySelect.classList.add('d-none');
        displayText();
    }
}

function showNextOption(selectElement) {
    const options = selectElement.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            // Show the next option if it exists
            if (i + 1 < options.length) {
                options[i + 1].classList.remove("hidden");
                options[i - 1].classList.add("hidden");
            }
            break;
        }
    }
    changeImage();
}

function displayText() {
    const text = "I luv u 3000 <3";
    const h1 = document.getElementById("h1-title");
    h1.classList.add('text-title')
    let index = 0;
    let numDots = 0;
    h1.innerHTML = '';

    function typeWriter() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 300); // Adjust the delay (in milliseconds) as needed
        } else {
            if (numDots < 3) {
                h1.innerHTML += '.';
                numDots++;
            } else {
                h1.innerHTML = h1.innerHTML.replaceAll('.', '');
                numDots = 0;
            }
            setTimeout(typeWriter, 500); // Adjust the delay (in milliseconds) as needed
        }
    }

    typeWriter();
}