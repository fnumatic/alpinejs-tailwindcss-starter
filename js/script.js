document.addEventListener("alpine:init", () => {
  Alpine.store("data", {
    topic: "Alpine Tailwind Starter",
  });
});

const data = () => Alpine.store("data")

