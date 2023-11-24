// Header JS
const input = document.getElementById("searchInput");
const message = document.getElementById("message");

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
      circleColor: '#FF5391'
  },
  {
      id: 2,
      title: 'Kabul ve Değerlendirme',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'left',
      image: '../Assets/Star.png',
      circleColor: '#7553FF'
  },
  {
      id: 3,
      title: 'İş Kuralları Analizi',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/Crown.png',
      circleColor: '#53C1FF'
  },
  {
      id: 4,
      title: 'Akış Diyagramları',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'left',
      image: '../Assets/ChartBar.png',
      circleColor: '#53C1FF'
  },
  {
      id: 5,
      title: 'Paydaş Analizi',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/ChartPieSlice.png',
      circleColor: '#FF5353'
  },
  {
      id: 6,
      title: 'Prototipleme',
      desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
      circlePos: 'right',
      image: '../Assets/FigmaLogo.png',
      circleColor: '#FFBA53'
  }
];

function handleWrapp() {
    data.map((item) => {
    wrapper.innerHTML += `
      <div class='yonetim__card'>
        <div class='yonetim__card_header'>
          <img src='${item.image}' />
        </div>
        <div class='yonetim__card_body'>
          <h1>${item.title}</h1>
        </div>
      </div>
    `
  })
  console.log(data)
}

handleWrapp()