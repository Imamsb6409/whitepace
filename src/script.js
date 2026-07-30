function toggleNavbar() {
      var x = document.getElementById("myLinks");
      if (x.classList.contains("-translate-y-full")) {
        x.classList.remove("-translate-y-full");
      } else {
        x.classList.add("-translate-y-full");
      }
    }

    function toggleDarkMode() {
      var html = document.getElementById("html");
 var toggleIdle = document.getElementById("toggleIdle");
 var iconOnDarkMode = document.getElementById("iconOnDarkMode");
 var iconOnLightMode = document.getElementById("iconOnLightMode");
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        toggleIdle.classList.remove("translate-x-8");
        toggleIdle.classList.add("translate-x-0");
        iconOnDarkMode.classList.add("text-black");
        iconOnLightMode.classList.remove("text-black");
      } else {
        html.classList.add("dark");
        toggleIdle.classList.remove("translate-x-0");
        toggleIdle.classList.add("translate-x-8");
        iconOnDarkMode.classList.remove("text-black");
        iconOnLightMode.classList.add("text-black");
      }
    }