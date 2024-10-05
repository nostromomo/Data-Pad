const audio = new Audio("keySound.wav");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        audio.play();
      });
    });

    // selecting the elements for which we want to add a tooltip
    const target = document.getElementById("writing-button");
    const tooltip = document.getElementById("writing-tooltip");

    // change display to 'block' on mouseover
    target.addEventListener(
      "mouseover",
      () => {
        tooltip.style.display = "block";
      },
      false
    );

    // change display to 'none' on mouseleave
    target.addEventListener(
      "mouseleave",
      () => {
        tooltip.style.display = "none";
      },
      false
    );

    const webby = document.getElementById("webs-button");
    const webtip = document.getElementById("webs-tooltip");

    webby.addEventListener(
      "mouseover",
      () => {
        webtip.style.display = "block";
      },
      false
    );

    webby.addEventListener(
      "mouseleave",
      () => {
        webtip.style.display = "none";
      },
      false
    );


    /* blog used to be cat page */
    const cat = document.getElementById("blog-button");
    const cattip = document.getElementById("blog-tooltip");

    cat.addEventListener(
      "mouseover",
      () => {
        cattip.style.display = "block";
      },
      false
    );

    cat.addEventListener(
      "mouseleave",
      () => {
        cattip.style.display = "none";
      },
      false
    );

    const love = document.getElementById("loved-button");
    const lovetip = document.getElementById("loved-tooltip");

    love.addEventListener(
      "mouseover",
      () => {
        lovetip.style.display = "block";
      },
      false
    );

    love.addEventListener(
      "mouseleave",
      () => {
        lovetip.style.display = "none";
      },
      false
    );

    const click = document.getElementById("click-button");
    const clicktip = document.getElementById("click-tooltip");

    click.addEventListener(
      "mouseover",
      () => {
        clicktip.style.display = "block";
      },
      false
    );

    click.addEventListener(
      "mouseleave",
      () => {
        clicktip.style.display = "none";
      },
      false
    );

    const quiz = document.getElementById("quiz-button");
    const quiztip = document.getElementById("quiz-tooltip");

    quiz.addEventListener(
      "mouseover",
      () => {
        quiztip.style.display = "block";
      },
      false
    );

    quiz.addEventListener(
      "mouseleave",
      () => {
        quiztip.style.display = "none";
      },
      false
    );

    const data = document.getElementById("data-button");
    const datatip = document.getElementById("data-tooltip");

    data.addEventListener(
      "mouseover",
      () => {
        datatip.style.display = "block";
      },
      false
    );

    data.addEventListener(
      "mouseleave",
      () => {
        datatip.style.display = "none";
      },
      false
    );

    const contact = document.getElementById("contact-button");
    const contacttip = document.getElementById("contact-tooltip");

    contact.addEventListener(
      "mouseover",
      () => {
        contacttip.style.display = "block";
      },
      false
    );

    contact.addEventListener(
      "mouseleave",
      () => {
        contacttip.style.display = "none";
      },
      false
    );

    const nothing = document.getElementById("nothing-button");
    const nothingtip = document.getElementById("nothing-tooltip");

    nothing.addEventListener(
      "mouseover",
      () => {
        nothingtip.style.display = "block";
      },
      false
    );

    nothing.addEventListener(
      "mouseleave",
      () => {
        nothingtip.style.display = "none";
      },
      false
    );