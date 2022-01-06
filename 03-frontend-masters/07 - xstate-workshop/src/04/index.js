import { createMachine, interpret } from "xstate";

const elBox = document.querySelector("#box");

const setPoint = (context, event) => {
  elBox.dataset.point = `(${event.clientX}, ${event.clientY})`;
};

const machine = createMachine(
  {
    initial: "idle",
    states: {
      idle: {
        on: {
          mousedown: {
            // actions: "dragging",
            actions: [setPoint],
            target: "dragging",
          },
        },
      },
      dragging: {
        on: {
          mouseup: {
            target: "idle",
          },
        },
      },
    },
  },
  {
    actions: {
      dragging: (context, event) => setPoint(context, event),
      // setPoint: (context, event) =>
      //   console.log("overrided setPoint for testing for example"),
    },
  }
);

const service = interpret(machine);

service.onTransition((state) => {
  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener("mousedown", (event) => {
  service.send(event);
});

elBox.addEventListener("mouseup", service.send); // point-free (no args) style
