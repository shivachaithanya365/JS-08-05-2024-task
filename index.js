// 1.print 2 table or 3 table using loops in javascript
var a = 2;
for (i = 1; i <= 10; i++) {
    var product = a * i
    console.log(a + "x" + i + "=" + product);
}
// 2.print even numbers 0 to 10
for (a = 0; a <= 10; a++) {
    if (a % 2 == 0) {
        console.log(a);

    }
}
// 3.print reverse of even numbers
for (a = 10; a >= 0; a--) {
    if (a % 2 == 0) {
        console.log(a);

    }
}
// 4.print 1 to 10 numbers
for (a = 1; a <= 10; a++) {
    console.log(a);

}
// 4.print 10 to 1 numbers
for (a = 10; a >= 1; a--) {
    console.log(a);

}

var a = 10;
while (a < 20) {
    a++;
    console.log(a);
}
// 11,12,13,14,15,16,17,18,19,20
var a = 0;
while (a < 20) {
    a += 3;
    console.log(a);
    a++;
}
// 3,7,11,15,19
