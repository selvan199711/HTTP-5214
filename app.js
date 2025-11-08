// all heroes data (28 total!)
const secrets = [
    { id: 1, hero: "im iron man", gif_url: "img/ironman.gif" },
    { id: 2, hero: "im spider man", gif_url: "img/spiderman.gif" },
    { id: 3, hero: "im batman", gif_url: "img/batman.gif" },
    { id: 4, hero: "im captain america", gif_url: "img/captainamerica.gif" },
    { id: 5, hero: "im thor", gif_url: "img/thor.gif" },
    { id: 6, hero: "im hulk", gif_url: "img/hulk.gif" },
    { id: 7, hero: "im deadpool", gif_url: "img/deadpool.gif" },
    { id: 8, hero: "im black widow", gif_url: "img/blackwidow.gif" },
    { id: 9, hero: "im hawkeye", gif_url: "img/hawkeye.gif" },
    { id: 10, hero: "im captain marvel", gif_url: "img/captainmarvel.gif" },
    { id: 11, hero: "im doctor strange", gif_url: "img/drstrange.gif" },
    { id: 12, hero: "im ant man", gif_url: "img/antman.gif" },
    { id: 13, hero: "im black panther", gif_url: "img/panther.gif" },
    { id: 14, hero: "im scarlet witch", gif_url: "img/ScarletWitch.gif" },
    { id: 15, hero: "im flash", gif_url: "img/flash.gif" },
    { id: 16, hero: "im superman", gif_url: "img/superman.gif" },
    { id: 17, hero: "im vision", gif_url: "img/vision.gif" },
    { id: 18, hero: "im wolverine", gif_url: "img/wolverine.gif" },
    { id: 19, hero: "im aquaman", gif_url: "img/aquaman.gif" },
    { id: 20, hero: "im catwoman", gif_url: "img/catwoman.gif" },
    { id: 21, hero: "im cyborg", gif_url: "img/cyborg.gif" },
    { id: 22, hero: "im drax", gif_url: "img/drax.gif" },
    { id: 23, hero: "im gamora", gif_url: "img/gamora.gif" },
    { id: 24, hero: "im groot", gif_url: "img/grook.gif" },
    { id: 25, hero: "im harley quinn", gif_url: "img/harley.gif" },
    { id: 26, hero: "im rocket raccoon", gif_url: "img/rocketracoon.gif" },
    { id: 27, hero: "im shazam", gif_url: "img/shazam.gif" },
    { id: 28, hero: "im silver surfer", gif_url: "img/silversurfer.gif" },
    { id: 29, hero: "im star lord", gif_url: "img/starlord.gif" },
    { id: 30, hero: "im thanos", gif_url: "img/thanos.gif" },
    { id: 31, hero: "im wonder woman", gif_url: "img/wonderwoman.gif" }
];

// all audio files for random selection
const audio_files = [
    'audio/squeky.wav',
    'audio/splat.wav',
    'audio/asian-gong-music.mp3',
    'audio/aughhhh-tiktok.mp3',
    'audio/bad-to-the-bone-meme.mp3',
    'audio/bruh-sound-effect_WstdzdM.mp3',
    'audio/dry-fart.mp3',
    'audio/dun-dun-dun-sound-effect-brass_8nFBccR.mp3',
    'audio/huh-cat.mp3'
];

// dynamic messages based on how many cards viewed (more contextual and funnier)
const opening_messages = [
    "psst... i need to tell you something",
    "hey... you again. got another secret",
    "okay so... since you're still here",
    "alright real talk... you ready for this one?",
    "yo... number five coming right up",
    "still clicking? bet. here's number six",
    "lucky number seven... lets gooo",
    "eight cards in and you haven't left? respect",
    "nine down... this is getting interesting",
    "double digits baby! number ten right here",
    "eleven secrets deep... you good bro?",
    "twelve... officially a dozen secrets. congrats?",
    "thirteen... unlucky for some. not for you tho",
    "fourteen cards... someone's committed",
    "fifteen... halfway through the roster my guy",
    "sixteen and still going... absolute legend",
    "seventeen... at this point you're basically part of the team",
    "eighteen... bro are you taking notes or what?",
    "nineteen cards... okay this is lowkey impressive",
    "TWENTY... yo you've seen twenty heroes. TWENTY.",
    "twenty one... you're in too deep now buddy",
    "twenty two... there's no going back",
    "twenty three... honestly didn't think you'd make it this far",
    "twenty four... you collecting these or something?",
    "twenty five... quarter of a hundred. that's like... a lot",
    "twenty six... getting close to the end here",
    "twenty seven... almost done with the collection",
    "twenty eight... second to last. feeling emotional yet?",
    "twenty nine... one more after this. cherish it",
    "THIRTY... this is literally the last one. it's been real",
    "you clicked next again? there's only thirty one total. here's number thirty one i guess"
];

