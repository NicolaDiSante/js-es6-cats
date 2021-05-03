/* 
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */

// Creo un array di gatti con nome, età, colore e peso

const cats = [
  {
    nome: "Mario",
    eta: 5,
    colore: "#236300",
    sesso: "male"
  },
  {
    nome: "Letizia",
    eta: 4,
    colore: "#933300",
    sesso: "female"
  },
  {
    nome: "Osvaldo",
    eta: 6,
    colore: "#124300",
    sesso: "male"
  },
  {
    nome: "Fuffa",
    eta: 9,
    colore: "#626300",
    sesso: "female"
  },
  {
    nome: "Claudio",
    eta: 1,
    colore: "#426310",
    sesso: "male"
  },
]


// Ciclo FOR EACH per andare dentro ogni cat dell'array cats ed estrarre solo nome e colore
// Di conseguenza richiamo la funzione genera lista che andrà a stamparmi a video i miei parametri
cats.forEach((cat)=>{
  $('#cat-general ul').append(listGenerator(cat.colore, cat.nome));
});


// Devo creare un database per i miei fiocchi quindi devo assegnargli i colori rosa e blue

const pinkRibbon = '#ff00e6';
const blueRibbon = '#0084ff';

const newCats = cats.map((cat) => {

  let color = (cat.sesso === "female") ? pinkRibbon: blueRibbon;
  let opacity = cat.eta / 10;
  
  return {
    ...cat,
    ribbon: {
      color,
      opacity
    }
  }


})

const femaleCats = newCats.filter((cat) => cat.sesso === "female");
const maleCats = newCats.filter((cat) => cat.sesso === "male");

femaleCats.forEach((cat) => {
  $('#cat-female ul').append(listGenerator(cat.colore, cat.nome, cat.ribbon.color, cat.ribbon.opacity))
});

maleCats.forEach((cat) => {
  $('#cat-male ul').append(listGenerator(cat.colore, cat.nome, cat.ribbon.color, cat.ribbon.opacity))
})


const orderedCats = [...femaleCats, ...maleCats];

  //generare un nuovo array con solo nome, colore e ribbon(colore e opacity) e 
  
  const catsTarget = orderedCats.map((cat) => {
    const {nome, colore, ribbon} = cat;

    $('#ordered-cats ul').append(listGenerator(colore, nome, ribbon.color, ribbon.opacity))
    return {nome, colore,ribbon};
  })

  console.log(catsTarget)






function listGenerator(catColor, name, ...ribbon){

  let ribbonTag = "";
    if(ribbon.length > 0){
      ribbonTag = `
      
         <i class="fas fa-ribbon" style="color: ${ribbon[0]}; opacity: ${ribbon[1]}"></i>
      
      `
    }


  let html =
   `
   <li>
      <i class="fas fa-cat" style = "color: ${catColor}"></i>
      ${ribbonTag}
       <span>${name}</span>
   </li>
   `;
  
  return html;
}