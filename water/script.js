const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

const highlightCups = (index) => {
  if (index === 7 && smallCups[index].classList.contains("full")) index--;
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) cup.classList.add("full");
    else cup.classList.remove("full");
  });
  updateBigCup();
};

smallCups.forEach((cup, index) =>
  cup.addEventListener("click", () => highlightCups(index))
);

updateBigCup();
.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;
.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;.contact-form {
  position: relative;
  background-color: #f9f9f9;
  width: 100%;
  padding: 30px 30px 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form .input50,
.contact-form .input100 {
  width: 100%;
  margin: 0;
//////////////////
/////////////////////////
/////////////////////
////////////////////////////////
//////////////////
//////////////////
////////////////
//////////////////////
//////////////////
////////////////////////////////////////////////////////
////////
///////////////
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});v
