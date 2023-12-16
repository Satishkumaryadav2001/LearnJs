const marvel_heros=["thor","IronMan","spiderMan"]
const dc_hroes=["suparman","IronMan","batman"]

console.log(marvel_heros);//[ 'thor', 'IronMan', 'spiderMan' ]
console.log(dc_hroes);//[ 'suparman', 'IronMan', 'batman' ]

marvel_heros.push(dc_hroes);

console.log(marvel_heros);//[ 'thor', 'IronMan', 'spiderMan', [ 'suparman', 'IronMan', 'batman' ] ]

console.log(marvel_heros[3]);[ 'suparman', 'IronMan', 'batman' ]

console.log(marvel_heros[3][2]);//batman

const allhero=marvel_heros.concat(dc_hroes)
console.log(allhero);//[ 'thor', 'IronMan', 'spiderMan', 'suparman', 'IronMan', 'batman' ] ]


const all_new_hero={...marvel_heros,...dc_hroes}

console.log(all_new_hero);

const another_array=[1,2,3,[4,5,6],7,[4,5]]

const real_another_array=another_array.flat(Infinity)

console.log(real_another_array);

/*[
    1, 2, 3, 4, 5,
    6, 7, 4, 5
  ]*/

  console.log(Array.isArray("Satish"));//false
  console.log(Array.from("Satish"));//[ 'S', 'a', 't', 'i', 's', 'h' ]


  console.log(Array.from({name:"Satish"}));//[]  intersting

  let score1=100;
  let score2=200;
  let score3=300;

  console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]