// DATA SOAL (Tambahkan link file HTML Anda di sini)
const TOPICS = {
    "basic": [
        { name: "language fill", file: "Basic grammar/language fill blank.html", desc: "Elementary Language" },
        { name: "language error", file: "Basic grammar/language error.html", desc: "Elementary Language" },
        { name: "sentence fill", file: "Basic grammar/sentence fill.html", desc: "Elementary Sentence" },
        { name: "sentence error", file: "Basic grammar/sentence error.html", desc: "Elementary Sentence" },
        { name: "noun fill", file: "Basic grammar/noun fill.html", desc: "Elementary Nouns" },
        { name: "noun error", file: "Basic grammar/noun error.html", desc: "Elementary Nouns" },
        { name: "pronoun fill", file: "Basic grammar/pronoun fill.html", desc: "Elementary Pronoun" },
        { name: "pronoun error", file: "Basic grammar/pronoun error.html", desc: "Elementary Pronoun" },
        { name: "adjective fill", file: "Basic grammar/adjective fill.html", desc: "Elementary Adjective" },
        { name: "adjective error", file: "Basic grammar/adjective error.html", desc: "Elementary Adjective" },
        { name: "adverb fill", file: "Basic grammar/adverb fill.html", desc: "Elementary Adverb" },
        { name: "adverb error", file: "Basic grammar/adverb error.html", desc: "Elementary Adverb" },
        { name: "conjunction fill", file: "Basic grammar/conjunction fill.html", desc: "Elementary Conjunction" },
        { name: "conjunction error", file: "Basic grammar/conjunction error.html", desc: "Elementary Conjunction" },
        { name: "preposition fill", file: "Basic grammar/preposition fill.html", desc: "Elementary Preposition" },
        { name: "preposition error", file: "Basic grammar/preposition error.html", desc: "Elementary Preposition" },
        { name: "verb fill", file: "Basic grammar/verb fill.html", desc: "Elementary Verb" },
        { name: "verb error", file: "Basic grammar/verb error.html", desc: "Elementary Verb" },
        { name: "tenses fill", file: "Basic grammar/tenses fill.html", desc: "Elementary Tenses" },
        { name: "tenses error", file: "Basic grammar/tenses error.html", desc: "Elementary Tenses" },
    ],
    "intermediate": [
        { name: "two Event Concept fill", file: "Intermediate grammar/two event concept fill.html", desc: "Intermediate Two Event Concept" },
        { name: "two Event Concept error", file: "Intermediate grammar/two event concept error.html", desc: "Intermediate Two Event Concept" },
        { name: "elliptical Stucture fill", file: "Intermediate grammar/elliptical fill.html", desc: "Intermediate Elliptical Structure" },
        { name: "elliptical Stucture error", file: "Intermediate grammar/elliptical error.html", desc: "Intermediate Elliptical Structure" },
        { name: "causative fill", file: "Intermediate grammar/causative fill.html", desc: "Intermediate Causative" },
        { name: "causative error", file: "Intermediate grammar/causative error.html", desc: "Intermediate Causative" },
        { name: "modal fill", file: "Intermediate grammar/modal fill.html", desc: "Intermediate Modal" },
        { name: "modal error", file: "Intermediate grammar/modal error.html", desc: "Intermediate Modal" },
        { name: "direct indirect fill", file: "Intermediate grammar/direct indirect fill.html", desc: "Intermediate Direct Indirect" },
        { name: "direct indirect error", file: "Intermediate grammar/direct indirect error.html", desc: "Intermediate Direct Indirect" },
        { name: "subjunctive fill", file: "Intermediate grammar/subjunctive fill.html", desc: "Intermediate Subjunctive" },
        { name: "subjunctive error", file: "Intermediate grammar/subjunctive error.html", desc: "Intermediate Subjunctive" },
    ],
    "advance": [
        { name: "conditional sentence fill", file: "Advance Grammar/conditional sentence fill.html", desc: "Conditional Sentence" },
        { name: "conditional sentence error", file: "Advance Grammar/conditional sentence error.html", desc: "Conditional Sentence" },
        { name: "degree of comparison fill", file: "Advance Grammar/degree of comparison fill", desc: "Degree of Comparison" },
        { name: "degree of comparison error", file: "Advance Grammar/degree of comparison error.html", desc: "Degree of Comparison" },
        { name: "adjective clause fill", file: "Advance Grammar/adjective clause fill.html", desc: "Adjective clause" },
        { name: "adjective clause error", file: "Advance Grammar/adjective clause error.html", desc: "Adjective Clause" },
        { name: "noun clause fill", file: "Advance Grammar/noun clause fill.html", desc: "Noun Clause" },
        { name: "noun clause error", file: "Advance Grammar/noun clause error.html", desc: "Noun Clause" },
        { name: "adverbial clause fill", file: "Advance Grammar/adverbial clause error.html", desc: "Adverbial Clause" },
        { name: "adverbial clause error", file: "Advance Grammar/adverbial clause error.html", desc: "Adverbial Clause" },
        { name: "gerund, to infinitive, participle fill", file: "Advance Grammar/gerund, to infinitive, participle fill.html", desc: "Gerund, To infinitive, Participle" },
        { name: "gerund, to infinitive, participle error", file: "Advance Grammar/gerund, to infinitive, participle error.html", desc: "Gerund, To infinitive, Participle" },
    ],
    "toefl": [
        { name: "toefl section 2", file: "toefl/toefl section 2.html", desc: "Toefl Preparation" },
        { name: "toefl simulation", file: "toefl/toefl simulation.html", desc: "Toefl Preparation" },
    ]
};

