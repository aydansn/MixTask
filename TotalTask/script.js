//1.Array-in ichindeki, elemenleri console-a cixart
const arrOne = [1,2,34,5,6,7,4,2];
for(i=0; i<arrOne.length;i++){
    console.log(i);
}

//2.Arrayin ichindeki elementleri,topla
const arrTwo = [2,4,6,7,84,23,3565];
let sum = 0;
for(let i =0; i<arrTwo.length;i++){
   sum += arrTwo[i];
}
console.log(sum);

//3.Arrayin ichindeki elementlerden, cut olanlari qaytar
const cutArr = [282,293,173,271,2813,274,268];
function cutEdedler(arr){
    let evenNumbers = arr.filter(num =>
        num % 2 === 0);
    return evenNumbers;
};
let evenNumbers = cutEdedler(cutArr);
console.log(evenNumbers);

//4.faktoriali tap(function yaz,shert qoy);
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log(n,answer);

//5.stringi, tersine cevir. return et stringi
  function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0); 
     } 
    reverseString("hello");

//6.Arrayin ichindeki Max-ededi tap(function yaz, max ededi return et)
    const ededler = [282,293,173,271,2813,274,268];
    function maxEdedler(arr2){
        let maxNumbers = arr2.filter(ededler =>
          ededler === Math.max(ededler));
        return maxNumbers;
    };
    let maxNumbers = maxEdedler(ededler);
    console.log(maxNumbers);

//7.Sade ededleri tap. function yaz, sade olub olmadigini yoxla
    let elements = [32,90,11,33,41,21,31.7];
    for(let i=0; i<elements.length;i++){
      if(elements[i] %2===0 ){
        console.log(i,"sadedir");
      }
      else{
        console.log("sade deyil");
      }
    }

//task8(cox cetin)

//9.iki Array-leri birleshdirin
    const a = [3,4,5,6];
    const b = [4,3,2,1];
    function birleshdir(a, b) {
      return a.concat(b);
  }
  const birleshmishArray = birleshdir(a, b);
  console.log(birleshmishArray);

//10.Array elementlerinin, 2qatini qaytarir.
  const numbers = [1, 2, 3, 4, 5];
  function ikiqatElement(arr) {
    return arr.map(num => num * 2);
}
 const ikiqatEded = ikiqatElement(numbers);
 console.log(ikiqatEded); 

//11.Index-i ve elementi ekranda cap et.
 const numbers2 = [2,3,4,5,6,91];
 function indexGoster(arr) {
  arr.forEach((element, index) => {
      console.log(`index ${index}: ${element}`);
  });
}
indexGoster(numbers2);

//12.Filter istf ederek, function yaz.Arrayin ichindeki, tek elementleri qaytar.
const newArr = [362,282,191,261,873,985,271];
function tekElement(arr) {
  return arr.filter(num => num %2===1);
}
const tekEded = tekElement(newArr);
console.log(tekEded); 

//13.Arrayin ichindeki elementlerin, kvadratini qaytar.
const numbers3 = [1, 2, 3, 4, 5];
function kvadratiElemet(arr) {
  return arr.map(num => num * num);
}

const kvadrateded = kvadratiElemet(numbers);
console.log(kvadrateded); 

//task14

//15.Object yarat.function , object-in key-i qaytarsin.
const person = {
  name: 'Jane',
  age: 25,
  city: 'San Francisco'
};

function objectContainsKey(obj, key) {
  return key in obj;
}

console.log(objectContainsKey(person, 'city'));
console.log(objectContainsKey(person, 'job')); 

//16.
