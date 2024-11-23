const navLinks = document.querySelector('.nav__links')
const navBtn = document.querySelector('.nav__menu-icon')
const footerYear = document.querySelector('.footer__year')

const Navtoggle = () => {
	navBtn.onclick = () => {
		navLinks.classList.toggle('nav__links--active')
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBtn.addEventListener('click', Navtoggle)
