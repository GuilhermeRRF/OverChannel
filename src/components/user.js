
/*menu dropdwan*/


import React from 'react';

function MenuComponent() {
  function toggleDropdown() {
    
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
}
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}

  function menuToggle() {
     /*Usuario*/ 
  function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
} 


  // O restante do seu componente JSX
  return (
    <div>
      {/* JSX do seu componente */}
      <button className="dropbtn" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {/* Resto do código */}
      <button className="menu" onClick={menuToggle}>
        Toggle User Menu
      </button>
    </div>
  );
}

export default MenuComponent;