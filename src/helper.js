export default {
  initializeHoverCopy: (className) => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
      element.addEventListener("mouseenter", (e) => {
        const elValue = e.path[0].innerText;
        e.target.insertAdjacentHTML("beforeend",
          `<i id='hover-copy' data-value="${elValue}" class='fa fa-copy'></i>`);
      });
      element.addEventListener("mouseleave", (e) => {
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