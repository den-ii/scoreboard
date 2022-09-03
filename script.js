let sboard1 = document.getElementById('one');
let sboard2 = document.getElementById('two');
let count1 = 0;
let count2 = 0;
console.log('sboard1');
function add1() {
  
count1++;
sboard1.textContent = count1;
  check();
}
function add12() {
count2++;
sboard2.textContent = count2;
  check();
}
function add2() {
  count1 += 2;
  sboard1.textContent = count1;
  check();
}
function add22() {
  count2 += 2;
  sboard2.textContent = count2;
  check();
}
function add3() {
  count1 += 3;
  sboard1.textContent = count1;
  check();
}
function add32() {
  count2 += 3;
  sboard2.textContent = count2;
  check();
}
function check() {
if (count1 > count2)
{
  sboard1.style.color = '#e3ff00';
  sboard2.style.color = '#F94F6D';
}
else if(count2 > count1)  {
  sboard2.style.color = '#e3ff00';
  sboard1.style.color = '#F94F6D';
}
else {
  sboard2.style.color = '#F94F6D';
  sboard1.style.color = '#F94F6D';
}
}
//console.log(sboard1.textContent);