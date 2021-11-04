function onDelayHref() {
  const delayedTags = document.querySelectorAll(
    "a[data-delayed-href][data-delayed-duration]"
  );

  delayedTags.forEach((link) => {
    const duration = link.getAttribute("data-delayed-duration");
    const address = link.getAttribute("data-delayed-href");

    if (duration == null || address == null) {
      console.error(
        "Delayed anchor tags must have a [data-delayed-duration] and [data-delayed-href] attributes"
      );
      return;
    }

    const delay = parseInt(duration);

    if (typeof delay != "number") {
      console.error("data-delayed-duration must be a number");
      return;
    }

    link.addEventListener("click", function redirect(e) {
      e.preventDefault();
      console.log("Delayed click..");

      setTimeout(() => {
        window.location.href = address;
      }, delay);
    });
  });
}

onDelayHref();