// NAVIGASI
window.navTo = id => {
    document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
};

// HANDLING LEVEL & TOPICS
window.startLevel = (level) => {
    const container = document.getElementById("topic-container");
    const title = document.getElementById("topic-title");
    
    title.innerText = level.toUpperCase() + " TOPICS";
    container.innerHTML = ""; // Clear list

    TOPICS[level].forEach(topic => {
        const item = document.createElement("div");
        item.className = "level-card";
        item.onclick = () => {
            document.body.style.opacity = "0";
            setTimeout(() => {
                // Link menuju folder exercise/
                window.location.href = topic.file; 
            }, 400);
        };
        item.innerHTML = `
            <span class="icon">📝</span>
            <div class="text">
                <strong>${topic.name}</strong>
                <small>${topic.desc}</small>
            </div>
        `;
        container.appendChild(item);
    });

    navTo("view-topics");
};

const API_URL = "https://script.google.com/macros/s/AKfycbzPIlOShAmrTrsDcwbE6FVm2Z6NoJD9fTTnqApoMo3GvctEQPlCGa728I9D4oZfiGjN/exec";

// AUTH LOGIC (SIGNUP)
window.handleSignup = async () => {
    const name = document.getElementById("reg-name").value.trim();
    const level = document.getElementById("reg-level").value;
    const btnContainer = document.getElementById("signup-loader");

    if (!name || !level) return alert("Fill all fields!");

    btnContainer.innerHTML = '<div class="btn btn-primary"><span class="spinner"></span> Registering...</div>';

    try {
        // GAS memerlukan data dikirim secara stringify langsung, bukan dibungkus properti "data"
        await fetch(API_URL, {
            method: "POST",
            mode: "no-cors", // Penting untuk Apps Script POST
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, level, action: "register", date: new Date().toLocaleString() })
        });
        
        alert("Registration Sent! Please try to Login.");
        location.reload();
    } catch (e) { 
        alert("Success! (Note: Redirecting to login)"); 
        location.reload();
    }
};

// AUTH LOGIC (LOGIN)
window.handleLogin = async () => {
    const name = document.getElementById("login-name").value.trim();
    const btnContainer = document.getElementById("login-loader");

    if (!name) return alert("Enter your name!");

    btnContainer.innerHTML = '<div class="btn btn-primary"><span class="spinner"></span> Checking...</div>';

    try {
        const res = await fetch(`${API_URL}?name=${encodeURIComponent(name)}`);
        const data = await res.json();

        if (data.length === 0) {
            alert("Name not found! Please register first.");
            location.reload();
        } else {
            localStorage.setItem("pea_user", data[0].name); // Ambil nama asli dari sheet
            localStorage.setItem("isLoggedIn", "true");
            navTo("view-levels");
            document.getElementById("user-name").innerText = data[0].name;
        }
    } catch (e) { 
        console.error(e);
        alert("Server error or Name not found"); 
        location.reload();
    }
};

window.handleLogout = () => {
    localStorage.clear();
    location.reload();
};

// INITIAL LOAD
window.onload = () => {

    setInterval(() => {

        const now = new Date();
        const clock = document.getElementById("current-time");

        if(clock){
            clock.innerText =
            now.getHours() + ":" +
            String(now.getMinutes()).padStart(2,'0');
        }

    }, 1000);

    if(localStorage.getItem("isLoggedIn")){

        navTo("view-levels");

        const userName = document.getElementById("user-name");
        if(userName){
            userName.innerText =
            localStorage.getItem("pea_user");
            updateOverallProgress();
        }
    }
};
// Update fungsi finishQuiz di app.js
// Di app.js
window.finishQuiz = function(percent, correct, total, grade, feedback, topicName) {
    localStorage.setItem("result_score", percent);
    localStorage.setItem("result_correct", correct);
    localStorage.setItem("result_total", total);
    localStorage.setItem("result_grade", grade);
    localStorage.setItem("result_feedback", feedback);
    localStorage.setItem("result_topic", topicName);

    // LOGIKA NILAI TERBESAR
    const storageKey = "best_score_" + topicName.replace(/\s+/g, '_');
    const existingBest = localStorage.getItem(storageKey) || 0;
    if (parseInt(percent) > parseInt(existingBest)) {
        localStorage.setItem(storageKey, percent);
    }

    // PINDAH KE RESULT (Gunakan ../ karena file soal ada di dalam folder)
    window.location.href = "../result.html"; 
};

// Fungsi update progress (panggil saat login atau load dashboard)
window.updateOverallProgress = function() {
    let totalScore = 0;
    let topicCount = 0;

    for (let level in TOPICS) {
        TOPICS[level].forEach(topic => {
            const key = "best_score_" + topic.name.replace(/\s+/g, '_');
            const score = parseInt(localStorage.getItem(key)) || 0;
            totalScore += score;
            topicCount++;
        });
    }

    const average = topicCount > 0 ? Math.round(totalScore / topicCount) : 0;
    const bar = document.getElementById("overall-bar");
    const label = document.getElementById("overall-percent");
    
    if (bar && label) {
        bar.style.width = average + "%";
        label.innerText = average + "%";
    }
};
