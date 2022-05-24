export function InViewPortHandler(elements, className) {
  elements.forEach((element) => {
    if(element){
      const bounding = element.getBoundingClientRect();
      const windowHeight =  window.innerHeight || document.documentElement.clientHeight

      if(
        bounding.top >= 0 &&
        bounding.bottom <= windowHeight
      ){
        if(!Array.from(element.classList).includes(className)){
          element.classList.add(className);
        }
      }
      if(
        bounding.top >= windowHeight ||
        bounding.bottom <= 0
      ){
        if(Array.from(element.classList).includes(className)){
          element.classList.remove(className);
        }
      }
    }
  })
}
