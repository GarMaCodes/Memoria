import arte1 from "./images/arte1.jpg";
import arte2 from "./images/arte2.jpg";
import arte3 from "./images/arte3.jpg";
import arte4 from "./images/arte4.jpg";
import arte5 from "./images/arte5.jpg";
import arte6 from "./images/arte6.jpg";
import arte7 from "./images/arte7.jpg";
import arte8 from "./images/arte8.jpg";
import arte9 from "./images/arte9.jpg";
import arte10 from "./images/arte10.jpg";
import arte11 from "./images/arte11.jpg";
import arte12 from "./images/arte12.jpg";
import arte13 from "./images/arte13.jpg";
import arte14 from "./images/arte14.jpg";
import arte15 from "./images/arte15.jpg";
import arte16 from "./images/arte16.jpg";
import arte17 from "./images/arte17.jpg";
import arte18 from "./images/arte18.jpg";
import arte19 from "./images/arte19.jpg";
import arte20 from "./images/arte20.jpg";
import arte21 from "./images/cartoon1.jpg";
import arte22 from "./images/cartoon2.jpg";
import arte23 from "./images/cartoon3.jpg";
import arte24 from "./images/cartoon4.jpg";
import arte25 from "./images/cartoon5.jpg";
import arte26 from "./images/cartoon6.jpg";
import arte27 from "./images/cartoon7.jpg";
import arte28 from "./images/cartoon8.jpg";
import arte29 from "./images/cartoon9.jpg";
import arte30 from "./images/cartoon10.jpg";
import arte31 from "./images/cartoon11.jpg";
import arte32 from "./images/cartoon12.jpg";
import arte33 from "./images/cartoon13.jpg";
import arte34 from "./images/cartoon14.jpg";
import arte35 from "./images/cartoon15.jpg";
import arte36 from "./images/cartoon16.jpg";
import arte37 from "./images/cartoon17.jpg";
import arte38 from "./images/cartoon18.jpg";
import arte39 from "./images/cartoon19.jpg";
import arte40 from "./images/cartoon20.jpg";

const getCardImage = (name, game) => {
  let image;
  if (game) {
    if (name === "arte1") {
      image = arte1;
    } else if (name === "arte2") {
      image = arte2;
    } else if (name === "arte3") {
      image = arte3;
    } else if (name === "arte4") {
      image = arte4;
    } else if (name === "arte5") {
      image = arte5;
    } else if (name === "arte6") {
      image = arte6;
    } else if (name === "arte7") {
      image = arte7;
    } else if (name === "arte8") {
      image = arte8;
    } else if (name === "arte9") {
      image = arte9;
    } else if (name === "arte10") {
      image = arte10;
    } else if (name === "arte11") {
      image = arte11;
    } else if (name === "arte12") {
      image = arte12;
    } else if (name === "arte13") {
      image = arte13;
    } else if (name === "arte14") {
      image = arte14;
    } else if (name === "arte15") {
      image = arte15;
    } else if (name === "arte16") {
      image = arte16;
    } else if (name === "arte17") {
      image = arte17;
    } else if (name === "arte18") {
      image = arte18;
    } else if (name === "arte19") {
      image = arte19;
    } else if (name === "arte20") {
      image = arte20;
    }
  } else {
    if (name === "arte1") {
      image = arte21;
    } else if (name === "arte2") {
      image = arte22;
    } else if (name === "arte3") {
      image = arte23;
    } else if (name === "arte4") {
      image = arte24;
    } else if (name === "arte5") {
      image = arte25;
    } else if (name === "arte6") {
      image = arte26;
    } else if (name === "arte7") {
      image = arte27;
    } else if (name === "arte8") {
      image = arte28;
    } else if (name === "arte9") {
      image = arte29;
    } else if (name === "arte10") {
      image = arte30;
    } else if (name === "arte11") {
      image = arte31;
    } else if (name === "arte12") {
      image = arte32;
    } else if (name === "arte13") {
      image = arte33;
    } else if (name === "arte14") {
      image = arte34;
    } else if (name === "arte15") {
      image = arte35;
    } else if (name === "arte16") {
      image = arte36;
    } else if (name === "arte17") {
      image = arte37;
    } else if (name === "arte18") {
      image = arte38;
    } else if (name === "arte19") {
      image = arte39;
    } else if (name === "arte20") {
      image = arte40;
    }
  }

  return image;
};

export default getCardImage;
