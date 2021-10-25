import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --color__white: #f0f0f7;
  --color__gray: #21212a;
  --color__gray--dark: #14141a;
  --gradient__background: linear-gradient(
    to top,
    var(--color__gray--dark) 0%,
    var(--color__gray) 100%
  );
}

body {
  background: var(--gradient__background);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--color__white);
}
`;