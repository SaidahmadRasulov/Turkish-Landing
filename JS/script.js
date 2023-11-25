// Header JS
const input = document.getElementById("searchInput");
const message = document.getElementById("message");
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.media__nav_content');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    navbar.classList.add('fixed')
  } else {
    navbar.classList.remove('fixed')
  }
})

function handleToggle() {
  hamburger.classList.toggle('hidden')
}

function Submit() {
  if (input.value !== "") {
    message.innerHTML = `<p class="green_message">
    Message send successfully 
    <i class='bx bxs-check-circle'></i>
    </p>`;
    message.style.bottom = "2rem";
    message.style.background = "rgb(40, 138, 40)";
    setTimeout(() => {
      message.innerHTML = "";
      message.style.bottom = "-600px";
    }, 2000);
    if(!input.value.includes('@')) {
      message.innerHTML = `<p class='warning_message'>Please write correct email!</p>`
      message.style.backgroundColor = 'rgb(255, 174, 0)'
    }
  } else {
    message.innerHTML = `<p class="red_message">
    Please fill the input!
    <i class='bx bxs-x-circle'></i>
    </p>`;
    message.style.bottom = "2rem";
    message.style.backgroundColor = "#F84646";
    setTimeout(() => {
      message.innerHTML = "";
      message.style.bottom = "-600px";
    }, 2000);
  }
  input.value = "";
}
// ~~~~~~~~~~~~~~~~~~~~~~~

// Yonetim JS
const wrapper = document.getElementById('wrapping_content');
const data =[
  {
      id: 1,
      title: 'Döküman Analizi',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/File.png',
      circleColor: '#ff5392c0'
  },
  {
      id: 2,
      title: 'Kabul ve Değerlendirme',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'left',
      image: '../Assets/Star.png',
      circleColor: '#7553ffad'
  },
  {
      id: 3,
      title: 'İş Kuralları Analizi',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/Crown.png',
      circleColor: '#53c0ffa7'
  },
  {
      id: 4,
      title: 'Akış Diyagramları',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'left',
      image: '../Assets/ChartBar.png',
      circleColor: '#53c0ffa8'
  },
  {
      id: 5,
      title: 'Paydaş Analizi',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/ChartPieSlice.png',
      circleColor: '#ff5353b0',
      top: '-.5rem'
  },
  {
      id: 6,
      title: 'Prototipleme',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/FigmaLogo.png',
      circleColor: '#ffba53b9',
      top: '-.5rem'
  }
];

function handleWrapp() {
    data.map((item) => {
    wrapper.innerHTML += `
      <div class='yonetim__card'>
        <div class='yonetim__card_header'>
          <img src='${item.image}' />
          <div class='yonetim__card_circle' style='background: ${item.circleColor};${item.circlePos}: 40%; top: ${item.top};'></div>
        </div>
        <div class='yonetim__card_body'>
          <h1>${item.title}</h1>
          <p>${item.desc}</p>
        </div>
      </div>
    `
  })
  console.log(data)
}

handleWrapp()