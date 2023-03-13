/**
 * Esta función regresa el area de un cuadrado
* @function 
* @param {Number} lado medida del lado del cuadrado 
 * @returns Number area del cuadrado
 */
export const AreaCuadrado = (lado)=> lado*lado 

/**
 * @function
 * @param {Number} base medida de la base del triangulo 
 * @param {Number} altura medida de la altura del triangulo 
 * @returns Number Area del triangulo
 */
export const AreaTriangulo = (base,altura) => base*altura/2

/**
 * @function
 * @param {Number} radio medida del radio del circulo 
 * @returns Number devuelve el calculo del area del circulo
 */
export const AreaCirculo = (radio) => Math.PI * radio **2
