


class Personaje{
    #poder;//Private Privado
    static personaje = null;
    constructor(p1){
        this.#poder = p1;
    }
    static getInstance(p1){
        if(!(Personaje.personaje instanceof Object)){
            Personaje.personaje = new Personaje(p1);
        }
        return Personaje.personaje;
    }
    get getpoder(){
        return this.#poder;
    }
    set setpoder(PODER){
        this.#poder = PODER;
    }
}
class Hechicero extends Personaje{
    static hechicero = null;
    constructor(p1){
        super(p1);
    }
    static getInstance(){
        if(!(Hechicero.hechicero instanceof Object)){
            Hechicero.hechicero = new Hechicero(200);
        }
        return Hechicero.hechicero;

    }
    saludo(){
        return "Hola Como estas";
    }
}


console.log(Hechicero.getInstance(100).getpoder);
console.log(Hechicero.getInstance().setpoder = 500);
console.log(Hechicero.getInstance().getpoder);
console.log(Hechicero.getInstance().saludo());








// class calculadora{
//     constructor(NUM1,NUM2){
//         this.num1 = NUM1;
//         this.num2 = NUM2;
//     }
//     suma(){
//         return `Suma de la clase calculadora ${this.num1 + this.num2}`;
//     }
// }
// class avion extends calculadora{
//     constructor(NUM1, NUM2,ALAS, MODELO){
//         super(NUM1, NUM2);
//         this.alas = ALAS;
//         this.modelo = MODELO;
//     }
//     suma(){
//         return `El calculo para construir el avio es de : ${this.num1 + this.num2 + 10}`;

//     }
//     contruirAvion(){
//         return this.suma();
//     }
// }





// let llave2 = new avion(5,8,2,"Avioneta");

// console.log(llave2);

// let llave = new calculadora(2,3);
// console.log(llave.suma());

