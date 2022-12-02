import * as params from '@params';

document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.childNodes[3].classList.toggle('is-hidden');
			showEmail();
		});
	}
});

let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function printPdf(name) {
	const { jsPDF } = window.jspdf;
	var source = document.getElementById("book");
	console.log(source);
	const doc = new jsPDF('p','mm',[297, 210]);
	doc.html(source, {
		callback: function(doc) {
			// Save the PDF
			window.open(URL.createObjectURL(doc.output("blob")))
		},
		x: 0,
    y: -8,
    width: 210, //target width in the PDF document
    windowWidth: 805, //window width in CSS pixels,
	});
}

const toggleBurger = () => {
	let burgerIcon = document.getElementById('burger');
	let dropMenu = document.getElementById('menu');
	burgerIcon.classList.toggle('is-active');
	dropMenu.classList.toggle('is-active');
};

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function showEmail() {

	if (!!document.getElementById("liame").innerText) {
		return;
	}

	const a = 0x20;
	if (isInViewport(document.getElementById("contact"))) {
	
		const liame =  params.email;
		const liameTxt = [liame.length];
		const fn = (code, char, idx, timeout = 15) => {

			liameTxt[idx] = String.fromCharCode(code);
			document.getElementById("liame").innerText = liameTxt.join("");
			if (code < char) {
				code++;
				if (code % 10 == 0) {
					timeout++;
				}
				setTimeout(() => fn(code, char, idx, timeout), timeout);
			}
		};
		
		for (var i = 0; i < liame.length; i++) {
			fn(a, liame[i], i);
		}
	}
}

window.onload = function()
{
   window.onscroll = function()
   {
      showEmail();
   }
}