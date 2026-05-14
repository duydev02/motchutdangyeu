const qualitySteps = [
    {
        quality: "144p",
        image: "images/144p.png",
        title: "nah this is too pixelated",
        hint: "the vibe is buffering. we can do better.",
        button: "upgrade to 240p",
    },
    {
        quality: "240p",
        image: "images/240p.png",
        title: "okay wait...",
        hint: "lowkey getting cuter, but still not the final form.",
        button: "upgrade to 480p",
    },
    {
        quality: "480p",
        image: "images/480p.png",
        title: "the plot thickens",
        hint: "not me pretending this is a real video quality setting.",
        button: "upgrade to 720p",
    },
    {
        quality: "720p",
        image: "images/720p.png",
        title: "almost main character quality",
        hint: "one more tap. trust the process.",
        button: "unlock 1080p",
    },
    {
        quality: "1080p",
        image: "images/1080p1.png",
        title: "I luv u 3000 <3",
        hint: "",
        button: "",
    },
];

const qualityImage = document.getElementById("qualityImage");
const imageStage = document.getElementById("imageStage");
const title = document.getElementById("h1-title");
const hintText = document.getElementById("hintText");
const qualityButton = document.getElementById("qualityButton");
const playground = document.querySelector(".playground");

let currentStepIndex = -1;
let imageInterval;
let audio;
let typingStarted = false;

qualityButton.addEventListener("click", advanceQuality);

function advanceQuality() {
    currentStepIndex += 1;
    const step = qualitySteps[currentStepIndex];

    if (!step) {
        return;
    }

    showQualityStep(step);

    if (step.quality === "1080p") {
        unlockFinalMoment();
    }
}

function showQualityStep(step) {
    imageStage.classList.remove("d-none");
    qualityImage.classList.remove("d-none");
    qualityImage.src = step.image;
    qualityImage.alt = `Cute image at ${step.quality}`;

    title.textContent = step.title;
    hintText.textContent = step.hint;

    if (step.button) {
        qualityButton.textContent = step.button;
    }
}

function unlockFinalMoment() {
    qualityButton.classList.add("d-none");
    document.body.classList.add("is-final");
    playground.insertBefore(title, imageStage);

    if (!audio) {
        audio = new Audio("./cute.mp3");
        audio.volume = 0.4;
        audio.loop = true;
        audio.play().catch(() => {
            hintText.textContent = "music got shy. tap once more if it stays quiet.";
        });
    }

    if (!imageInterval) {
        let index = 1;
        imageInterval = setInterval(() => {
            index = (index + 1) % 6;
            qualityImage.src = `images/1080p${index}.png`;
        }, 1000);
    }

    displayText();
}

function displayText() {
    if (typingStarted) {
        return;
    }

    typingStarted = true;
    const text = "I luv u 3000 <3";
    let index = 0;
    let numDots = 0;

    title.classList.add("text-title");
    title.textContent = "";

    function typeWriter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index += 1;
            setTimeout(typeWriter, 220);
            return;
        }

        if (numDots < 3) {
            title.textContent += ".";
            numDots += 1;
        } else {
            title.textContent = title.textContent.replaceAll(".", "");
            numDots = 0;
        }

        setTimeout(typeWriter, 500);
    }

    typeWriter();
}