const secret_messages = [
    "i have a secret",
    "okay so here's the deal",
    "you're gonna like this one",
    "wait till you see who it is",
    "this one's pretty cool actually",
    "drumroll for this legend",
    "introducing... another hero",
    "ta da it's hero number eight",
    "behold... more heroic content",
    "surprise it's someone you might know",
    "breaking news: another hero exists",
    "and the hero of the hour is",
    "plot twist: it's another superhero",
    "spoiler alert for number fourteen",
    "the prophecy has foretold... this hero",
    "sources confirm: it's hero time",
    "live from the headquarters",
    "exclusive reveal just for you",
    "hot off the press number nineteen",
    "in a shocking turn of events",
    "the council has decided... this one",
    "after careful consideration... beep boop",
    "scientists baffled by this hero",
    "you won't believe number twenty four",
    "doctors hate this one weird hero",
    "this hero doesn't want you to know this",
    "number twenty seven will shock you",
    "they said it couldn't be done but",
    "in my professional opinion as the narrator",
    "after all we've been through together",
    "for the last time because it's literally the last card"
];

// jokes that reference previous clicks and build context
const jokes = [
    "why did the hero cross the road? because the villain was on the other side obviously. welcome to card one",
    "fun fact: you just clicked your second card. two down. only twenty nine to go. piece of cake right?",
    "three cards in. at this rate you'll be done in like... let me calculate... five minutes. maybe ten",
    "four heroes unlocked. fun fact: you're now legally obligated to finish the whole collection. i don't make the rules",
    "five cards. that's like one hand's worth of cards. coincidence? probably. am i reaching for jokes? absolutely",
    "six cards deep. halfway to a dozen. you know what else comes in dozens? donuts. unrelated but now you're hungry",
    "lucky number seven. remember the first card? that was like two minutes ago. simpler times. we were younger then",
    "eight cards viewed. you've now seen more heroes than most people see in their entire cinema-going lifetime. think about that",
    "nine down. fun fact: this is the exact amount of heroes needed to form a baseball team. you could start a league",
    "double digits! ten cards! by the way cards two through nine are starting to feel forgotten. they miss you",
    "eleven secrets. that first hero from card one? they're probably wondering if you still think about them. you don't. it's fine",
    "twelve cards. a full dozen. a jury's worth. you could hold a trial for best hero. spoiler: they're all guilty of being cool",
    "thirteen. unlucky for some. lucky for you because you get to keep clicking. your finger must be getting a workout by now",
    "fourteen cards in. remember when you thought this would take two minutes? yeah. about that. time is an illusion",
    "fifteen cards. you're officially at the halfway point. how does it feel? don't answer that just keep clicking",
    "sixteen heroes met. at this point you know more superheroes than you know your own neighbors. priorities",
    "seventeen cards viewed. fun fact: the reset button is right there. i'm not saying use it but it's there. judgement free zone",
    "eighteen cards. you've been here for a while now. blink if you need help. wait you can't blink at text. just click next",
    "nineteen down. almost at twenty. remember card one? feels like a lifetime ago doesn't it. we've grown so much since then",
    "TWENTY CARDS. you've clicked through twenty heroes. that's twenty different gifs. twenty jokes. do you feel accomplished? you should",
    "twenty one. at this point you're not just viewing cards you're on a journey. a weird clicking journey but a journey nonetheless",
    "twenty two cards in. someone check on this person. are you okay? do you need water? a snack? to touch grass maybe?",
    "twenty three. you're so close to the end i can almost hear the finish line music. it sounds like bad to the bone. because it is",
    "twenty four. only seven more to go. you can do this. we believe in you. well i believe in you. the heroes don't know you exist",
    "twenty five cards. three quarters of the way there. you're basically an expert on random hero facts now. put that on your resume",
    "twenty six. getting emotional yet? no? okay cool cool. just checking. definitely not crying over here about this journey ending soon",
    "twenty seven cards. four more. that's it. then what? will you click reset? will you close the tab? will we ever know true peace?",
    "twenty eight. this is the second to last card. take a moment. breathe. remember card one. remember who you were before this",
    "twenty nine. one more after this. literally one. the final card. the end of an era. are you ready? probably not but here we go",
    "thirty cards. this is it. the final hero. the last gif. the ultimate card. thank you for this journey. it's been weird. goodbye",
    "you clicked next after thirty? there's only thirty one. this is literally the last possible card. it can't get more final than this"
];

