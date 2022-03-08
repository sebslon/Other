const signInBtn = document.querySelector(".signin-btn");
const signInFB = document.querySelector(".signin-fb");
const resultArea = document.querySelector(".result");

signInBtn.addEventListener("click", () => {
  const login = axios({
    url: "api/auth/login",
    method: "POST",
    data: {
      email: "janusz@gmailxdxsdas.com",
      password: "janusz",
    },
  })
    .then((res) => {
      resultArea.textContent = res.data;
    })
    .catch((err) => console.log(err));
});
