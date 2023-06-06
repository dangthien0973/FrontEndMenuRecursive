'use strict';
import {readAllItems,fetchData } from './Services/HttpService.js'

function addMenuItems(items, parentElement) {
  const ul = document.createElement("ul");
  
  items.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.name;
    li.appendChild(a);
  
    if (item.listsubMenuReponses.length > 0) {
      addMenuItems(item.listsubMenuReponses, li);
    }
  
    ul.appendChild(li);
  });
  
  parentElement.appendChild(ul);
}


async function getMenu() {
  try {
    var MenuItems = await fetchData("/Menu");
    const menuContainer = document.getElementById("menu-container");
    addMenuItems(MenuItems, menuContainer);
  } catch (error) {
    console.error(error);
  }
}
getMenu();




  