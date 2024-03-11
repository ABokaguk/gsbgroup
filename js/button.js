const tabsBtns = document.querySelectorAll(".main_button");
const tabsItem = document.querySelectorAll(".tabs_item");

function hideTabs() {
    tabsItem.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(btn => btn.classList.remove("active"));
}

function showTab(index) {
    tabsItem[index].classList.remove("hide");
    tabsBtns[index - 1].classList.add("active");
}
function showTab(index) {
    tabsItem[index].classList.remove("hide");
    tabsBtns.forEach(btn => btn.classList.remove("active")); 
    tabsBtns[index - 1].classList.add("active"); 
}

hideTabs();
tabsItem[0].classList.remove("hide");

document.querySelector(".services_body").addEventListener("click", (event) => {
    const target = event.target.closest(".main_button");
    if (!target) return;

    const index = Array.from(tabsBtns).indexOf(target) + 1;
    hideTabs();
    showTab(index); 
});