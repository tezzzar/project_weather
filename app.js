// class Article {
//   constructor(temp, pressure, description, humidity, speed, deg, icon) {
//     this.temp = temp;
//     this.pressure = pressure;
//     this.description = description;
//     this.humidity = humidity;
//     this.speed = speed;
//     this.deg = deg;
//     this.icon = icon;
//     this.parent = document.querySelector(".articles");
//   }
//   render() {
//     let article = document.createElement("article");
//     article.classList.add("col-6");
//     article.innerHTML = `
//     <div class="article">
//                 <h2 class="article-title">${this.id}. ${this.title}</h2>
//                 <p class="article-description">${this.desc}</p>
//     </div>`;
//     this.parent.append(article);
//   }
// }

let apiKey = "ca1549cfb7910eb3e2baca706acee596";
let city = "Kyiv";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.weather[0].description);
    document.querySelector(".temp").innerHTML =
      "Температура - " + Math.round(data.main.temp) + "&deg;";

    document.querySelector(".pressure").innerHTML =
      "Атмосферний тиск - " + Math.round(data.main.pressure) + " мм р/с";

    document.querySelector(".description").innerHTML =
      data.weather[0].description;

    document.querySelector(".humidity").innerHTML =
      "Вологість - " + data.main.humidity + " %";

    document.querySelector(".speed").innerHTML =
      "Швидкість вітру - " + data.wind.speed;

    document.querySelector(".deg").innerHTML =
      "напрямок вітру - " + data.wind.deg;

    document.querySelector(
      ".icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  });
