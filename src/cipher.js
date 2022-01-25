const cipher = {
  encode: function (offset, texto) {
    if (typeof (texto) === "string" && typeof (offset) === "number") { //funciona sólo si texto es string y offset es número
      let coded = "";
      for (let i = 0; i < texto.length; i++) {  //bucle para recorrer el string
        let numbers = texto.charCodeAt(i);     //letras a número
        let minus = "";
        let may = "";
        let signos = "";

        if (numbers >= 97 && numbers <= 122) {   //si cae en minúsculas
          let v1 = parseInt(numbers) - 97 + parseInt(offset)
          let v2 = v1 / 26;
          let v3 = parseInt(v1) - 26 * parseInt(v2);
          minus = parseInt(v3) + 97;
          coded += String.fromCharCode(minus);
          //console.log(coded);
        } else if (numbers >= 65 && numbers <= 90) {
          let v4 = parseInt(numbers) - 65 + parseInt(offset)
          let v5 = v4 / 26;
          let v6 = parseInt(v4) - 26 * parseInt(v5);
          may = parseInt(v6) + 65;
          coded += String.fromCharCode(may);
          //console.log(coded);
        } else if (!((numbers >= 97 && numbers <= 122) && (numbers >= 65 && numbers <= 90))) {
          signos = numbers;
          coded += String.fromCharCode(signos);

          //console.log(signos);
        }
      }
      return coded;

    } else {
      throw new TypeError("Error");
    }
  },
  decode: function (offset2, texto2) {
    if (typeof (texto2) === "string" && typeof (offset2) === "number") {
      let decoded = "";
      for (let i = 0; i < texto2.length; i++) {
        let numbers2 = texto2.charCodeAt(i);
        let minus2 = "";
        let may2 = "";
        let signos2 = "";
        if (numbers2 >= 97 && numbers2 <= 122) {
          let v7 = parseInt(numbers2) - 122 - parseInt(offset2);
          let v8 = v7 % 26;
          minus2 = parseInt(v8) + 122;
          decoded += String.fromCharCode(minus2);
          //console.log(decoded);
        } else if (numbers2 >= 65 && numbers2 <= 90) {
          let v9 = parseInt(numbers2) - 90 - parseInt(offset2);
          let v10 = v9 % 26;
          may2 = parseInt(v10) + 90;
          decoded += String.fromCharCode(may2);
        } else if (!((numbers2 >= 97 && numbers2 <= 122) && (numbers2 >= 65 && numbers2 <= 90))) {
          signos2 = numbers2;
          decoded += String.fromCharCode(signos2);

        }
      }
      return decoded;
    } else {
      throw new TypeError("Error");
    }
  }
};

export default cipher;
