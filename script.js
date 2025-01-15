
let prankStep = 0;
      
        function prankStep1() {
          prankStep++;
          const button = document.getElementById("prankButton");
          const message = document.getElementById("message");
      
          if (prankStep === 1) {
            message.textContent = "Wait... Did you think it would be that easy? Try again!";
            button.textContent = "🤔 Click Again! 🤔";
          } else if (prankStep === 2) {
            message.textContent = "Are you sure you’re ready for this? It’s HUGE!";
            button.textContent = "😅 One More Time! 😅";
          } else if (prankStep === 3) {
            message.textContent = "Okay, okay, last time... I promise. Or do I?";
            button.textContent = "😏 Click Now! 😏";
          } else if (prankStep === 4) {
            message.textContent = "You’re too persistent! Fine, here’s your surprise!";
            button.textContent = "🎁 Show Me the Surprise! 🎁";
            button.setAttribute("onclick", "showSurprise()");
          }
        }
      
        function showSurprise() {
          document.getElementById("surprise-content").style.display = "block";
          document.getElementById("prankButton").style.display = "none";
          document.getElementById("message").textContent = "";
        }