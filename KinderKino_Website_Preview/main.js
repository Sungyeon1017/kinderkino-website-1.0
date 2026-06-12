function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const expanded = content.style.display === "block";
  content.style.display = expanded ? "none" : "block";
}

function scrollToInbound() {
  const target = document.getElementById("inbound-anchor");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}
