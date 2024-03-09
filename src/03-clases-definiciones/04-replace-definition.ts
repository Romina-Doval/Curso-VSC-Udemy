import { SuperHero } from './extra/classes';

//* 
//*     Objetivo:
//*         Cambiar únicamente la refencia de SuperHero a Hero
//*         OJO!: Pero no reemplazar los strings
//* 
//*     Tips:
//*         Replace Symbol
//*         F2
//*
//?   Ctrl + click en la clase (ir a la definición de la clase superHero en classes.ts)
//?   Ubicarse arriba del nombre de la clase (superHero) + F2
//?   Cambiar el nombre de la clase lo cambia acá también (donde está importado)
//?   o si si solo quiero cambiarlo en este "file" => f2 sobre superHero y arriba queda asi:
//?     import { SuperHero as Hero } from './extra/classes';
//* 


const wolverine = new SuperHero();
const ironman   = new SuperHero();
const spiderman = new SuperHero();

function greet() {
    return 'El SuperHero Wolverine es genial!';
}

function shout() {
    return 'El SuperHero en este string no se debe de cambiar';
}


console.log({ wolverine, ironman, spiderman, greet: greet(), shout: shout() });