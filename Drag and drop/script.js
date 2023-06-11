// Get the containers and the reset button
const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");
const resetBtn = document.getElementById("resetBtn");

// Store the initial items of container2 except h1
const container2Items = Array.from(container2.children).filter(
  (item) => item.tagName !== "H1"
);

// Add event listeners for drag and drop events
container1.addEventListener("dragstart", dragStart);
container2.addEventListener("dragover", dragOver);
container2.addEventListener("drop", drop);
container1.addEventListener("dragover", dragOver);
container1.addEventListener("drop", drop);
resetBtn.addEventListener("click", resetContainers);

// Store the dragged item and its initial container
let draggedItem = null;
let initialContainer = null;

// Function to handle drag start event
function dragStart(e) {
  draggedItem = e.target;
  initialContainer = e.target.parentNode;

  // Change the appearance of the dragged item
  e.target.style.opacity = "0.5";
}

// Function to handle drag over event
function dragOver(e) {
  e.preventDefault();
}

// Function to handle drop event
function drop(e) {
  e.preventDefault();

  container2.appendChild(draggedItem);

  // Reset the appearance of the dragged item
  draggedItem.style.opacity = "1";

  // Display success message or update the UI
  if (this === container2) {
    console.log("Item dropped into Container 2");
  } else {
    console.log("Item dropped back into Container 1");
  }
}

// Function to reset the containers
function resetContainers() {
  const container2Items = Array.from(container2.children);
  container2Items.forEach((item) => {
    container1.appendChild(item);
  });
}
