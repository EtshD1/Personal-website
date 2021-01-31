(() => {
  // Anchor Tags
  const Anchors = {
    welcome: document.querySelector("[href='#welcome-section']"),
    projects: document.querySelector("[href='#projects']"),
    contact: document.querySelector("[href='#contact']"),
  }
  // Sections
  const Sections = {
    welcome: document.querySelector("#welcome-section"),
    projects: document.querySelector("#projects"),
    contact: document.querySelector("#contact")
  }
  // Smooth transition on click
  Anchors.welcome.addEventListener("click", (e) => {
    e.preventDefault();
    Sections.welcome.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  });
  Anchors.contact.addEventListener("click", (e) => {
    e.preventDefault();
    Sections.contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  });
  Anchors.projects.addEventListener("click", (e) => {
    e.preventDefault();
    Sections.projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  });
})()