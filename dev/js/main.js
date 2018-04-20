let containerTeam = document.querySelector('.container-team'),
    wrapper = document.querySelector('.wrapper'),
    btnClose = document.querySelector('.btn-close'),
    overlay = document.querySelector('.overlay'),
    membersInfo = [...document.querySelectorAll('.member-info')],
    body = document.body;


const closeInfo = e => {
  e.preventDefault();
  wrapper.classList.remove("slideOut");
  overlay.classList.remove("overlayActive");
  membersInfo.map(info => info.classList.remove("slideIn"));
  btnClose.classList.remove("isActive");
  body.classList.remove("overflow-hidden");
}


const openInfo = e => {
  let target = e.target;

  if(target.className.includes("member")){
      let memberSelected = target.getAttribute("data-type");

      membersInfo.map(info => {
         if( info.className.includes(memberSelected) ){
            wrapper.classList.add("slideOut");
            info.classList.add("slideIn");
            overlay.classList.add("overlayActive");
            btnClose.classList.add("isActive");
            body.classList.add("overflow-hidden");
         }

      })
  }

  btnClose.addEventListener("click", closeInfo);


}



containerTeam.addEventListener("click", openInfo);
