const $ = s => document.querySelector(s);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
})

addEventListener("load", () => {
    $("#loader").style.display = "none";
})


let container = $(".container");
let testContainer = $(".test-container");
let testBtn = $("#testBtn");
let nav = $("#nav");
let backBtn = $("#backBtn");

let paragraphs = [
    `Aesop was one of the great Greek writers. He is best known for his fables, stories that have a moral. They teach us something about how we should live our lives. Aesop wrote thousands of these stories. Here are a few. The Wolf in Sheep's Clothing. Once upon a time, a Wolf decided to disguise the way he looked. He thought it would help him get food more easily. He put on the skin of a sheep, then he went out with the flock into the pasture. Even the shepherd was fooled by his clever costume. In the evening, the shepherd put him in with the rest of the sheep. He closed the gate and made sure it was secure before he went to bed. In the middle of the night, he came back to the fold to get some meat for the next day. Instead of a sheep, though, he grabbed the Wolf, killing him instantly. Those who look to harm others will be harmed themselves. The Bat and the Weasel. A Bat fell on the ground and was caught by a Weasel. It begged the Weasel to spare its life, but the Weasel refused. It told the Bat that birds, by nature, were its enemy. The Bat assured him that it was not a bird, it was a mouse. The Weasel thought a moment, then set it free. A while later, the Bat fell again to the ground, and it was caught by another Weasel. It begged this Weasel not to eat him, either. The Weasel, though, said it did not like mice at all and would eat it. The Bat told the Weasel that it was not a mouse, but a bat. The second Weasel had no good answer, so he let it go. The Bat knew it is always wise to turn events to your advantage. The Lion and the Mouse. A sleeping Lion was woken up by a Mouse running over his face. He got up angrily and caught the scared little Mouse. He was about to kill the Mouse, but it said in its squeaky little voice, "If you would only spare my life, I would be sure to repay your kindness." The Lion laughed at such nonsense, but he let him go. A short time later, though, the Lion was caught by some hunters. They bound him by ropes to the ground. The Mouse recognized his roar, and he rushed over and gnawed the rope with his teeth, setting the Lion free. The Mouse said "You laughed at the idea of my ever being able to help you. Now you know that it is possible for even a small little Mouse to help a great big Lion."`,

    `The word "astronaut" derives from the Greek words meaning "star" and "sailor." These men and women -- Alan Shephard, John Glenn, Jr., Sally Ride, to name a few -- conjure up images of bravery and adventure. They are modern heroes, helping humanity reach for the stars. When the space program began in 1959, there were only seven such people in the entire country. They all were then -- or had been in the past -- in the armed forces. Most of them were test pilots, used to the dangers that came from "pushing the envelope." That was only 36 years ago, and since then much has changed. Today the Americans who make up the shuttle crews are comprised of every race, creed, color, and gender. As of May 2, 1993, 180 men and 21 women astronauts were Caucasian, six men and one woman were African-American, three men and one woman were Hispanic, and two men were of Asian descent. NASA, the National Aeronautics and Space Administration, chooses its astronauts from an increasingly diverse pool of applicants that "looks like America." Thousands of applications come in from all over the world; from these, approximately 100 men and women are chosen for an intensive astronaut candidate training program every two years. "I cannot imagine a better career. I've done more than I could ever have imagined. I'm thankful that I've been at the right place at the right time," says astronaut Kenneth S. Reightler. The training is demanding, but the study time involved is no longer than that of any other professional career requiring graduate/post-graduate study. If becoming an astronaut is a dream, held long and steadfast, then this labor will be one of love. The preparation for becoming an astronaut actually begins in elementary school. "It is here that the foundations are laid down and then built upon," comments Colonel Charlie Bolden, Deputy Commandant of Midshipmen at the U.S. Naval Academy. "Start with the basics and get them down first ... you can't do anything without math and science." At this level, students should read everything they can get their hands on about astronauts and space in general. Later, once they have found a specific field of interest, they can begin to focus on that.`,

    `Snakes are a very specialised group of Reptiles under order Ophidia. Nearly 3,000 species of snakes are now found in the tropical and sub-tropical parts of the world. Out of these about 300 are Poisonous and others are Non-Poisonous. WHO has estimated that thirty to forty thousand people die annually of snake bite. Snakes are not found in New Zealand and Ireland. Snakes are slender and elongated reptiles without limbs, eyelids and external ears. The whole body is covered with epidermal scales and shields. The scales and small and usually overlap each other but the shields are large and join each other by their margins. Shields are prominent on the head. The occipital condyle is single and tripar tite. The lower jaw is attached to the skull with the help of quadrate which articulates in such a movable fashion that the jaw can move laterally and downwards. The two halves, of the lower jaw are loosely articulated. All these are special adaptation for- its peculiar feeding habit. The teeth are conical, recurved backward and fixed on jaw bones. In poisonous snakes two maxillary teeth (one on either side) become enlarged and pointed to form the Fangs. There are two types of fangs—open type and closed type according to the nature of the groove. In poisonous snakes the labial glands have become modified into poison glands and these do not help them in digestion. The tongue is bifid at the apex. Left lung is reduced. Urinary bladder is absent. Most snakes are terrestrial. Few are arboreal and aquatic. There are about 10 species of cobras of which two are found in India. They are Ophiopkagus hanah and Naja bungarus. Cobra is a very poisonous snake. It is usually found in forests. Usual length is 2-3 metres. The colour is black or buff. The hood is well developed. It is supported by long ribs located just behind the head. The hood bears marks like spectacles. In some cobras there are two spectacles marks while in others there is a single spectacles mark. Under the neck there are found 2 or 3 dark belly plates. The fang is open type.`,

    `Science is the investigation of any marvel or thing that can be watched and recorded. The information about that thing or marvel can be sorted out efficiently in predefined rules. Science is wherever around us. We have just barely started to comprehend the laws and the rules that oversee the working of our general surroundings in a manner that can be clarified in normal terms. Everything that can be clarified intelligently can be called science. In the old occasions since science was seen as clarifying a ton of occasions that were viewed as wonders of God, Christianity was against it. It shut down convictions, for example, human development, the earth being the focal point of the universe and so on. Today the life of solaces and facilitate that we live all gratitude to science. Science gets rationale and reasonability to all that occurs around us. As opposed to living in a condition of forecasts and expectation, we can be genuinely sure about how the morrow will spread out. Clinical Science has helped us comprehend the working of the human body. This has empowered the clinical investigations that find medicines making headways on personal satisfaction. The modern world is totally founded on the standards of science. Present-day transport also is an endowment of science whether it is on water, land or air; and these are turning out to be increasingly more progressed with the death of years. Building science has brought to us structures that are utilizing better assets and making them more secure, particularly in regions inclined to quakes, floods, volcanoes and so on. Data Technology as a science is making the trade of data simple and productive, thanks to web and PCs. Veterinary science is helping creatures in having a superior life. They can be dealt with, relieved and given a superior sickness free life.`,

    `Albert Einstein was a German mathematician and physicist who developed the special and general theories of relativity. In 1921, he won the Nobel Prize for physics for his explanation of the photoelectric effect. In the following decade, he immigrated to the U.S. after being targeted by the German Nazi Party. His work also had a major impact on the development of atomic energy. In his later years, Einstein focused on unified field theory. With his passion for inquiry, Einstein is generally considered the most influential physicist of the 20th century. Einstein was born on March 14, 1879, in Ulm, Württemberg, Germany. Einstein grew up in a secular Jewish family. His father, Hermann Einstein, was a salesman and engineer who, with his brother, founded Elektrotechnische Fabrik J. Einstein & Cie, a Munich-based company that mass-produced electrical equipment. Einstein’s mother, the former Pauline Koch, ran the family household. Einstein had one sister, Maja, born two years after him. Einstein attended elementary school at the Luitpold Gymnasium in Munich. However, he felt alienated there and struggled with the institution's rigid pedagogical style. He also had what were considered speech challenges, though he developed a passion for classical music and playing the violin, which would stay with him into his later years. Most significantly, Einstein's youth was marked by deep inquisitiveness and inquiry. Towards the end of the 1880s, Max Talmud, a Polish medical student who sometimes dined with the Einstein family, became an informal tutor to young Einstein. Talmud had introduced his pupil to a children’s science text that inspired Einstein to dream about the nature of light.`
];

