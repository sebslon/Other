const signInBtn = document.querySelector(".signin-btn");
const signInFB = document.querySelector(".signin-fb");
const resultArea = document.querySelector(".result");

signInBtn.addEventListener("click", () => {
  const login = axios({
    url: "api/auth/sign-in",
    method: "POST",
    data: {
      email: "janusz@gmail.com",
      password: "janusz",
    },
  })
    .then((res) => {
      resultArea.textContent = res.data;
    })
    .catch((err) => console.log(err));
});

signInFB.addEventListener("click", () => {
  const login = axios({
    url: "api/auth/facebook",
    method: "GET",
  });
});
