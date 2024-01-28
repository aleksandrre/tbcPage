let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let dots = document.querySelectorAll(".dot");
let scrollWidth = scrollContainer.scrollWidth;
let slideIndex = 0;

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";

  if (scrollContainer.scrollLeft >= scrollWidth - scrollContainer.clientWidth) {
    scrollContainer.scrollLeft = 0;
    slideIndex = 0;
  } else {
    scrollContainer.scrollLeft += 900;
    slideIndex++;
  }

  updateDots();
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";

  if (scrollContainer.scrollLeft === 0) {
    scrollContainer.scrollLeft = scrollWidth - scrollContainer.clientWidth;
    slideIndex = dots.length - 1;
  } else {
    scrollContainer.scrollLeft -= 900;
    slideIndex--;
  }

  updateDots();
});

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

// question logic
function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);

  // Hide all answers
  var allAnswers = document.querySelectorAll(".answer");
  allAnswers.forEach(function (element) {
    if (element.id !== answerId) {
      element.style.display = "none";
    }
  });

  // Toggle the selected answer
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// courses
const componentData = [
  {
    imageSrc: "tbcimages/img11.jpg",
    title: "Component 1",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img12.jpg",
    title: "Component 2",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img13.jpg",
    title: "Component 3",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img13.jpg",
    title: "Component 4",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img14.jpg",
    title: "Component 5",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img15.jpg",
    title: "Component 6",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img16.jpg",
    title: "Component 6",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img17.jpg",
    title: "Component 6",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
  {
    imageSrc: "tbcimages/img18.jpg",
    title: "Component 6",
    registrationTitle: "რეგისტრაცია დასრულებულია",
  },
];

function createComponent(imageSrc, title, registrationInfo) {
  const component = document.createElement("div");
  component.className = "component";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.className = "componentimg";
  component.appendChild(image);

  const titleLabel = document.createElement("h3");
  titleLabel.textContent = title;
  component.appendChild(titleLabel);

  const registrationText = document.createElement("h4");
  registrationText.textContent = registrationInfo;
  component.appendChild(registrationText);

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "detailsDiv";
  component.appendChild(detailsDiv);

  const iconElement = document.createElement("i");
  iconElement.className = "fa-sharp fa-solid fa-arrow-right";
  detailsDiv.appendChild(iconElement);

  const courseLabel = document.createElement("h5");
  courseLabel.textContent = "კურსის დეტალები";
  detailsDiv.appendChild(courseLabel);

  return component;
}
const appContainer = document.getElementById("coursesDiv");

componentData.forEach((data) => {
  const component = createComponent(
    data.imageSrc,
    data.title,
    data.registrationTitle
  );
  appContainer.appendChild(component);
});

// navabr
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
