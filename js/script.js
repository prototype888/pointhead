// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Event handler sidebar
const menuIcon = document.querySelector(".nav-list");
const bukaSidebar = document.getElementById("buka-sidebar");
const tutupSidebar = document.getElementById("tutup-sidebar");

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target === bukaSidebar) {
    menuIcon.style.display = "block";
  } else if (target === tutupSidebar || !menuIcon.contains(target)) {
    menuIcon.style.display = "none";
  }
});

const categoryList = document.querySelector(".dropdown-category");
const categoryArrow = document.getElementById("category-arrow");

const toggleCategoryNav = () => {
  const computedStyle = window.getComputedStyle(categoryList);
  const displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "block") {
    categoryList.style.display = "none";
    categoryArrow.innerHTML = "keyboard_arrow_down";
  } else {
    categoryList.style.display = "block";
    categoryArrow.innerHTML = "keyboard_arrow_up";
  }
};

const gameroomsList = document.querySelector(".dropdown-gamerooms");
const gameroomsArrow = document.getElementById("gamerooms-arrow");

const togglegameroomsNav = () => {
  const computedStyle = window.getComputedStyle(gameroomsList);
  const displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "block") {
    gameroomsList.style.display = "none";
    gameroomsArrow.innerHTML = "keyboard_arrow_down";
  } else {
    gameroomsList.style.display = "block";
    gameroomsArrow.innerHTML = "keyboard_arrow_up";
  }
};
// end Event handler sidebar

// searching nav

const bukaNavSearch = document.querySelector(".icon-search-nav span");
const tutupNavSearch = document.querySelector(".search-nav p");
const NavSearch = document.querySelector(".search-nav");

function bukaSearchNav() {
  NavSearch.style.display = "flex";
}

function tutupSearchNav() {
  NavSearch.style.display = "none";
}

bukaNavSearch.addEventListener("click", bukaSearchNav);
tutupNavSearch.addEventListener("click", tutupSearchNav);

// end searching nav

// Event handler quiz
const containerQuiz = document.querySelector(".container-quiz");

const tombolClick = () => {
  containerQuiz.style.display = "flex";
};

const closeQuiz = () => {
  containerQuiz.style.display = "none";
};
// end Event handler quiz

