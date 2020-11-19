var monChat = new Animal("Felix","chat","noir");
var monPerroquet = new Animal("Blue","perroquet","bleu",1,2);

console.log(monChat.toString());
console.log(monPerroquet.toString());

var tAnimaux = [monChat, monPerroquet];

for (let i=0; i < tAnimaux.length; i++) {
    tAnimaux[i].dort();
    tAnimaux[i].peutVoler();
}

console.log("\nTESTS");
try {
    var monAnimalTest = new Animal();
    console.log(monAnimalTest.toString()); // Non exécuté
} catch (e) {
    console.error(e.message);
}

try {
    var monAnimalTest = new Animal("Nom");
    console.log(monAnimalTest.toString()); // Non exécuté
} catch (e) {
    console.error(e.message);
}

try {
    var monAnimalTest = new Animal("Nom","Espèce");
    console.log(monAnimalTest.toString()); // Non exécuté
} catch (e) {
    console.error(e.message);
}

try {
    var monAnimalTest = new Animal("Nom","Espèce","Couleur",0,"");
    console.log(monAnimalTest.toString()); // Non exécuté
} catch (e) {
    console.error(e.message);
}