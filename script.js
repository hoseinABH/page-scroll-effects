// Change document title to current h1 textContent
const changeDocumentTitle = function (enteries) {
  if (enteries.length > 1 && enteries[1].isIntersecting) {
    document.title = enteries[1].target.textContent;
  } else if (enteries[0].isIntersecting) {
    document.title = enteries[0].target.textContent;
  } else {
    return;
  }

  console.log(enteries);
};

// Get all h1 elements in document
let headings = document.getElementsByTagName('h1');

// Initialize Intersection Observer
const observer = new IntersectionObserver(changeDocumentTitle);

// Check Each H1 element in document
[...headings].forEach((element) => {
  observer.observe(element);
});
