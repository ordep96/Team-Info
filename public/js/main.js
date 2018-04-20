'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var containerTeam = document.querySelector('.container-team'),
    wrapper = document.querySelector('.wrapper'),
    btnClose = document.querySelector('.btn-close'),
    overlay = document.querySelector('.overlay'),
    membersInfo = [].concat(_toConsumableArray(document.querySelectorAll('.member-info'))),
    body = document.body;

var closeInfo = function closeInfo(e) {
  e.preventDefault();
  wrapper.classList.remove("slideOut");
  overlay.classList.remove("overlayActive");
  membersInfo.map(function (info) {
    return info.classList.remove("slideIn");
  });
  btnClose.classList.remove("isActive");
  body.classList.remove("overflow-hidden");
};

var openInfo = function openInfo(e) {
  var target = e.target;

  if (target.className.includes("member")) {
    var memberSelected = target.getAttribute("data-type");

    membersInfo.map(function (info) {
      if (info.className.includes(memberSelected)) {
        wrapper.classList.add("slideOut");
        info.classList.add("slideIn");
        overlay.classList.add("overlayActive");
        btnClose.classList.add("isActive");
        body.classList.add("overflow-hidden");
      }
    });
  }

  btnClose.addEventListener("click", closeInfo);
};

containerTeam.addEventListener("click", openInfo);