const colors = ['#ffd93d', '#ff6b6b', '#4dabf7', '#51cf66', '#cc5de8', '#ff922b', '#ff6b9d'];

let current_index = 0;
let shuffled_secrets = [];
let viewed_count = 0;
let sound_on = true;
let audio_objects = {};

// shuffle
function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// random color
function random_color() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// load all audio files
function load_sounds() {
    audio_files.forEach(file => {
        const audio = new Audio(file);
        audio.volume = 0.5;
        audio_objects[file] = audio;
    });
}

// play random sound
function play_random_sound() {
    if (sound_on) {
        const random_file = audio_files[Math.floor(Math.random() * audio_files.length)];
        const audio = audio_objects[random_file];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
        }
    }
}

// get message based on view count
function get_opening_message() {
    const index = Math.min(viewed_count, opening_messages.length - 1);
    return opening_messages[index];
}

function get_secret_message() {
    const index = Math.min(viewed_count, secret_messages.length - 1);
    return secret_messages[index];
}

function get_joke() {
    const index = Math.min(viewed_count, jokes.length - 1);
    return jokes[index];
}

// create card
function create_card(secret) {
    const panel = document.createElement('div');
    panel.className = 'comic_panel';
    panel.style.backgroundColor = random_color();
    
    const content = document.createElement('div');
    content.className = 'panel_content';
    
    const secret_text = document.createElement('p');
    secret_text.className = 'secret_text';
    secret_text.textContent = get_opening_message();
    
    const hero_name = document.createElement('h2');
    hero_name.className = 'hero_name';
    hero_name.textContent = secret.hero;
    
    const gif = document.createElement('img');
    gif.className = 'hero_gif';
    gif.src = secret.gif_url;
    gif.alt = secret.hero;
    
    // joke text below gif
    const joke_text = document.createElement('p');
    joke_text.className = 'secret_text';
    joke_text.style.fontSize = '0.9rem';
    joke_text.style.marginTop = '1rem';
    joke_text.style.display = 'none';
    joke_text.textContent = get_joke();
    
    content.appendChild(secret_text);
    content.appendChild(hero_name);
    content.appendChild(gif);
    content.appendChild(joke_text);
    panel.appendChild(content);
    
    let clicks = 0;
    
    panel.onclick = function() {
        clicks++;
        
        if (clicks === 1) {
            secret_text.textContent = get_secret_message();
            play_random_sound();
        } 
        else if (clicks === 2) {
            panel.classList.add('revealed');
            joke_text.style.display = 'block';
            
            const pow = document.createElement('div');
            pow.className = 'pow_effect';
            pow.textContent = 'POW';
            panel.appendChild(pow);
            setTimeout(() => pow.remove(), 600);
            
            play_random_sound();
        }
    };
    
    return panel;
}

// show current card
function show_card() {
    const container = document.getElementById('current_card');
    container.innerHTML = '';
    
    const secret = shuffled_secrets[current_index];
    const card = create_card(secret);
    container.appendChild(card);
    
    viewed_count++;
    document.getElementById('current_num').textContent = viewed_count;
    document.getElementById('total_num').textContent = shuffled_secrets.length;
}

// go to random next card
function go_next() {
    let new_index;
    do {
        new_index = Math.floor(Math.random() * shuffled_secrets.length);
    } while (new_index === current_index && shuffled_secrets.length > 1);
    
    current_index = new_index;
    play_random_sound();
    show_card();
}

// reset everything
function reset_all() {
    current_index = 0;
    viewed_count = 0;
    shuffled_secrets = shuffle(secrets);
    play_random_sound();
    show_card();
}

// sound toggle
function toggle_sound() {
    sound_on = !sound_on;
    document.getElementById('sound_icon').textContent = sound_on ? '🔊' : '🔇';
}

// init
function init() {
    load_sounds();
    shuffled_secrets = shuffle(secrets);
    viewed_count = 0;
    show_card();
    
    document.getElementById('sound_toggle').onclick = toggle_sound;
    document.getElementById('next_btn').onclick = go_next;
    document.getElementById('reset_btn').onclick = reset_all;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
