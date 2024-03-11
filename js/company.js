document.addEventListener("DOMContentLoaded", function () {
    const tabsBtns = document.querySelectorAll(".tabs_nav button");

    const tabsItem = document.querySelectorAll(".tabs_item");
    function hideTabs() {
        tabsItem.forEach(item => item.classList.add("hide"));
        tabsBtns.forEach(item => item.classList.remove("active"));

    }
    function showTab(index) {
        tabsItem[index].classList.remove("hide");
        tabsBtns[index].classList.add("active");

    }

    hideTabs()
    showTab(0)

    tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
        hideTabs();
        showTab(index);
    }));
});
document.addEventListener("DOMContentLoaded", function () {

    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("button")) {
        var buttonToClick = decodeURIComponent(urlParams.get("button"));
        var buttonToClick = urlParams.get("button");

        var buttons = document.querySelectorAll('.tabs_nav button');
        buttons.forEach(function (button) {
            if (button.innerText === buttonToClick) {
                button.click();
            }
        });
    }

});


function zoomIn(image) {
    image.style.transform = 'scale(2)';
}

function zoomOut(image) {
    image.style.transform = 'scale(1)';
}
function zoomInOut(container) {
    if (container.style.transform === 'scale(2)') {
        zoomOut(container);
    } else {
        zoomIn(container);
    }
}

function zoomIn(container) {
    container.style.transform = 'scale(2)';
}

function zoomOut(container) {
    container.style.transform = 'scale(1)';
}

