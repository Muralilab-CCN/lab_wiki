document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(function (link) {
    if (link.hostname && link.hostname !== location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    }
  });
});
