const data = {
  name:        "test",
  description: "Programador Backend. Amante del cafe y la Formula 1",
  email:       "test@gmail.com",
  tel:         "22345566",
};

function loadUserProfile(data) {
  document.getElementById("userName").textContent         = data.name;
  document.getElementById("userDescription").textContent  = data.description;
  document.getElementById("userEmail").textContent        = data.email;
  document.getElementById("userTel").textContent          = data.tel;
}

document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile(data);
});
