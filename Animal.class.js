function Animal(monNom, monEspece, maCouleur, 
                monVol = false, mesPattes = 4) {
	// Propriétés
	var nom = monNom;
	var espece = monEspece;
	var couleur = maCouleur;
    var vole = monVol;
    var nbPattes = mesPattes;
	
	// ACCESSEURS ------------------------------
	this.getNom = function() {
		return nom;
	}
    
    // Impossible de changer de Nom
	var setNom = function(newName) {
        if (newName) nom = newName;
        else throw new Error("Nom incorrect");
	}
    
    this.getEspece = function() {
		return espece;
	}
    
    // Impossible de changer d'espèce
	var setEspece = function(newSpecies) {
        if (newSpecies) espece = newSpecies;
        else throw new Error("Espèce incorrecte");
    }
    
    this.getCouleur = function() {
		return couleur;
	}
    
    // On peut changer de couleur
	this.setCouleur = function(newColor) {
        if (newColor) couleur = newColor;
        else throw new Error("Couleur incorrecte");
	}

    this.getVole = function() {
		return vole;
	}
	
	var setVole = function(newVol) {
        if (newVol != false) vole = true;
        else vole = false;
    }
    
    this.getNbPattes = function() {
		return nbPattes; 
	}
    
    // Impossible de changer le nombre de pattes
	var setNbPattes = function(newPaw) {
        if (isNaN(newPaw) || newPaw < 1) throw new Error("Nombre de pattes incorrects");
        else nbPattes = newPaw;
	}

    // Contrôles constructeur
    setNom(monNom);
    setEspece(monEspece);
    this.setCouleur(maCouleur);
    setVole(monVol);
    setNbPattes(mesPattes);

    // METHODES APPLICATIVES ----------------------
	this.dort = function() {
		console.log(nom + " dort.......");
	}
    
    this.peutVoler = function() {
        if(vole) console.log(nom + " vole dans le ciel...");
        else console.log(nom + " reste cloué au sol !!!");
    }

	this.toString = function() {
		return nom + " est un " + espece + " " + couleur 
                + " avec " + nbPattes + " pattes"
                + "(qui " + (vole?"vole":"ne vole pas") + ")";
	}
	
}