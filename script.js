function buttonalert(){
    alert("Cheng Ho merupakan kumpulan dari 4 manusia yang ingin mengasah dan mengembangkan kemampuan melalui CyberAcademy 2022 dengan motto hidup Sat Set Sat Set Kelar.")
}
let weather = {
    apiKey: "21593729ed9c09d28674dcff6e9b81aa",
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => {
          if (!response.ok) {
            alert("Data tidak ditemukan!");
            throw new Error("Data tidak ditemukan!");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "Cuaca di " + name;
      document.querySelector(".icon-weather").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".desc").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Kelembaban: " + humidity + "%";
      document.querySelector(".wind").innerText = "Kecepatan angin: " + speed + "km/h";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  weather.fetchWeather("Bandung");
  