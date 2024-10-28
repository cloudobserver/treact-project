const showMenu = (params) => {
  document.body.classList += ' menu--open'
  console.log('openMenu')
}

const hideMenu = (params) => {
  document.body.classList.remove('menu--open')

  console.log('closeMenu')
}
