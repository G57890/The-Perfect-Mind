      const slider = document.querySelector(".slider");
      let slideIndex = 0;

      const scoreDisplay = document.getElementById("score");
      const scoreButtons = document.querySelectorAll(".score-btn");
      let score = 0;

      // Wrong answer buttons for test 1
      function disableButtons1() {
        var buttons = document.querySelectorAll(".button-container1 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      }

      // Wrong answer buttons for test 2
      function disableButtons2() {
        var buttons = document.querySelectorAll(".button-container2 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      }

      // Wrong answer buttons for test 3
      function disableButtons3() {
        var buttons = document.querySelectorAll(".button-container3 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      }

      // Wrong answer buttons for test 4
      function disableButtons4() {
        var buttons = document.querySelectorAll(".button-container4 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      }

      // Wrong answer buttons for test 5
      function disableButtons5() {
        var buttons = document.querySelectorAll(".button-container5 button");
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      }

       // Right answer button for all tests
scoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (!button.classList.contains("disabled")) {
            score++;
            scoreDisplay.textContent = score;

            button.classList.add("disabled");
            button.disabled = true;

            if (button.classList.contains("score-btn")) {
                // Increase font size with transition only when the button is disabled
                scoreDisplay.style.transition = "font-size 0.3s ease-in-out";
                scoreDisplay.style.fontSize = "80px";

                setTimeout(() => {
                    scoreDisplay.style.fontSize = "60px"; // Return font size back to 60px
                    scoreDisplay.style.transition = ""; // Reset transition
                }, 300); // Reset font size after 0.3s
            }
        }
    });
});

      // Transfering the Score to the start menu
      function transferScore() {
        localStorage.setItem("lastScore", score);
        window.location.href = "index1.html";
      }
      // Next and Previous buttons
      function slideNext() {
        slideIndex = (slideIndex + 1) % 6;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      }

      function slidePrev() {
        slideIndex = (slideIndex - 1 + 6) % 6;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      }