import { createMachine, assign, interpret } from "xstate";

const elBox = document.querySelector("#box");
const elBody = document.body;

const machine = createMachine(
  {
    initial: "idle",
    context: {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      px: 0,
      py: 0,
    },
    states: {
      idle: {
        on: {
          mousedown: {
            actions: "setBeginningPoint",
            target: "dragging",
          },
        },
      },
      dragging: {
        on: {
          mousemove: {
            actions: "dragging",
          },
          mouseup: {
            actions: "setEndPoint",
            target: "idle",
          },
          "keyup.escape": {
            target: "idle",
            actions: "abortDragging",
          },
        },
      },
    },
  },
  {
    actions: {
      setBeginningPoint: assign({
        px: (context, event) => event.clientX,
        py: (context, event) => event.clientY,
      }),
      dragging: assign({
        dx: (context, event) => event.clientX - context.px,
        dy: (context, event) => event.clientY - context.py,
      }),
      setEndPoint: assign({
        x: (context) => context.x + context.dx,
        y: (context) => context.y + context.dy,
        dx: 0,
        dy: 0,
        px: 0,
        py: 0,
      }),
      abortDragging: assign({
        dx: 0,
        dy: 0,
        px: 0,
        py: 0,
      }),
    },
  }
);

const service = interpret(machine);

service.onTransition((state) => {
  if (state.changed) {
    console.log(state.context);
    elBox.dataset.state = state.value;

    elBox.style.setProperty("--dx", state.context.dx);
    elBox.style.setProperty("--dy", state.context.dy);
    elBox.style.setProperty("--x", state.context.x);
    elBox.style.setProperty("--y", state.context.y);
  }
});

service.start();

elBox.addEventListener("mousedown", service.send);
elBody.addEventListener("mouseup", service.send);
elBody.addEventListener("mousemove", service.send);
elBody.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    service.send("keyup.escape");
  }
});