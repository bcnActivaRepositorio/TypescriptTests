interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
};

function showPerson(myPerson: Persona){
  console.log(myPerson);
};

showPerson({
  nombre: 'John',
  apellido: 'Wick',
  edad: 69
});
