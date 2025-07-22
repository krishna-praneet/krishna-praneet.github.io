var darkModeEnabled = false;
function toggleDarkMode() {
  const element = document.getElementsByTagName("html").item(0)
  if (darkModeEnabled) {
    element.removeAttribute("data-bs-theme")
  } else {
    element.setAttribute("data-bs-theme", "dark")
  }
  darkModeEnabled = !darkModeEnabled 
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const text = "kgudipaty[at]umass[dot]edu";
  const el = document.getElementById("typewriter-email");
  let i = 0;
  let timeoutId = null;

  function typeWriter() {
    if (i <= text.length) {
      el.textContent = text.substring(0, i);
      el.classList.add("typewriter-cursor");
      i++;
      timeoutId = setTimeout(typeWriter, 70); // speed in ms
    } else {
      el.classList.remove("typewriter-cursor");
      timeoutId = null;
    }
  }

  function startTypewriter() {
    if (timeoutId) clearTimeout(timeoutId);
    i = 0;
    typeWriter();
  }

  el.addEventListener("click", startTypewriter);
  typeWriter();

  // Add new handler for the Bio header
  var bioHeader = document.getElementById('hr-trigger');
  if (bioHeader) {
    bioHeader.addEventListener('click', function() {
      var hr = bioHeader.nextElementSibling;
      if (hr && hr.classList.contains('hr-left')) {
        hr.classList.add('move-right');
        setTimeout(function() {
          hr.classList.remove('move-right');
        }, 500); // match the transition duration
      }
    });
  }

  const img = document.getElementById('profile-pic');
  let spinning = false;
  let velocity = 0;
  let rotation = 0;
  let animationFrameId = null;

  function spin() {
    if (spinning) {
      // Accelerate up to a max speed
      velocity += 0.1;
      if (velocity > 10) velocity = 10;
    } else {
      // Decelerate smoothly
      velocity *= 0.95;
      if (Math.abs(velocity) < 0.01) velocity = 0;
    }
    rotation += velocity;
    img.style.transform = `rotate(${rotation}deg)`;

    if (velocity !== 0) {
      animationFrameId = requestAnimationFrame(spin);
    } else {
      animationFrameId = null;
    }
  }

  if (img) {
    img.addEventListener('mousedown', function() {
      spinning = true;
      if (!animationFrameId) spin();
    });

    document.addEventListener('mouseup', function() {
      spinning = false;
    });

    // Optional: Touch support
    img.addEventListener('touchstart', function(e) {
      spinning = true;
      if (!animationFrameId) spin();
      e.preventDefault();
    });

    document.addEventListener('touchend', function() {
      spinning = false;
    });
  }
});
