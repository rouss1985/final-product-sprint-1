//Esta función solo convierte un caracter en el nuevo cifrado
function cesarConverter(character){
  //catalogo de posiciones de la 0 a las 26
  var alfabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"

  ];
  //Necesito conocer la posicion del caracter en el arreglo
  var positionletter = alfabet.indexOf(character);
  //console.log(positionletter);
  //va a a cifrar el caracter y lo va a mover 33 posicones ala derecha
  var newPosition= (positionletter+33)-26;
  //console.log(newPosition);
  //me regresa la posicion del nuevo caracter y la llamo como index del arreglo de posiciones
  return alfabet[newPosition];
}

//Aquí obtengo el string compuesto por 4 letras por medio de un prompt
var string = prompt("Ingresa una palabra de 4 letras");
//Convierto mi string en mayusculas por que mi arreglo alfabet esta en mayusculas
var res = string.toUpperCase();
//Ya que obtuve mi string mando a llamar a mi función que me va a convertir cada caracter en una nueva posición
var letterone=cesarConverter(res.charAt(0),);
var lettertwo=cesarConverter(res.charAt(1));
var lettertree=cesarConverter(res.charAt(2));
var letterfour=cesarConverter(res.charAt(3));
//Declaro una nueva variable que contenga los nuevos caracteres del string
var newString= letterone+lettertwo+lettertree+letterfour;
//Muestro el nuevo string ya con la conversión Cesar
document.write(newString);
