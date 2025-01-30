export function calcTickets() {
  const total = document.querySelector(".total-tickets-sum");
  const senior = document.getElementById("senior");
  const basic = document.getElementById("basic");

  const basicMinus = document.getElementById("basic-minus");
  const basicPlus = document.getElementById("basic-plus");

  const seniorMinus = document.getElementById("senior-minus");
  const seniorPlus = document.getElementById("senior-plus");

  const ticketTypeContainer = document.querySelector(".ticket-type-container");
  const ticketsType = ticketTypeContainer.querySelectorAll("input");

  let checkedTicket = ticketTypeContainer.querySelector("input:checked");

  //POPUP

  const sumValue = document.querySelector(".sum-value");
  const currentBasicSum = document.querySelector(".current-basic-sum");
  const currentSeniorSum = document.querySelector(".current-senior-sum");

  const valueTicketBasic = document.querySelector(
    ".current-value-ticket-basic"
  );
  const valueTicketSenior = document.querySelector(
    ".current-value-ticket-senior"
  );

  const popupBasicPriceForTicket = document.querySelector(
    ".popup-basic-price-for-ticket"
  );
  const popupSeniorPriceForTicket = document.querySelector(
    ".popup-senior-price-for-ticket"
  );

  const popupOverviewBasicPriceForTicket = document.querySelector(
    ".popup-overview-basic-price-for-ticket"
  );
  const popupOverviewSeniorPriceForTicket = document.querySelector(
    ".popup-overview-senior-price-for-ticket"
  );

  const basicPopup = document.querySelector(".number-basic-popup");
  const seniorPopup = document.querySelector(".number-senior-popup");

  const typeOfTicketPopup = document.querySelector(".input-ticket");

  const basicPopupMinus = document.getElementById("basic-popup-minus");
  const basicPopupPlus = document.getElementById("basic-popup-plus");

  const seniorPopupMinus = document.getElementById("senior-popup-minus");
  const seniorPopupPlus = document.getElementById("senior-popup-plus");

  const inputDate = document.querySelector("#input-date");
  const inputTime = document.querySelector("#input-time");
  const inputTypeDate = document.querySelector("#input-type-date");
  const inputTypeTime = document.querySelector("#input-type-time");

  const typeOfExhibition = document.querySelector(".type-of-exhibition");

  let currentTicketPrice;

  if (!localStorage.getItem("total-tickets-sum")) {
    populateStorage();
  } else {
    setDataTickets();
  }

  function populateStorage() {
    localStorage.setItem("total-tickets-sum", total.textContent);
    localStorage.setItem("basic", basic.value);
    localStorage.setItem("senior", senior.value);
    localStorage.setItem("sum-value", sumValue.textContent);
    localStorage.setItem("current-basic-sum", currentBasicSum.textContent);
    localStorage.setItem("current-senior-sum", currentSeniorSum.textContent);
    localStorage.setItem(
      "current-value-ticket-basic",
      valueTicketBasic.textContent
    );
    localStorage.setItem(
      "current-value-ticket-senior",
      valueTicketSenior.textContent
    );

    localStorage.setItem(
      "input1",
      ticketTypeContainer.querySelector(".ticket-type-1").checked
    );
    localStorage.setItem(
      "input2",
      ticketTypeContainer.querySelector(".ticket-type-2").checked
    );
    localStorage.setItem(
      "input3",
      ticketTypeContainer.querySelector(".ticket-type-3").checked
    );

    localStorage.setItem(
      "popup-basic-price-for-ticket",
      popupBasicPriceForTicket.textContent
    );
    localStorage.setItem(
      "popup-senior-price-for-ticket",
      popupSeniorPriceForTicket.textContent
    );
    localStorage.setItem(
      "popup-overview-basic-price-for-ticket",
      popupOverviewBasicPriceForTicket.textContent
    );
    localStorage.setItem(
      "popup-overview-senior-price-for-ticket",
      popupOverviewSeniorPriceForTicket.textContent
    );

    localStorage.setItem("input-ticket", typeOfTicketPopup.value);
    localStorage.setItem("type-of-exhibition", typeOfExhibition.textContent);

    setDataTickets();
  }

  function setDataTickets() {
    const currentTotal = localStorage.getItem("total-tickets-sum");
    const currentBasic = localStorage.getItem("basic");
    const currentSenior = localStorage.getItem("senior");

    const input1 = JSON.parse(localStorage.getItem("input1"));
    const input2 = JSON.parse(localStorage.getItem("input2"));
    const input3 = JSON.parse(localStorage.getItem("input3"));

    const currentSumValue = localStorage.getItem("sum-value");

    const currentSumForBasic = localStorage.getItem("current-basic-sum");
    const currentSumForSenior = localStorage.getItem("current-senior-sum");

    const currentValueTicketBasic = localStorage.getItem(
      "current-value-ticket-basic"
    );
    const currentValueTicketSenior = localStorage.getItem(
      "current-value-ticket-senior"
    );

    const currentPopupBasicPriceForTicket = localStorage.getItem(
      "popup-basic-price-for-ticket"
    );
    const currentPopupSeniorPriceForTicket = localStorage.getItem(
      "popup-senior-price-for-ticket"
    );

    const currentPopupOverviewBasicPriceForTicket = localStorage.getItem(
      "popup-overview-basic-price-for-ticket"
    );
    const currentPopupOverviewSeniorPriceForTicket = localStorage.getItem(
      "popup-overview-senior-price-for-ticket"
    );

    const inputTicket = localStorage.getItem("input-ticket");
    const currentTypeOfExhibition = localStorage.getItem("type-of-exhibition");

    basic.value = currentBasic;
    senior.value = currentSenior;
    basicPopup.value = currentBasic;
    seniorPopup.value = currentSenior;
    total.textContent = currentTotal;

    typeOfTicketPopup.value = inputTicket;
    typeOfExhibition.textContent = currentTypeOfExhibition;

    if (input1 == true) {
      ticketTypeContainer.querySelector(".ticket-type-1").checked = true;
      currentTicketPrice = 20;
    }

    if (input2 == true) {
      ticketTypeContainer.querySelector(".ticket-type-2").checked = true;
      currentTicketPrice = 25;
    }

    if (input3 == true) {
      ticketTypeContainer.querySelector(".ticket-type-3").checked = true;
      currentTicketPrice = 40;
    }

    sumValue.textContent = currentSumValue;
    currentBasicSum.textContent = currentSumForBasic;
    currentSeniorSum.textContent = currentSumForSenior;
    valueTicketBasic.textContent = currentValueTicketBasic;
    valueTicketSenior.textContent = currentValueTicketSenior;

    popupBasicPriceForTicket.textContent = currentPopupBasicPriceForTicket;
    popupSeniorPriceForTicket.textContent = currentPopupSeniorPriceForTicket;
    popupOverviewBasicPriceForTicket.textContent =
      currentPopupOverviewBasicPriceForTicket;
    popupOverviewSeniorPriceForTicket.textContent =
      currentPopupOverviewSeniorPriceForTicket;
  }

  let basicTickets = Number(basic.value);
  let seniorTickets = Number(senior.value);
  let ticketPrice = Number(currentTicketPrice);
  let totalSum = Number(total.textContent);
  let sumForBasic = Number(currentBasicSum.textContent.substr(0, length - 2));
  let sumForSenior = Number(currentSeniorSum.textContent.substr(0, length - 2));

  ticketsType.forEach((el) => {
    el.addEventListener("click", () => {
      checkedTicket = ticketTypeContainer.querySelector("input:checked");
      priceForTicket();
      priceForTicketPopup();
      totalSumTickets();
    });
    populateStorage();
  });

  function priceForTicket() {
    if (checkedTicket == ticketsType[0]) {
      ticketPrice = 20;
      typeOfTicketPopup.value = document.querySelector(".input-option-1").value;
    } else if (checkedTicket == ticketsType[1]) {
      ticketPrice = 25;
      typeOfTicketPopup.value = document.querySelector(".input-option-2").value;
    } else {
      ticketPrice = 40;
      typeOfTicketPopup.value = document.querySelector(".input-option-3").value;
    }
    populateStorage();
  }

  function basicTicketsPlus() {
    if (basicTickets < 20) {
      basicTickets = basicTickets + 1;
      populateStorage();
      totalSumTickets();
    }
  }

  function basicTicketsMinus() {
    if (basicTickets > 0) {
      basicTickets = basicTickets - 1;
      populateStorage();
      totalSumTickets();
    }
  }

  function seniorTicketsPlus() {
    if (seniorTickets < 20) {
      seniorTickets = seniorTickets + 1;
      populateStorage();
      totalSumTickets();
    }
  }

  function seniorTicketsMinus() {
    if (seniorTickets > 0) {
      seniorTickets = seniorTickets - 1;
      populateStorage();
      totalSumTickets();
    }
  }

  function totalSumTickets() {
    totalSum =
      Number(basic.value) * ticketPrice +
      (Number(senior.value) * ticketPrice) / 2;
    total.textContent = String(totalSum);
    sumValue.textContent = String(totalSum) + " €";

    sumForBasic = Number(basic.value) * ticketPrice;
    sumForSenior = (Number(senior.value) * ticketPrice) / 2;
    currentBasicSum.textContent = String(sumForBasic) + " €";
    currentSeniorSum.textContent = String(sumForSenior) + " €";

    valueTicketBasic.textContent = basic.value;
    valueTicketSenior.textContent = senior.value;

    basicPopup.value = basic.value;
    seniorPopup.value = senior.value;

    popupOverviewBasicPriceForTicket.textContent =
      "Basic (" + String(ticketPrice) + " €)";
    popupOverviewSeniorPriceForTicket.textContent =
      "Senior (" + String(ticketPrice / 2) + " €)";
    popupBasicPriceForTicket.textContent =
      "Basic 18+ (" + String(ticketPrice) + " €)";
    popupSeniorPriceForTicket.textContent =
      "Senior 65+ (" + String(ticketPrice / 2) + " €)";

    populateStorage();
  }

  basicPlus.addEventListener("click", basicTicketsPlus);
  basicMinus.addEventListener("click", basicTicketsMinus);
  seniorPlus.addEventListener("click", seniorTicketsPlus);
  seniorMinus.addEventListener("click", seniorTicketsMinus);

  function basicTicketsPopupPlus() {
    if (basicTickets < 20) {
      basicTickets = basicTickets + 1;
      basic.value = String(Number(basic.value) + 1);
      populateStorage();
      totalSumTickets();
    }
  }

  function basicTicketsPopupMinus() {
    if (basicTickets > 0) {
      basicTickets = basicTickets - 1;
      basic.value = String(Number(basic.value) - 1);
      populateStorage();
      totalSumTickets();
    }
  }

  function seniorTicketsPopupPlus() {
    if (seniorTickets < 20) {
      seniorTickets = seniorTickets + 1;
      senior.value = String(Number(senior.value) + 1);
      populateStorage();
      totalSumTickets();
    }
  }

  function seniorTicketsPopupMinus() {
    if (seniorTickets > 0) {
      seniorTickets = seniorTickets - 1;
      senior.value = String(Number(senior.value) - 1);
      populateStorage();
      totalSumTickets();
    }
  }

  function priceForTicketPopup() {
    if (
      typeOfTicketPopup.value == document.querySelector(".input-option-1").value
    ) {
      ticketPrice = 20;
      typeOfExhibition.textContent = "Permanent exhibition";
      totalSumTickets();
    }
    if (
      typeOfTicketPopup.value == document.querySelector(".input-option-2").value
    ) {
      ticketPrice = 25;
      typeOfExhibition.textContent = "Temporary exhibition";
      totalSumTickets();
    }
    if (
      typeOfTicketPopup.value == document.querySelector(".input-option-3").value
    ) {
      ticketPrice = 40;
      typeOfExhibition.textContent = "Combined Admission";
      totalSumTickets();
    }
  }

  typeOfTicketPopup.addEventListener("change", priceForTicketPopup);

  basicPopupPlus.addEventListener("click", basicTicketsPopupPlus);
  basicPopupMinus.addEventListener("click", basicTicketsPopupMinus);
  seniorPopupPlus.addEventListener("click", seniorTicketsPopupPlus);
  seniorPopupMinus.addEventListener("click", seniorTicketsPopupMinus);

  //DATE & TIME

  let date = new Date();
  let m = date.getMonth() + 1;

  let nameMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let options = { weekday: "long", month: "long", day: "numeric" };

  m < 10 ? (m = "0" + m) : "";
  let d = date.getDate();
  d < 10 ? (d = "0" + d) : "";
  let today = `${date.getFullYear()}-${m}-${d}`;
  today = today + "";
  inputDate.min = today;

  let dayForExhibition;

  function setDateExhibition() {
    dayForExhibition = new Date(Date.parse(inputDate.value));
    dayForExhibition = dayForExhibition.toLocaleString("en-US", options);
  }

  inputDate.addEventListener("change", () => {
    setDateExhibition();
    inputTypeDate.value = dayForExhibition;
  });

  inputTime.addEventListener("change", () => {
    inputTypeTime.value = inputTime.value;
  });
}
