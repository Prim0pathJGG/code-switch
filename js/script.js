

/*footer animation*/
const footer = document.querySelector('.footer__inner');
const footerSpans = footer.querySelectorAll('span');
const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
        footerSpans.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add('animate');
            }, index * 100);
        });
        observer.unobserve(footer);
            } 
        }); 
    },  {
    threshold: 0.1
    });     

     observer.observe(footer);


function copyCode() {
    const codeElement = document.querySelector('.code-container__code--active code');
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}

