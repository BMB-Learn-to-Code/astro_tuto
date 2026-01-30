const menu = document.querySelector(".menu");
console.log("menu", menu);

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  console.log(isExpanded);

  menu.setAttribute("aria-expanded", String(!isExpanded));
});
