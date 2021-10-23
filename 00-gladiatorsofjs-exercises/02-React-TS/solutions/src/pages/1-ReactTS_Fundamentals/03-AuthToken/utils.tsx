const goodBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";
const badBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb";

export const isTokenValid = (token: string | null) => {
  return token === goodBearerToken;
};

export const links = [
  { name: "Homepage", link: "/AuthToken" },
  {
    name: "Try to log in with good token.",
    link: `/AuthToken/secure-link?token=${goodBearerToken}`,
  },
  {
    name: "Try to log in with bad token.",
    link: `/AuthToken/secure-link?token=${badBearerToken}`,
  },
  {
    name: "Try to log in without passing a token.",
    link: "/AuthToken/secure-link",
  },
];
