class ZoomOnHover {
  image: HTMLImageElement;
  lens: HTMLElement;
  result: HTMLElement;
  parentElement: HTMLElement;

  widthRatio: number;
  heightRatio: number;

  constructor(imageSelector?: string, parentSelector?: string) {
    const img = document.querySelector<HTMLImageElement>(`${imageSelector || ".zoomImage"}`);
    const parentElement = document.querySelector<HTMLElement>(`${parentSelector || ".zoomOnHover"}`);

    if (img == null || parentElement == null) {
      throw new Error("Image must be in a document");
    }

    const lens = document.createElement("div");
    const result = document.createElement("div");

    lens.classList.add("lens");
    result.classList.add("result");
    parentElement.appendChild(lens);
    parentElement.appendChild(result);

    this.parentElement = parentElement;
    this.image = img;
    this.lens = lens;
    this.result = result;

    this.widthRatio = result.offsetWidth / lens.offsetWidth;
    this.heightRatio = result.offsetHeight / lens.offsetHeight;
  }

  init() {
    this.result.style.display = "none";
    this.result.style.backgroundImage = `url(${this.image.src})`;
    this.result.style.backgroundSize = `${
      this.image.width * this.widthRatio
    }px ${this.image.height * this.heightRatio}px`;

    this.addListeners();
  }

  addListeners() {
    this.lens.addEventListener("mousemove", this.mouseTrack.bind(this));
    this.image.addEventListener("mousemove", this.mouseTrack.bind(this));

    this.lens.addEventListener("mouseout", this.clear.bind(this));
    this.image.addEventListener("mouseout", this.clear.bind(this));
  }

  mouseTrack(e: MouseEvent) {
    this.result.style.display = "block";
    this.lens.style.opacity = "1";

    const { pageY, pageX } = e;

    const { positionLeft, positionTop } = this.getCursor({ pageY, pageX });

    // lens boundaries
    let x = positionLeft - this.lens.offsetWidth / 2;
    let y = positionTop - this.lens.offsetHeight / 2;

    const maxLeftPosition = 0;
    const maxRightPosition = this.image.width - this.lens.offsetWidth;

    const maxBottomPosition = 0;
    const maxTopPosition = this.image.height - this.lens.offsetHeight;

    if (x < maxLeftPosition) x = maxLeftPosition;
    if (x > maxRightPosition) x = maxRightPosition;
    if (y < maxBottomPosition) y = maxBottomPosition;
    if (y > maxTopPosition) y = maxTopPosition;

    this.lens.style.left = `${x}px`;
    this.lens.style.top = `${y}px`;

    this.result.style.backgroundPosition = `-${x * this.widthRatio}px -${
      y * this.heightRatio
    }px`;
  }

  getCursor({ pageY, pageX }: { pageY: number; pageX: number }) {
    const bounds = this.image.getBoundingClientRect();

    const positionTop = pageY - bounds.top;
    const positionLeft = pageX - bounds.left;

    return { positionLeft, positionTop };
  }

  clear() {
    this.result.style.display = "none";
    this.lens.style.opacity = "0";
  }
}

const zoomOnHover = new ZoomOnHover();
zoomOnHover.init();
