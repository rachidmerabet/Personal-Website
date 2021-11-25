const toggleButton = document.getElementById('toggleBtn')
const navList = document.getElementById('navList')

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('active')
})