testBtn.addEventListener("click", ()=> {
    $("#text").innerHTML = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    window.scrollTo(0, 0);
    restart();
    startTime = new Date().getTime();
    container.style.display = "none";
    nav.style.display = "none";
    testContainer.style.display = "block";
    started = true;
})
backBtn.addEventListener("click", ()=> {
    container.style.display = "block";
    nav.style.display = "flex";
    testContainer.style.display = "none";
})
$("#result-back-btn").addEventListener("click", () => {
    $(".result-container").style.display = "none";
    container.style.display = "block";
    nav.style.display = "flex";
})


$("#openHistory").addEventListener("click", () => {
    container.style.display = "none";
    nav.style.display = "none";
    $("#history-container").style.display = "block";
    window.scrollTo(0, 0);
    showPreviousResult();
})

$("#history-back-btn").addEventListener("click", () => {
    $("#history-container").style.display = "none";
    container.style.display = "block";
    nav.style.display = "flex";
})

function showPreviousResult() {
    let html = "";
    let testResult = localStorage.getItem("testResult");
    let data = [];

    if (testResult != null) {
        data = JSON.parse(testResult);


        data.forEach(result => {
            html +=
            `
            <div class="previous-result-card">
            <div class="previous-result-date">${result.date}</div>
            <div class="previous-result-progress-box">
            <div class="previous-result-progress">
            <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" style="stroke-dashoffset: ${440 - (result.accuracy/100 * 440)};"></circle>
            </svg>
            <div class="previous-result-progress-percent">${result.accuracy}<span>%</span></div>
            </div>
            <h2 class="previous-result-progress-text">Accuracy</h2>
            </div>

            <div class="previous-result-box">
            <p>${result.gross}<span>wpm</span></p>
            <p>Gross Speed</p>
            </div>
            <div class="previous-result-box">
            <p>${result.net}<span>wpm</span></p>
            <p>Net Speed</p>
            </div>
            <div class="previous-result-box">
            <p>${result.time}</p>
            <p>Time</p>
            </div>
            <div class="previous-result-box">
            <p>${result.characters}</p>
            <p>Characters</p>
            </div>
            <div class="previous-result-box">
            <p>${result.words}</p>
            <p>Words</p>
            </div>
            </div>
            `;
        })

        $(".previous-result-cards").innerHTML = html;
    } else {
        html =
        `
        <p class="message">
        <b>Nothing to show here!</b> Please complete some quick typing test to show here.
        </p>
        `;

        $(".previous-result-cards").innerHTML = html;
    }
}



