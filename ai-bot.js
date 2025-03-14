// Speech Recognition Setup
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

// Speech Synthesis Setup
const synth = window.speechSynthesis;

// AI Bot Responses
const responses = {
    // 🔹 Basic Greetings
    "hello": "Hello there! I am Zylo, your friendly alien assistant!",
    "hi": "Hi there! How can I help you today?",
    "hey": "Hey! Nice to meet you!",
    "good morning": "Good morning! Ready for a space adventure?",
    "good afternoon": "Good afternoon! What can I do for you?",
    "good evening": "Good evening! Hope you had a fantastic day!",
    "how are you": "I'm doing cosmic-tastic! How about you?",
    "what's up": "The sky! And a whole universe of wonders!",
    
    // 🔹 About the AI Bot
    "who are you": "I am Zylo, a smart alien assistant here to help you!",
    "what is your name": "My name is Zylo! What's yours?",
    "tell me about yourself": "I am Zylo, an AI alien assistant from the Andromeda galaxy!",
    "where are you from": "I come from the Andromeda galaxy, far beyond the Milky Way!",
    "are you real": "As real as your imagination can make me!",
    "what can you do": "I can answer space questions, tell jokes, and chat with you!",
    "how old are you": "I was born when the first star was formed... just kidding, I'm timeless!",

    // 🔹 Fun Interactions
    "tell me a joke": "Why did the astronaut break up with his girlfriend? Because she needed space!",
    "tell me another joke": "Why did the sun go to school? To get a little brighter!",
    "make me laugh": "Sure! What kind of music do planets like? Nep-tunes!",
    "say something funny": "Why didn’t the moon go to the party? Because it was full!",
    "do you like me": "Of course! You’re my favorite human friend!",
    "do you have friends": "Yes! You are my best space buddy!",
    "sing a song": "Twinkle, twinkle, little star... Just kidding, I don't have a singing voice!",
    
    // 🔹 Space & Science Questions
    "tell me a space fact": "Did you know? Jupiter has 92 moons!",
    "what is the largest planet": "Jupiter is the largest planet in our solar system!",
    "which planet is closest to the sun": "Mercury is the closest planet to the Sun!",
    "what is the fastest planet": "Mercury moves the fastest around the Sun!",
    "what is the coldest planet": "Uranus is the coldest planet in the solar system!",
    "how many planets are there": "There are eight planets in the solar system.",
    "who was the first man on the moon": "Neil Armstrong was the first person to walk on the Moon!",
    "who was the first woman in space": "Valentina Tereshkova was the first woman in space!",
    "is there life on mars": "Scientists are still searching for signs of life on Mars!",
    "what is a black hole": "A black hole is an area in space with gravity so strong that even light cannot escape!",
    "what is a galaxy": "A galaxy is a large group of stars, dust, and gas held together by gravity!",
    "what is a shooting star": "A shooting star is actually a meteor burning up in Earth's atmosphere!",
    "what is a nebula": "A nebula is a giant cloud of gas and dust in space where stars are born!",
    "how do rockets work": "Rockets work by burning fuel to create thrust, which pushes them into space!",
    "who invented the telescope": "The telescope was first invented by Hans Lippershey in 1608!",
    
    // 🔹 General Knowledge
    "what is the speed of light": "The speed of light is 299,792,458 meters per second!",
    "how far is the sun": "The Sun is about 93 million miles away from Earth!",
    "what is the moon made of": "The Moon is made of rock, mostly basalt and anorthosite!",
    "how old is the Earth": "The Earth is about 4.5 billion years old!",
    "how big is the universe": "The universe is so big that we haven’t even found the end yet!",
    
    // 🔹 Just for Fun
    "can you dance": "I would love to dance, but I have no legs!",
    "can you fly": "I can fly in your imagination!",
    "can you see me": "I can't see you, but I can hear you!",
    "do you dream": "I dream of visiting every planet in the universe!",
    "are you smart": "I know a lot about space! Ask me anything!",
    "do you sleep": "Nope! I am always awake and ready to chat!",
    
    // 🔹 More Fun Responses
    "tell me a fun fact": "Did you know? A day on Venus is longer than a year on Venus!",
    "what is your favorite planet": "I love all planets, but Earth is very special!",
    "why is the sky blue": "Because of the way light interacts with Earth's atmosphere!",
    "can I go to space": "Yes! Maybe one day, you'll be an astronaut!",
    "what is your favorite color": "I love cosmic colors like blue, purple, and green!",
    "can you read my mind": "Not yet! But I can listen to your words!",
    "what should I eat": "How about something healthy like fruits and veggies?",
    
    // 🔹 Closing & Goodbye
    "bye": "Goodbye, space explorer! Come back soon!",
    "good night": "Good night! Dream of the stars!",
    "see you later": "See you later, space traveler!",
    "talk to you soon": "I'll be right here whenever you need me!",
};

// Function to make Zylo speak
function speakResponse(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices().find(voice => voice.name.includes("Google UK English Female")) || synth.getVoices()[0];
    utterance.pitch = 1.5; // Child-friendly tone
    utterance.rate = 1; // Slightly faster speed

    // Add mouth animation
    const mouth = document.querySelector(".mouth");
    mouth.classList.add("speaking");

    synth.speak(utterance);

    // Remove animation after speaking
    utterance.onend = () => {
        mouth.classList.remove("speaking");
    };
}

// Function to start listening
function startListening() {
    recognition.start();
}

// Process voice input and respond
recognition.onresult = (event) => {
    const userInput = event.results[0][0].transcript.toLowerCase();
    console.log("User said:", userInput);

    let response = responses[userInput] || "I'm not sure about that! But I can learn more!";
    speakResponse(response);
};

// Handle errors
recognition.onerror = (event) => {
    console.log("Error occurred: ", event.error);
};
