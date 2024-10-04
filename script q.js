      const slider = document.querySelector(".slider");
      let slideIndex = 0;

      const scoreDisplay = document.getElementById("score");
      const scoreButton1 = document.querySelectorAll(".score-btn1");
      const scoreButton2 = document.querySelectorAll(".score-btn2");
      const scoreButton3 = document.querySelectorAll(".score-btn3");
      const scoreButton4 = document.querySelectorAll(".score-btn4");
      const scoreButton5 = document.querySelectorAll(".score-btn5");
      let score = 0;

      // Wrong answer buttons for test 1
      function disableButtons1() {
        var buttons = document.querySelectorAll(".button-container1 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
        const correctElement = document.querySelector('.correct1');
        correctElement.textContent = 'X';
        correctElement.classList.add('active');

        setTimeout(() => {
          correctElement.classList.remove('active');
        }, 1500);
      }

      // Wrong answer buttons for test 2
      function disableButtons2() {
        var buttons = document.querySelectorAll(".button-container2 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
        const correctElement = document.querySelector('.correct2');
        correctElement.textContent = 'X';
        correctElement.classList.add('active');

        setTimeout(() => {
          correctElement.classList.remove('active');
        }, 1500);
      }

      // Wrong answer buttons for test 3
      function disableButtons3() {
        var buttons = document.querySelectorAll(".button-container3 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
        const correctElement = document.querySelector('.correct3');
        correctElement.textContent = 'X';
        correctElement.classList.add('active');

        setTimeout(() => {
          correctElement.classList.remove('active');
        }, 1500);
      }

      // Wrong answer buttons for test 4
      function disableButtons4() {
        var buttons = document.querySelectorAll(".button-container4 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
        const correctElement = document.querySelector('.correct4');
        correctElement.textContent = 'X';
        correctElement.classList.add('active');

        setTimeout(() => {
          correctElement.classList.remove('active');
        }, 1500);
      }

      // Wrong answer buttons for test 5
      function disableButtons5() {
        var buttons = document.querySelectorAll(".button-container5 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
        const correctElement = document.querySelector('.correct5');
        correctElement.textContent = 'X';
        correctElement.classList.add('active');

        setTimeout(() => {
          correctElement.classList.remove('active');
        }, 1500);
      }

      // Right answer button for test 1
      scoreButton1.forEach((button) => {
        button.addEventListener("click", function () {
          if (!button.classList.contains("disabled")) {
            score++;
            scoreDisplay.textContent = score;

            // disable wrong buttons
            var buttons = document.querySelectorAll(".button-container1 button");
            buttons.forEach(function (button) {
            button.disabled = true;
            });

            button.classList.add("disabled");
            button.disabled = true;

            const correctElement = button.closest('.button-container1').querySelector('.correct1');
            correctElement.classList.add('active');

            setTimeout(() => {
              correctElement.classList.remove('active');
            }, 1500);

            scoreDisplay.style.transition = "font-size 0.3s ease-in-out";
            scoreDisplay.style.fontSize = "80px";

            setTimeout(() => {
              scoreDisplay.style.fontSize = "60px";
              scoreDisplay.style.transition = "";
            }, 300);
          }
        });
      });

            // Right answer button for test 2
      scoreButton2.forEach((button) => {
        button.addEventListener("click", function () {
          if (!button.classList.contains("disabled")) {
            score++;
            scoreDisplay.textContent = score;

            // disable wrong buttons
            var buttons = document.querySelectorAll(".button-container2 button");
            buttons.forEach(function (button) {
            button.disabled = true;
            });

            button.classList.add("disabled");
            button.disabled = true;

            const correctElement = button.closest('.button-container2').querySelector('.correct2');
            correctElement.classList.add('active');

            setTimeout(() => {
              correctElement.classList.remove('active');
            }, 1500);

            scoreDisplay.style.transition = "font-size 0.3s ease-in-out";
            scoreDisplay.style.fontSize = "80px";

            setTimeout(() => {
              scoreDisplay.style.fontSize = "60px";
              scoreDisplay.style.transition = "";
            }, 300);
          }
        });
      });

        // Right answer button for test 3
      scoreButton3.forEach((button) => {
        button.addEventListener("click", function () {
          if (!button.classList.contains("disabled")) {
            score++;
            scoreDisplay.textContent = score;

            // disable wrong buttons
            var buttons = document.querySelectorAll(".button-container3 button");
            buttons.forEach(function (button) {
            button.disabled = true;
            });

            button.classList.add("disabled");
            button.disabled = true;

            const correctElement = button.closest('.button-container3').querySelector('.correct3');
            correctElement.classList.add('active');

            setTimeout(() => {
              correctElement.classList.remove('active');
            }, 1500);

            scoreDisplay.style.transition = "font-size 0.3s ease-in-out";
            scoreDisplay.style.fontSize = "80px";

            setTimeout(() => {
              scoreDisplay.style.fontSize = "60px";
              scoreDisplay.style.transition = "";
            }, 300);
          }
        });
      });
      
        // Right answer button for test 4
      scoreButton4.forEach((button) => {
        button.addEventListener("click", function () {
          if (!button.classList.contains("disabled")) {
            score++;
            scoreDisplay.textContent = score;

            // disable wrong buttons
            var buttons = document.querySelectorAll(".button-container4 button");
            buttons.forEach(function (button) {
            button.disabled = true;
            });

            button.classList.add("disabled");
            button.disabled = true;

            const correctElement = button.closest('.button-container4').querySelector('.correct4');
            correctElement.classList.add('active');

            setTimeout(() => {
              correctElement.classList.remove('active');
            }, 1500);

            scoreDisplay.style.transition = "font-size 0.3s ease-in-out";
            scoreDisplay.style.fontSize = "80px";

            setTimeout(() => {
              scoreDisplay.style.fontSize = "60px";
              scoreDisplay.style.transition = "";
            }, 300);
          }
        });
      });

        // Right answer button for test 5
      scoreButton5.forEach((button) => {
        button.addEventListener("click", function () {
          if (!button.classList.contains("disabled")) {
            score++;
            scoreDisplay.textContent = score;

            // disable wrong buttons
            var buttons = document.querySelectorAll(".button-container5 button");
            buttons.forEach(function (button) {
            button.disabled = true;
            });

            button.classList.add("disabled");
            button.disabled = true;

            const correctElement = button.closest('.button-container5').querySelector('.correct5');
            correctElement.classList.add('active');

            setTimeout(() => {
              correctElement.classList.remove('active');
            }, 1500);

            scoreDisplay.style.transition = "font-size 0.3s ease-in-out";
            scoreDisplay.style.fontSize = "80px";

            setTimeout(() => {
              scoreDisplay.style.fontSize = "60px";
              scoreDisplay.style.transition = "";
            }, 300);
          }
        });
      });

      function transferScore() {
        localStorage.setItem("lastScore", score);
        window.location.href = "index1.html";
      }

      function slideNext() {
        slideIndex = (slideIndex + 1) % 6;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      }

      function slidePrev() {
        slideIndex = (slideIndex - 1 + 6) % 6;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      }

      function handleCorrectAnswer(button) {
        button.disabled = true;
        const correctElement = document.querySelector('.correct');
        correctElement.classList.add('active');
        
        setTimeout(() => {
          correctElement.classList.remove('active');
        }, 1500);
      }
