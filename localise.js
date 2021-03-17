// get the input element for postal code
const postalCodeInputEle = document.querySelector(".text-field.postcode");
const radioOptions = [
  "installername",
  "installeravatar",
  "totalprice",
  "monthlyinstalmentprice",
  "totalinstalmentprice",
];

const autoSelectRadioButtons = () => {
  const city = localStorage.getItem("city");
  document.querySelector(`#${city}`).checked = true;
  radioOptions.forEach((option) => {
    document.querySelector(`#${city + option}`).checked = true;
  });
};

const registerPostalCode = (postalCode) => {
  localStorage.setItem("postalCode", postalCode);

  if (postalCode >= 5000 && postalCode <= 5999) {
    localStorage.setItem("city", "adelaide");
  } else if (
    (postalCode >= 4000 && postalCode <= 4999) ||
    (postalCode >= 9000 && postalCode <= 9999)
  ) {
    localStorage.setItem("city", "goldcoast");
  } else if (
    (postalCode >= 3000 && postalCode <= 3999) ||
    (postalCode >= 8000 && postalCode <= 8999)
  ) {
    localStorage.setItem("city", "melbourne");
  } else if (postalCode >= 6000 && postalCode <= 6999) {
    localStorage.setItem("city", "perth");
  } else if (postalCode >= 1000 && postalCode <= 2899) {
    localStorage.setItem("city", "sydney");
  } else {
    localStorage.setItem("city", "goldcoast");
  }

  autoSelectRadioButtons();
};

if (localStorage.getItem("city")) {
  if (document.querySelector(`#${localStorage.getItem("city")}installername`)) {
    autoSelectRadioButtons();
  }
}

if (postalCodeInputEle) {
  postalCodeInputEle.addEventListener("change", (e) => {
    let postalCode;
    postalCode = e.target.value;
    if (!!postalCode) {
      // register the postal code in localstorage
      registerPostalCode(parseInt(postalCode));
    }
  });
}

// display consultant
if (document.querySelectorAll(".coll-list-installer")) {
  const displayConsultant = () => {
    const city = localStorage.getItem("city");
    if (city) {
      $(`.coll-list-installer`).hide();
      $(`.coll-list-installer.${city}`).css("display", "block");
    }
  };

  displayConsultant();
}

// display price
if (document.querySelectorAll(".price-coll-list")) {
  const displayPrice = () => {
    const city = localStorage.getItem("city");
    if (city) {
      $(`.price-coll-list`).hide();
      $(`.price-coll-list.${city}`).css("display", "block");
    }
  };

  displayPrice();
}