const questions = [
  {
    question:
      "Cabang olahraga apa yang dimainkan dengan menggunakan shuttlecock?",
    options: ["Bulu tangkis", "Bola voli", "Tenis", "Renang"],
    answer: "Bulu tangkis",
  },
  {
    question:
      "Siapa pemain sepak bola terkenal yang dikenal dengan julukan 'CR7'?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Neymar",
      "Zlatan Ibrahimovic",
    ],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Pada tahun berapa Olimpiade Musim Panas terakhir diadakan?",
    options: ["2016", "2018", "2020", "2024"],
    answer: "2020",
  },
  {
    question: "Cabang olahraga apa yang menggunakan ring dan bola basket?",
    options: ["Bulu tangkis", "Bola voli", "Basket", "Renang"],
    answer: "Basket",
  },
  {
    question: "Di negara mana olahraga sumo berasal?",
    options: ["Jepang", "Amerika Serikat", "Cina", "Inggris"],
    answer: "Jepang",
  },
  {
    question: "Berapa jumlah pemain dalam tim sepak bola?",
    options: ["10", "11", "12", "9"],
    answer: "11",
  },
  {
    question: "Siapa pemegang rekor gol terbanyak dalam sejarah sepak bola?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Romario"],
    answer: "Pele",
  },
  {
    question: "Cabang olahraga apa yang menjadi simbol Olimpiade?",
    options: ["Angkat besi", "Lari cepat", "Bola voli", "Api Olimpiade"],
    answer: "Api Olimpiade",
  },
  {
    question: "Apa nama gelar tertinggi dalam turnamen tenis Grand Slam?",
    options: ["Champion", "Grand Master", "Grand Slam", "Championship"],
    answer: "Grand Slam",
  },
  {
    question: "Negara mana yang menjadi tuan rumah Piala Dunia FIFA 2018?",
    options: ["Brasil", "Jerman", "Rusia", "Prancis"],
    answer: "Rusia",
  },
  {
    question:
      "Harga penggaris adalah Rp 1000 harga pulpen adalah 2000. benda yang lebih mahal adalah?",
    options: ["Mobil", "Kursi", "Dosa", "Pahala"],
    answer: "Mobil",
  },
  {
    question: "Sebutkan 1 tugas ibu di rumah",
    options: [
      "Ngurus arisan online",
      "Main tiktok",
      "Nonton sinetron indosiar",
      "Memasak buat keluarga",
    ],
    answer: "Ngurus arisan online",
  },
  {
    question:
      "Bagaimana cara makhluk hidup berkembang biak dengan membelah diri?",
    options: [
      "Membelah diri seperti agar agar",
      "Menjadi Transgender",
      "Operasi sesar",
      "Beranak",
    ],
    answer: "Operasi sesar",
  },
  {
    question: "Apa yang anda ketahui tentang biografi",
    options: [
      "Bodo",
      "Mencari tau tentang Manusia",
      "Mencari tau tentang hewan",
      "Kepo",
    ],
    answer: "Kepo",
  },
  {
    question:
      "Ibu membeli 3 telur, ibu akan membuat kue, apa yang harus dilakukan ibu agar telur tidak habis?",
    options: [
      "Pake telur mainan",
      "Membeli kue baru",
      "Tidak usah bikin kue",
      "Pertanyaan aneh",
    ],
    answer: "Tidak usah bikin kue",
  },
  {
    question: "Perubahan Wujud yang terjadi secara alami adalah",
    options: ["Bakmi Goreng", "Power Rangers", "Ultramen", "Gunung Berapi"],
    answer: "Power Rangers",
  },
  {
    question: "Hewan mamalia bernafas dengan?",
    options: ["Udara", "Air", "Paru Paru", "Hidung"],
    answer: "Udara",
  },
  {
    question: "Pembuluh nadi yang terbesar adalah",
    options: ["Aorta", "Nadia", "Susanti", "Lemak"],
    answer: "Nadia",
  },
  {
    question: "Penyakit peredangan pada usus disebut?",
    options: ["Penyakit Crohn", "Minum Yakult", "Kolitis ulserativa", "Lapar"],
    answer: "Lapar",
  },
  {
    question: "Apakah kamu sehat?",
    options: ["Tentu tidak", "Sehat", "Lumayan", "Lapar"],
    answer: "Lapar",
  },
  {
    question: "Pencernaan adalah?",
    options: ["Mencret", "Diare", "Maaf", "Asam Lambung"],
    answer: "Diare",
  },
  {
    question: "Cicak menghindari diri dari musuhnya dengan cara?",
    options: ["Berlari", "Berubah wujud", "Merayap", "Terbang"],
    answer: "Terbang",
  },
  {
    question: "Bebek dapat berenang di air karena?",
    options: ["Bisa berenang", "Menyelam", "Punya sayap", "Hanyut"],
    answer: "Punya sayap",
  },
  {
    question: "Ketika ibu pergi kepasar kamu tidak ikut, perasaanmu?",
    options: ["Marah", "Senang", "Sedih", "Tidak apa apa"],
    answer: "Tidak apa apa",
  },
  {
    question: "Telinga gunanya untuk?",
    options: ["Berjalan", "Menguping", "Mendengar", "Merekam"],
    answer: "Menguping",
  },
  {
    question: "Sebutkan benda padat yang bisa dicairkan?",
    options: ["STNK", "BPKB", "Emas", "Sertifikat tanah"],
    answer: "Sertifikat tanah",
  },
  {
    question: "Sebutkan benda padat yang bisa dicairkan?",
    options: ["STNK", "BPKB", "Emas", "Sertifikat tanah"],
    answer: "Sertifikat tanah",
  },
  {
    question:
      "Kemampuan makhluk hidup menyesuaikan diri dengan lingkungannya disebut?",
    options: ["Silaturahmi", "Adaptasi", "Berubah wujud", "Halal bi halal"],
    answer: "Silaturahmi",
  },
  {
    question: "Zat zat makanan yang terdapat dalam makanan bergisi seimbang?",
    options: ["Mister burger", "Pepes", "Kokakola", "Sepageti"],
    answer: "Kokakola",
  },
  {
    question:
      "Pak Budi adalah seorang pemandu bus dan membawa 20 penumpang, pada kota A dia menurunkan penumpang 10 dan kota B menurunkan 5 penumpang, Jadi berapakah umur pak Budi?",
    options: ["17 Tahun", "18 Tahun", "30 Tahun", "31 Tahun"],
    answer: "17 Tahun",
  },
  {
    question: "Sesama teman tidak boleh?",
    options: ["Mengejek", "Sayang", "Baik", "Jahat"],
    answer: "Baik",
  },
  {
    question: "Hari Kiamat pasti?",
    options: ["Seru", "Menyeramkan", "Terjadi", "Ditunda"],
    answer: "Terjadi",
  },
  {
    question: "Bagaimana suara biola?",
    options: [
      "Tetttttttttttt",
      "Treteteteteeteteetttt",
      "Dretdetdetdett",
      "Tung",
    ],
    answer: "Tung",
  },
  {
    question: "Bagaimana orang korea kalo Capslock?",
    options: [
      "Pake Romanji JAEBAL",
      "Pake Romanji VERNON",
      "Tidak ada",
      "Gabisa",
    ],
    answer: "Gabisa",
  },
  {
    question: "Jam diciptakan pada jam berapa?",
    options: ["00.00", "00.06", "00.07", "12.00"],
    answer: "00.06",
  },
  {
    question:
      "Jika bayi dikandungan menghabiskan 9 bulan, kenapa pas lahir tidak umur 9 bulan?",
    options: [
      "Karena beda alam",
      "Karna belom sempurna",
      "Terhitung tapi tidak terhitung",
      "Tidak tau",
    ],
    answer: "Tidak tau",
  },
  {
    question: "Bagaimanakah rasa bubur ayam ketika di aduk?",
    options: [
      "Seperti bubur",
      "Huekkk",
      "Enak",
      "Sama seperti bubur tidak di aduk",
    ],
    answer: "Huekkk",
  },
  {
    question: "Apa yang akan terjadi ketika fans messi dan ronaldo bertemu?",
    options: ["Tidak akur", "Kiamat", "Adu Tembak", "Berantem"],
    answer: "Adu Tembak",
  },
  {
    question: "Apakah Ronaldo pernah mencetak gol?",
    options: ["Hanya sekali", "Hanya dribing", "Tidak Pernah", "Mungkin"],
    answer: "Hanya sekali",
  },
];

