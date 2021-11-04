export class DatePickerController {
  static getElementIndex(
    e: MouseEvent,
    element: HTMLElement,
    array: (string | number)[]
  ): number {
    if (!(e.target instanceof HTMLElement)) {
      throw new Error("Element must be of type HTMLElement");
    }
    
    const target = e.target;
    let scrollTop = target.scrollTop;

    const paragraphHeight = 36;
    const paragraphCenter = paragraphHeight / 2;

    const index =
    scrollTop <= paragraphCenter
    ? 0
    : Math.round((scrollTop - paragraphCenter) / paragraphHeight);
    
    DatePickerController.changeParagraphOpacity(element, array[index]);

    return index;
  }

  static changeParagraphOpacity(element: HTMLElement, item: string | number) {
    for (const p of element.querySelectorAll("p")) {
      if (p.textContent === `${item}`) {
        p.style.opacity = "1";
      } else {
        p.style.opacity = "0.2";
      }
    }
  }

  static createParagraphs(container: HTMLElement, array: (string | number)[]) {
    array.forEach((el: string | number) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = `${el}`;

      paragraph.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const parent = target.parentElement as HTMLElement;

        const elementIndex = array.findIndex(
          (el) => target.textContent === `${el}`
        );
        const paragraphHeight = 36;

        parent.scrollTop = elementIndex + paragraphHeight;
      });
      container.append(paragraph);
    });
  }
}
