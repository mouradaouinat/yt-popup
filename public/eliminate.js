const elements = ['ytd-enforcement-message-view-model', 'tp-yt-iron-overlay-backdrop'];

console.log(window.host)

elements.forEach(element => {
    console.log("eliminating ...", element)
    try {
        document.querySelector(element).style.display = "none"
    } catch (e) {
        // do nothing...
    }
})

const icons = document.querySelectorAll(".style-scope.ytd-logo")

icons.forEach(item => {
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1024px-Pornhub-logo.svg.png';

    // item.style.position = 'relative'



    img.style.width = '100%'
    img.style.height = 'auto'

    console.log('attempting to replace the image...');
    item.replaceChildren(img)
})

console.log('Popups eliminated');