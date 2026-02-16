document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("click", () => {
    const subTree = folder.nextElementSibling;

    if (subTree) {
      subTree.classList.toggle("active");
      folder.classList.toggle("open");
    }
  });
});
