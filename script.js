/*
SKRYTO KVŮLI DALŠÍM CVIČENÍM - ZÁKLADNÍ OPERACE V JS
document.body.innerHTML += 'Ahoj světe!'; //text, musí být v uvozovkách, můžou být dvojité nebo jednoduché, nakonci středník
document.body.innerHTML += '<br>'; //zalomení řádku, musí být v uvozovkách
document.body.innerHTML += 42; //chápáno jako číslo - takhle psát OK
document.body.innerHTML += '<br>';
document.body.innerHTML += '42'; //NEní chápáno prohlížečem jako číslo, ale jako text, nešlo by s tím počítat
document.body.innerHTML += '<br>';
document.body.innerHTML += 2 + 5; //sčítání, čte vzleva doprava
document.body.innerHTML += '<br>';
document.body.innerHTML += 10 - 5; //odčítání
document.body.innerHTML += '<br>';
document.body.innerHTML += 2 * 5; //násobení
document.body.innerHTML += '<br>';
document.body.innerHTML += 10 + 5 * 2; //násobení má přednost - jako v matematice
document.body.innerHTML += '<br>';
document.body.innerHTML += 10 / 5; //dělení
document.body.innerHTML += '<br>';
document.body.innerHTML += 5 % 2; //zbytrek po dělení
*/

/* NULA
document.body.innerHTML += ''; //prázdný řetězec
document.body.innerHTML += 0; //číslo 0
document.body.innerHTML += '0'; //text 0
*/

/*FUNKCE
document.body.innerHTML += Math.round(11.5555); //zaokrouhlení
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(11.99); //dolu
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.ceil(11.111); //nahoru
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.random(); //náhodné číslo od 0 do 1
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.random() * 10; //náhodné číslo
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(Math.random() * 6) + 1; //číslo na kostce - hod kostkou
*/

//PROMĚNNÉ
document.body.innerHTML +=
  'Pomocí jednoduché aritmetiky spočítejte, kolik si jako programátor vyděláte.';
document.body.innerHTML += '<br>';
const plat = 40000; //příjem
const naklady = plat * 0.6; //60% náklady
const danSazba = 0.15; // 15% daňová dazba
const dan = (plat - naklady) * danSazba; // výpočet daně
document.body.innerHTML += Math.floor(dan); //15% daň z výplaty po odečtení nákladů 60%, zaokrouhleno dolu na celá čísla
document.body.innerHTML += '<br>';
const cisloNaKostce = Math.floor(Math.random() * 6) + 1;
document.body.innerHTML += 'Na kostce padlo: ' + cisloNaKostce;
document.body.innerHTML += '<br>';
