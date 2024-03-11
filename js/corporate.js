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
        var buttonToClick = urlParams.get("button");

        var buttons = document.querySelectorAll('.tabs_nav button');
        buttons.forEach(function (button) {
            if (button.innerText === buttonToClick) {
                button.click();
            }
        });
    }
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // Для поддержки браузеров
    document.documentElement.scrollTop = 0; // Для современных браузеров
});
});

