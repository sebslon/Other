class onStopScroll {
  timeout!: ReturnType<typeof setTimeout>;

  init() {
    window.addEventListener("scroll", () => this.onScroll());
  }

  onScroll() {
    document.body.classList.add("scrolling");
    document.body.classList.remove("not-scrolling");

    clearTimeout(this.timeout);

    this.timeout = setTimeout(this.stopScrolling, 500);
  }

  stopScrolling() {
    document.body.classList.add("not-scrolling");
    document.body.classList.remove("scrolling");
  }
}

const onScroll = new onStopScroll();

onScroll.init();
