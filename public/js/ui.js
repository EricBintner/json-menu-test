// ui - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - -

// click handler from nav li
ui = (title, nav_i, subnav_i) => {

  // MAKE placeholder headline from JSON
  makeTitle = () => {
    document.getElementById('page-title').innerHTML = title
  }


  // Controls mobile nav slide checkbox, closes IF open
  closeNav = () => {
    cbox = document.getElementById('main-nav-toggle')
    cbox.checked ? cbox.checked = false : false
  }

  // Remove .open to close all primary navs
  let removeOpenClass = document.querySelectorAll('.nav-item_primary:not(#primary_'+nav_i+')')
  if ( removeOpenClass ) {
    let i;
    for (i = 0; i < removeOpenClass.length; i++) {
      removeOpenClass[i].classList.remove('open')
    }
  }

  // Remove .selected to un-highlight all primary and secondary navs
  const removeSelectedClass = document.getElementsByClassName('selectable')
  if ( removeSelectedClass ) {
    let i;
    for (i = 0; i < removeSelectedClass.length; i++) {
      removeSelectedClass[i].classList.remove('selected')
    }
  }
  // Remove .nav-open
  const bodyOpen = document.getElementsByTagName("body")[0].classList
  bodyOpen.remove('nav-open')


  // Main nav checkboxs for state control, classes for style and animation
  if (subnav_i === undefined) {
    // PRIMARY NAV
    let current_cbox = document.getElementById('item-nav-toggle-primary_'+nav_i)
    let current_li = document.getElementById('primary_'+nav_i)
    let navLi = current_li.classList
    let secondaryList = document.getElementById('secondary_'+nav_i).children.length

    if ( secondaryList === 0 ) {
      // Select primary nav and Close main nav if there is no secondary nav to open
      current_cbox.checked = true
      navLi.add('selected', 'open')
      bodyOpen.add('nav-open')
      makeTitle()
      closeNav()
      current_cbox.classList.add('no-children')//this is NOT the best way to do this, should NOT be called each UI click...
    } else {
      // check if secondary nav is open, toggle it
      if ( !current_cbox.checked  && !navLi.contains('open') ) {
        current_cbox.checked = true
        navLi.add('selected', 'open')
        bodyOpen.add('nav-open')
      } else {
        current_cbox.checked = false
        navLi.remove('selected', 'open')
        bodyOpen.add('nav-open')
      }
    }
  } else {
    // SECONDARY NAV
    current_cbox = document.getElementById('item-nav-toggle-secondary_'+nav_i+'-'+subnav_i)
    current_cbox.checked = true
    current_li = document.getElementById('secondary_'+nav_i+'-'+subnav_i)
    current_li.classList.add('selected')
    //bodyOpen.remove('nav-open')
    document.getElementById('primary_'+nav_i).classList.remove('open')
    makeTitle()
    closeNav()
  }

} // end ui()
