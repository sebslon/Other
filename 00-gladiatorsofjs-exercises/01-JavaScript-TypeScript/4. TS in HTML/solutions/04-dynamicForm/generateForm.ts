interface SimplifiedInput {
  type: string;
  label?: string;
  placeholder?: string;
  name?: string;
}

interface Settings {
  action: string;
  method: "GET" | "POST";
  inputs: SimplifiedInput[];
}

const testSettings: Settings = {
  action: "/contact/by-mail",
  method: "POST",
  inputs: [
    { type: "header", label: "Skontaktuj się z nami" },
    { name: "email", type: "email", placeholder: "Wpisz swój email" },
    {
      name: "content",
      type: "textarea",
      placeholder: "Wpisz treść wiadomości",
    },
    { type: "submit", label: "Wyślij wiadomość" },
  ],
};

function generateFormOnPattern(
  formContainerSelector: string = ".form-container",
  settings: Settings
) {
  const formContainer = document.querySelector(formContainerSelector);
  if (!formContainer) throw new Error("Missing form container.");

  const { action, method, inputs } = settings;

  const form = document.createElement("form");
  form.setAttribute("action", action);
  form.setAttribute("method", method);

  const formWithElements = inputs.reduce(
    (acc: HTMLFormElement, input: SimplifiedInput) => {
      let inputElement;

      switch (input.type) {
        case "header":
          inputElement = document.createElement("h2");
          inputElement.textContent = input.label || "Title";
          break;
        case "email":
          inputElement = document.createElement("input");
          inputElement.setAttribute("type", input.type);
          inputElement.setAttribute("name", input.name || "email");
          inputElement.setAttribute(
            "placeholder",
            input.placeholder || "Email"
          );
          break;
        case "password":
          inputElement = document.createElement("input");
          inputElement.setAttribute("type", input.type);
          inputElement.setAttribute("name", input.name || "password");
          break;
        case "textarea":
          inputElement = document.createElement("input");
          inputElement.setAttribute("name", input.name || "textarea");
          inputElement.setAttribute(
            "placeholder",
            input.placeholder || "Your message..."
          );
          break;
        case "submit":
          inputElement = document.createElement("button");
          inputElement.setAttribute("type", input.type);
          inputElement.textContent = input.label || "Send";
          break;
        default:
          inputElement = document.createElement("input");
          inputElement.setAttribute(input.type, input.type);
          break;
      }

      acc.append(inputElement);
      return acc;
    },
    form
  );

  formContainer.append(form);
}

generateFormOnPattern(".form-container", testSettings);
