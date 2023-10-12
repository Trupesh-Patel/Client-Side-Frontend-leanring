var presentedSlide = 0;
const slide = document.querySelectorAll('.Page');

function moveSlide(index) {
  if (index < 0) {
	index = 0; 
  }
  if (index >= slide.length) {
	index = slide.length - 1;;
  }
  for (let i = 0; i < slide.length; i++) {
	slide[i].style.display = 'none';
  }
  slide[index].style.display = 'block';
  presentedSlide = index;
}
function prevPage() {
  moveSlide(presentedSlide - 1);
}
function nextPage() {
  moveSlide(presentedSlide + 1);
}
moveSlide(presentedSlide);