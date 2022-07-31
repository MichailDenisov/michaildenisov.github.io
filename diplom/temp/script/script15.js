let a=38
console.log(typeof a); //number

let b=false
console.log(typeof b); //boolean 

let c ='stroka'
console.log(typeof c); //string

let d;
console.log(typeof d); //undefined

const i=3.14
console.log(i); //3.14 константа


let g=1    //цикл 1
while (g < 13) {
    g++ ;
    console.log(g);
}

let e=3  //цикл 2
do {console.log(e);
    e++;
} while (e<5)

for (var u = 3; u < 11; u++) {
    console.log(u); } //цикл 3

    let UserAge= 5; //switch
      switch(UserAge) {
        case 1:
        case 2:
      console.log('Слон')
        break;
        case 3:
        case 4:
          console.log('Бегемот')
        break;
        case 5:
        case 6:
          console.log('Жираф')
        break;
    }