let timeElm = $("#time");
let min, sec;
let started = false, showedResult = false;
let startTime = 0, endTime = 0, time = 0;

function printTime() {
    min < 10 ? min = "0"+min: min = min;
    sec < 10 ? sec = "0"+sec: sec = sec;
    timeElm.innerHTML = `${min}:${sec}`;
}
printTime();

function restart() {
    min = 5;
    sec = 0;
    printTime();
    showedResult = false;
    startTime = 0;
    endTime = 0;
    time = 0;
    $("#input").value = "";
}


function decreaseTime() {
    if (started) {
        if (timeElm.innerHTML != "00:00") {
            if (sec > 0) {
                sec -= 1;
            } else {
                min -= 1;
                sec = 59;
                min < 10 ? min = "0" + min: min = min;
            }

            sec < 10 ? sec = "0" + sec: sec = sec;
            timeElm.innerHTML = `${min}:${sec}`;
        } else {
            if (!showedResult) {
                result();
            }
        }
    }
}

setInterval(decreaseTime, 1000);


function result() {
    showedResult = true;
    endTime = new Date().getTime();

    seconds = (endTime - startTime)/1000;
    minutes = seconds/60;

    m = Math.floor(seconds/60);
    s = Math.floor(seconds - m * 60);
    m < 10 ? m = "0"+m: m = m;
    s < 10 ? s = "0"+s: s = s;

    let original = $("#text").innerHTML.split(" ");
    let typed = $("#input").value.split(" ");
    let correct = 0,
    incorrect = 0;
    typed.forEach((w, i) => {
        if (w == original[i]) {
            correct += 1;
        } else {
            incorrect += 1;
        }
    })



    characters = $("#input").value.length;
    words = Math.round(characters/5);
    gross = Math.round((characters/5)/minutes);
    net = Math.round(gross - (incorrect/minutes));
    accuracy = Math.round((net / gross) * 100);

    // Date
    let today = new Date();
    let date = today.getDate();

    let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = monthsName[today.getMonth()];
    let year = today.getFullYear();

    let sec = today.getSeconds();
    let min = today.getMinutes();
    let hour = today.getHours();


    sec < 10 ? sec = "0"+sec: sec = sec;
    min < 10 ? min = "0"+min: min = min;
    hour < 10 ? hour = "0"+hour: hour = hour;



    let data = {
        date: `${date} ${month} ${year}, ${hour}:${min}:${sec}`,
        time: `${m}:${s}`,
        characters: characters,
        words: words,
        gross: gross,
        net: net,
        accuracy: accuracy
    };

    // local storage
    let testResult = localStorage.getItem("testResult");
    let array = [];

    if (testResult == null) {
        array = [];
    } else {
        array = JSON.parse(testResult);
    }

    array.push(data);

    localStorage.setItem("testResult", JSON.stringify(array));



    window.scrollTo(0, 0);
    testContainer.style.display = "none";
    $(".result-container").style.display = "block";

    if (data.accuracy < 0) {
        data.accuracy = 0;
    }
    $(".progress-percent").innerHTML = `${data.accuracy}<span>%</span>`;
    $("#progress-circle").style.strokeDashoffset = `${440 - (data.accuracy/100 * 440)}`;


    $("#grossSpeed").innerHTML = `${data.gross}<span>wpm</span>`;
    $("#netSpeed").innerHTML = `${data.net}<span>wpm</span>`;
    $("#resultTime").innerHTML = data.time;
    $("#result-characters").innerHTML = data.characters;
    $("#result-words").innerHTML = data.words;
}

$("#continueBtn").addEventListener("click", result);
