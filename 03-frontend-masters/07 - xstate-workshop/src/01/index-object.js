const elBox = document.querySelector("#box");

const machine = {
  initial: "inactive",
  states: {
    active: {
      on: {
        deactivate: "inactive",
      },
    },
    inactive: {
      on: {
        activate: "active",
      },
    },
  },
};

let currentState = machine.initial;

function transition(state, event) {
  return machine.states[state]?.on?.[event] || state;
}

function send(event) {
  const nextState = transition(currentState, event);
  currentState = nextState;
  elBox.dataset.state = currentState;
}

elBox.addEventListener("click", () => {
  if (currentState === "inactive") {
    send("activate");
  } else {
    send("deactivate");
  }
});
