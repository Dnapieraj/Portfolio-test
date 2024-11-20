const navLinks = document.querySelector('.nav__links')
const navBtn = document.querySelector('.nav__menu-icon')

const Navtoggle = () => {
	navBtn.onclick = () => {
		navLinks.classList.toggle('nav__links--active')
	}
}

navBtn.addEventListener('click', Navtoggle)