function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
}

questions.forEach((question) => {
  shuffleOptions(question.options);
});

let currentQuestion = 0;
let score = 0;

const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const retryButton = document.getElementById("retry-btn");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");
const quizNumberElement = document.getElementById("quiz-number");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  const currentQuizQuestion = questions[currentQuestion];
  questionElement.textContent = currentQuizQuestion.question;
  quizNumberElement.textContent = `Quiz ke-${currentQuestion + 1} dari 40 Quiz`;
  optionsElement.innerHTML = "";

  const shuffledOptions = [...currentQuizQuestion.options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", checkAnswer);
    optionsElement.appendChild(button);
  });

  nextButton.disabled = true;
}

function startQuiz() {
  startButton.style.display = "none";
  nextButton.style.display = "inline-block";
  scoreElement.style.display = "block";
  resultElement.textContent = "";
  loadQuestion();
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const currentQuizQuestion = questions[currentQuestion];

  if (selectedOption.textContent === currentQuizQuestion.answer) {
    score++;
    selectedOption.style.backgroundColor = "green";
  } else {
    selectedOption.style.backgroundColor = "red";
  }

  Array.from(optionsElement.children).forEach((option) => {
    option.disabled = true;

    if (option.textContent === currentQuizQuestion.answer) {
      option.style.backgroundColor = "green";
    }
  });

  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion === questions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

function showResult() {
  const percentage = (score / questions.length) * 100;
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  nextButton.style.display = "none";
  scoreElement.style.display = "none";
  retryButton.style.display = "inline-block";
  quizNumberElement.textContent = "";

  let message = "";
  if (percentage >= 1 && percentage <= 10) {
    message = "Anda rendahan,";
  } else if (percentage <= 20) {
    message = "Anda lumayan bego ternyata,";
  } else if (percentage <= 30) {
    message = "Anda jenius tapi masi tolol,";
  } else if (percentage <= 40) {
    message = "Anda melebihi jenius tapi boong,";
  } else if (percentage <= 50) {
    message = "Anda legend tapi masi tolol,";
  } else if (percentage <= 60) {
    message = "Anda profesional tapi bego si,";
  } else if (percentage <= 70) {
    message = "fiks anda fans Emyu,";
  } else if (percentage <= 80) {
    message = "Not bad lah pasti fans messi,";
  } else if (percentage <= 90) {
    message = "Anda pasti fans dodo,";
  } else if (percentage <= 99) {
    message = "dikit lagi tolol,";
  } else {
    message =
      "Selamat! Anda berhasil menyelesaikan challenge ini dengan sempurna silakan Screenshoot ini dan kirim ke wa kami";
  }

  resultElement.textContent = `${message} Skor Anda: ${percentage.toFixed(2)}%`;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  shuffleArray(questions);
  startButton.style.display = "inline-block";
  nextButton.style.display = "none";
  scoreElement.style.display = "none";
  retryButton.style.display = "none";
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
retryButton.addEventListener("click", resetQuiz);

resetQuiz();
