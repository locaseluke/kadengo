$(document).ready(function () {
  $("label#next01").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#02").offset().top,
      },
      1000
    );
  });

  $("label#next02").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#002").offset().top,
      },
      1000
    );
  });

  $("label#next03").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#002").offset().top,
      },
      1000
    );
  });

  $("#new03 .button-container label").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#q5").offset().top,
      },
      1000
    );
  });

  // Hide all ID's on page load
  $("#ks09,#ks12,#ks18,#ks24,#ks28").hide();

  const autoSelectRadioButtons = (product) => {
    const city = localStorage.getItem("city");
    if (document.querySelector(`#${city}`)) {
      document.querySelector(`#${city}`).checked = true;
    }
    radioOptions.forEach((option) => {
      document.querySelector(
        `.${product}-prices #${city + option}`
      ).checked = true;
    });
  };

  // Match the class of the dropdown label to the button ID to show it and hide the others (in case the user changes the option)
  $(".ks09").click(function () {
    $("#ks09").show();
    $("#ks12,#ks18,#ks24,#ks28").hide();
    autoSelectRadioButtons("ks09");
  });

  $(".ks12").click(function () {
    $("#ks12").show();
    $("#ks09,#ks18,#ks24,#ks28").hide();
    autoSelectRadioButtons("ks12");
  });

  $(".ks18").click(function () {
    $("#ks18").show();
    $("#ks09,#ks12,#ks24,#ks28").hide();
    autoSelectRadioButtons("ks18");
  });

  $(".ks24").click(function () {
    $("#ks24").show();
    $("#ks09,#ks12,#ks18,#ks28").hide();
    autoSelectRadioButtons("ks24");
  });

  $(".ks28").click(function () {
    $("#ks28").show();
    $("#ks09,#ks12,#ks18,#ks24").hide();
    autoSelectRadioButtons("ks28");
  });

  // get the input element for postal code
  const postalCodeInputEle = document.querySelector(".text-field.postcode");
  const radioOptions = [
    "installername",
    "installeravatar",
    "totalprice",
    "monthlyinstalmentprice",
    "totalinstalmentprice",
  ];

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
  };

  // if (localStorage.getItem("city")) {
  //   if (
  //     document.querySelector(`#${localStorage.getItem("city")}installername`)
  //   ) {
  //     autoSelectRadioButtons();
  //   }
  // }

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
});
