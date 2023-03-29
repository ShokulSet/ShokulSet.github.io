const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log("Showed");

        } else { 
            entry.target.classList.remove('show');
            console.log("Hid");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let replacements = {
    "email":"settapun.work@gmail.com",
    "call":"090-919-6441",
    "Instagram":"@sh0kul",
    "Line":"@shokul49",
    "Github":"ShokulSet",
    "Discord":"Shokul#3557"
};

function replaceText(event) {
    let span = event.target;
    let content = span.innerText || span.textContent;
    let replacement = replacements[content];

    if (replacement) {
        span.setAttribute("data-original-text", content);
        span.innerHTML = replacement;
    }
}

function restoreText(event) {
    let span = event.target;
    let originalText = span.getAttribute("data-original-text");

    if (originalText) {
        span.innerHTML = originalText;
        span.removeAttribute("data-original-text");
    }
}