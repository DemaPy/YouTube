const new__btn = document.createElement("button");
const new__text = document.createTextNode("Skip add");
new__btn.appendChild(new__text);
const element = document.querySelector("#top-level-buttons-computed");
element.appendChild(new__btn);

new__btn.classList.add('new_btn')

new__btn.addEventListener('click', func => {
    var elem = document.querySelector('.ytp-ad-skip-button')
    if (elem) {
        document.querySelector('.ytp-ad-skip-button').click()
        console.log("t.me/WNDKND")
    } else {
        console.log('in development')
    }
})
