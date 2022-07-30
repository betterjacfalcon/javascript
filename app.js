let a=10;
// var b=10; no es buena practiva crear variable con var
let b = 10, 
    d =20, 
    y = 'Hola ',
    z = 'Alejandra Rodriguez'
    x = a + b;
const c=30;
const saludo = y+z;

//c=20; no se puede hacer

console.log('x', x);
console.warn('x',x);
console.error('x',x);

console.log('a', a);
console.log('b', b);
console.log('c', c);

//Insertan estilos css
console.log('%c Mis Variables', 'color:blue; font-weight:bold');
console.log({a});
console.log({b});
console.log({c});

console.table({a,b,c,d,x,y,z});
console.log({saludo});