class ProgressReadingBarObserver {
  observedElements: NodeListOf<HTMLElement>;

  constructor(selector?: string) {
    this.observedElements = document.querySelectorAll<HTMLElement>(
      selector || ".with-progress-reading-bar"
    );
  }

  startObserving = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const entryElement = entry.target;

        this.createProgressBar(entryElement);
        entryElement.addEventListener("scroll", () => this.onScroll(entry));

        observer.unobserve(entryElement);
      });
    });

    this.observedElements.forEach((element) => observer.observe(element));
  };

  createProgressBar = (parentElement: Element) => {
    const wrapper = document.createElement("div");
    const progressBar = document.createElement("div");

    wrapper.classList.add("progress-bar-wrapper");
    progressBar.classList.add("progress-bar");

    parentElement.prepend(wrapper);

    wrapper.appendChild(progressBar);
  };

  onScroll = (entry: IntersectionObserverEntry) => {
    const element = entry.target;

    if (!(element instanceof HTMLElement)) {
      throw new Error("Element must be of type HTMLElement");
    }

    const progressBar = element.querySelector<HTMLElement>(
      ".progress-bar"
    ) as HTMLElement;

    const scrolledArea = element.scrollTop;
    const totalHeight = element.scrollHeight - element.offsetHeight;

    const scrollValue = ((scrolledArea / totalHeight) * 100).toFixed(2);

    progressBar.style.width = `${scrollValue}%`;
  };
}

const a = new ProgressReadingBarObserver();
a.startObserving();
