// for 
for (let a = 0; a < 2; a++ ){
    console.log(`ke ${a}`);
}

// do While
let b = 0;
do{
    console.log(`ke ${b}`);
    b+=1;
}while (b < 2);

// while
let c = 0
while (c<5){
    console.log(`ke ${c}`);
    c++;
}

// break
for (let d = 0; d < 2; d++) {
    if(d=1){
        break;
    }
  console.log(`ke ${d}`);
}

// continue
for (let e = 0; e < 2; e++) {
  if ((e = 1)) {
    continue;
  }
  console.log(`ke ${e}`);
}