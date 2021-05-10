const infos = {
  goldcoast: "Jeremy",
  perth: "Jack",
  adelaide: "Jake",
  melbourne: "Linden",
  sydney: "Dane",
};

// update the url params
if (document.querySelector(".productpage")) {
  if (history.pushState && localStorage.getItem("city")) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?city=" +
      localStorage.getItem("city");
    window.history.pushState({ path: newurl }, "", newurl);
  }
}

$(document).ready(function () {
  // get the input element for postal code
  const postalCodeInputEle = document.querySelector(".text-field.postcode");
  const radioOptions = [
    "installername",
    "installeravatar",
    "totalprice",
    "monthlyinstalmentprice",
    "totalinstalmentprice",
    "installeremail",
    "installerphonenumber",
  ];

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
    if (city) {
      if (document.querySelector(`#${city}`)) {
        document.querySelector(`#${city}`).checked = true;
      }
      if (!product && localStorage.getItem("product")) {
        product = localStorage.getItem("product");
      }
      radioOptions.forEach((option) => {
        if (
          option === "installername" ||
          option === "installeravatar" ||
          option === "installerphonenumber" ||
          option === "installeremail"
        ) {
          document.querySelector(`#${city + option}`).checked = true;
        } else {
          document.querySelector(
            `.${product}-prices #${city + option}`
          ).checked = true;
        }
      });
    }
  };

  // Match the class of the dropdown label to the button ID to show it and hide the others (in case the user changes the option)
  $(".ks09").click(function () {
    $("#ks09").show();
    $("#ks12,#ks18,#ks24,#ks28").hide();
    autoSelectRadioButtons("ks09");
    localStorage.setItem("product", "ks09");
  });

  $(".ks12").click(function () {
    $("#ks12").show();
    $("#ks09,#ks18,#ks24,#ks28").hide();
    autoSelectRadioButtons("ks12");
    localStorage.setItem("product", "ks12");
  });

  $(".ks18").click(function () {
    $("#ks18").show();
    $("#ks09,#ks12,#ks24,#ks28").hide();
    autoSelectRadioButtons("ks18");
    localStorage.setItem("product", "ks18");
  });

  $(".ks24").click(function () {
    $("#ks24").show();
    $("#ks09,#ks12,#ks18,#ks28").hide();
    autoSelectRadioButtons("ks24");
    localStorage.setItem("product", "ks24");
  });

  $(".ks28").click(function () {
    $("#ks28").show();
    $("#ks09,#ks12,#ks18,#ks24").hide();
    autoSelectRadioButtons("ks28");
    localStorage.setItem("product", "ks28");
  });

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

    if (localStorage.getItem("product")) {
      autoSelectRadioButtons();
    }
  };

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
  if (document.querySelectorAll(".price-coll-list").length) {
    const displayPrice = () => {
      const city = localStorage.getItem("city");
      if (city) {
        let price = $(
          `.price-coll-list.${city} .price-spec:last-of-type`
        ).text();
        $(`.price-coll-list`).hide();
        $(`.price-coll-list.${city}`).css("display", "block");
        document.querySelector("#price").checked = true;
        document.querySelector("#price").value = price;
      }
    };

    displayPrice();
  }

  const emailField = $("#Email-Address");
  const addressField = $("#gpa");

  emailField.on("change", function (e) {
    let email = e.target.value;
    localStorage.setItem("emailaddress", email);
  });

  const updateAddress = () => {
    setTimeout(() => {
      localStorage.setItem("gpaaddress", addressField.val());
    }, 500);
  };

  addressField.on("blur", () => updateAddress());

  if (document.querySelector(".productpage")) {
    const city = localStorage.getItem("city");
    const postalCode = localStorage.getItem("postalCode");
    const email = localStorage.getItem("emailaddress");
    const address = localStorage.getItem("gpaaddress");
    if (city) {
      document.querySelector("#citynew").checked = true;
      document.querySelector("#citynew").value = city;
      document.querySelector("#installernamenew").checked = true;
      document.querySelector("#installernamenew").value = infos[city];
      document.querySelector(`#${city}installerphonenumber`).checked = true;
      document.querySelector(`#${city}installeremail`).checked = true;
      document.querySelector("#postcode").checked = true;
      document.querySelector("#postcode").value = postalCode;
      document.querySelector("#email").checked = true;
      document.querySelector("#email").value = email;
      document.querySelector("#address").checked = true;
      document.querySelector("#address").value = address;
    }
  }
});

var nextSection = $("#firstbutton").attr("href");
var postCodeInput = $("input.postcode");
$("#firstbutton").attr("href", "#");

postCodeInput.on("keyup", function (e) {
    let postcode = e.target.value;
    if (postcode !== "") {
        $("#ks09,#ks12,#ks18,#ks24,#ks28").attr('disabled', false);
    } else {
        $("#ks09,#ks12,#ks18,#ks24,#ks28").attr('disabled', true);
    }
});

$("#ks09,#ks12,#ks18,#ks24,#ks28").on("click", function (e) {
    e.preventDefault();
    
    if ($(this).attr("href") === "#") {
        $(".postcode-error").show();
    } else {
        $(".postcode-error").hide();
    }
});
