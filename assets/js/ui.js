// ui - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - 
// click handler from nav li
ui = (title, nav_i, subnav_i) => {

  // MAKE placeholder headline from JSON
  document.getElementById('page-title').innerHTML = title

  // CONTROLS mobile nav slide checkbox, closes IF open
  closeNav = () => {
    cbox = document.getElementById('main-nav-toggle')
    if (cbox.checked === true) { 
      cbox.checked = false
    }
  }

  // Remove .open to close all primary navs
  const removeOpenClass = document.querySelectorAll('.nav-item_primary:not(#primary_'+nav_i+')')
  if (removeOpenClass !== undefined) { 
    let i;
    for (i = 0; i < removeOpenClass.length; i++) {
      removeOpenClass[i].classList.remove("open")
    }
  } else { console.log(removeOpenClass, " should be .open") }

  // Remove .selected to un-highlight all primary and secondary navs
  const removeSelectedClass = document.getElementsByClassName("selectable")
  if (removeSelectedClass !== undefined) { 
    //console.log(x)
    var i;
    for (i = 0; i < removeSelectedClass.length; i++) {
      removeSelectedClass[i].classList.remove("selected")
    }
  }

  let open = null
  let selected = null

  let cbox_current = ''
  let current = ''

  if (subnav_i === undefined) { 
    // PRIMARY NAV
    cbox_current = document.getElementById('item-nav-toggle-primary_'+nav_i)
    current = document.getElementById('primary_'+nav_i)
    ifSec = document.getElementById('item-nav-toggle-secondary_'+nav_i+'-0')
    if (ifSec === null) { 
      // Select primary nav and Close main nav if there is no secondary nav to open
      cbox_current.checked = true 
      current.classList.add("selected", "open")
      closeNav() 
    } else {
      // check if secondary nav is open, toggle it
      if (cbox_current.checked !== true) { 
        cbox_current.checked = true 
        current.classList.add("selected", "open")
      } else { 
        current.classList.remove("selected", "open")
      }
    }
  } else {
    // SECONDARY NAV
    cbox_current= document.getElementById('item-nav-toggle-secondary_'+nav_i+'-'+subnav_i)
    cbox_current.checked = true 
    current = document.getElementById('secondary_'+nav_i+'-'+subnav_i)
    current.classList.add("selected")

    closeNav() 
  }

} // end ui()