const goodBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";
const badBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb";

export const isTokenValid = (token: string | null) => {
  return token === goodBearerToken;
}

export const links = [
  { name: "Homepage", link: "/AuthToken"},
  { name: "Good Token", link: "/authtoken/secure-link?token=f3823903b2dd6e35243b1bbe5a14f651" },
  { name: "badToken", link: "/authtoken/secure-link?token=1c9de95d445fd0824b3bcf1def5f7bfb" },
  { name: "noArguments", link: "/authtoken/secure-link" },
]