import { createMachine, interpret } from "xstate";

const elBox = document.querySelector("#box");

const machine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        mousedown: {
          target: "active",
        },
      },
    },
    active: {
      on: {
        mouseup: {
          target: "inactive",
        },
      },
    },
  },
});

const service = interpret(machine);

service.onTransition((state) => {
  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener("mousedown", (event) => {
  service.send(event);
});

elBox.addEventListener("mouseup", (event) => {
  service.send(event);
});
