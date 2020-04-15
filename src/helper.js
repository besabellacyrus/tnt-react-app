export default {
  initializeHoverCopy: (className) => {
    const elements = document.querySelectorAll(className);
    console.log('initialize', className)

    elements.forEach(element => {
      element.addEventListener("mouseenter", (e) => {
        const elValue = e.path[0].innerText;

        e.target.insertAdjacentHTML("beforeend",
          `<i id='hover-copy' data-value="${elValue}" class='fa fa-copy'></i>`);
          const hover = document.querySelector('#hover-copy');

          if (hover) {
          hover.addEventListener("click", el => {
            const val = el.target.attributes['data-value'].value

            const createdEl = document.createElement('textarea');
            createdEl.value = val;
            document.body.appendChild(createdEl);
            createdEl.select();
            document.execCommand('copy');
            document.body.removeChild(createdEl);
          })
        }
      });

      element.addEventListener("mouseleave", (e) => {
        console.log('removed')
        if (e.target.children[0]) {
          e.target.children[0].remove();
        }
      });
    });

  },

  copyToClipboard: (e) => {
    if (e.target.attributes['data-value']) {
      const val = e.target.attributes['data-value'].value
      const el = document.createElement('textarea');
      el.value = val;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
}