$(function () {
    var Joueur = {
        initJoueurParDefaut: function (nom) {
            this.nom        = nom;
            this.sante      = 100;
            this.arme       = 10;
            this.mouv       = 3;
            this.positionY  = Math.floor(Math.random() * 9);
            this.positionX  = Math.floor(Math.random() * 9);
        },
    
        decrireJoueur: function () {
            var description = "Je suis:                                               " + this.nom +
                              "\nPoints de vie:                                     " + this.sante + 
                              "\nArme:                                                  " + this.arme + " de degat" +
                              "\nVitesse de mouvement:                     " + this.mouv +
                              "\nPosition actuelle:                                {" + this.positionY + ";" + this.positionX + "}.";

            return description;
            
        
        },
        
        seDeplacerUneCase: function (direction) {
            if (direction === "gauche") {
                this.positionY = this.positionY - mouvement;
            } else if (direction === "droite") {
                this.positionY = Number(this.positionY) + Number(mouvement);
            } else if (direction === "haut") {
                this.positionX = this.positionX - mouvement;
            } else if (direction === "bas") {
                this.positionX = Number(this.positionX) + Number(mouvement);
            } else {
                console.log(direction + " n'est pas un choix possible. Veuillez choisir entre : haut, bas, gauche ou droite.");
            }
            
        },
    
        seDeplacer: function (direction, mouvement) {
            
            //Effacer l'ancienne position
            $('#' + this.positionX + '-' + this.positionY).text('');
            
            //mouvement toujours positif
            if (mouvement < 1) {
                mouvement = 1;
            }
            
            //mouvement ne soit pas superieur a la vitesse max
            if (mouvement > this.mouv) {
                mouvement = this.mouv;
            }
            
            var i;
            for (var i=0; i < mouvement; i++) {
                this.seDeplacerUneCase(direction);
            }
            //Joueur toujours dans le tableau
            if (this.positionX < 0 ) {
                this.positionX = 0;
            }
            
            if (this.positionX > 9 ) {
                this.positionX = 9;
            }
            if (this.positionY < 0) {
                this.positionY = 0;
            }
            if (this.positionY > 9 ) {
                this.positionY = 9;
            }
            
            //Affiche le joueur apres le deplacement
            $('#' + this.positionX + '-' + this.positionY).text(this.nom);
        }
        
    
    };


    var joueur1 = Object.create(Joueur);
    joueur1.initJoueurParDefaut("Kramouille");

    var joueur2 = Object.create(Joueur);
    joueur2.initJoueurParDefaut("Pantxo");

    var joueurs = [joueur1, joueur2];
    joueurs.forEach(function (joueur) {
        console.log(joueur.decrireJoueur());
    });

    console.log(joueur1.positionX)
    $('#' + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 10)).css('background', 'grey');
    $('#' + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 10)).css('background', 'grey');
    $('#' + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 10)).css('background', 'grey');
    $('#' + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 10)).css('background', 'grey');
    $('#' + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 10)).css('background', 'grey');
    $('#' + Math.floor(Math.random() * 9) + "-" + Math.floor(Math.random() * 10)).css('background', 'grey');
    $('#' + joueur1.positionX + "-" + joueur1.positionY).text(joueur1.nom);
    $('#' + joueur2.positionX + "-" + joueur2.positionY).text(joueur2.nom);
    
    $('#b-haut1').click(function () {
        joueur1.seDeplacer('haut', $('#m1').val());
    }); 
    $('#b-haut2').click(function () {
        joueur2.seDeplacer('haut', $('#m2').val());
    }); 
    $('#b-bas1').click(function () {
        joueur1.seDeplacer('bas', $('#m1').val());
    }); 
    $('#b-bas2').click(function () {
        joueur2.seDeplacer('bas', $('#m2').val());
    }); 
    $('#b-gauche1').click(function () {
        joueur1.seDeplacer('gauche', $('#m1').val());
    }); 
    $('#b-gauche2').click(function () {
        joueur2.seDeplacer('gauche', $('#m2').val());
    }); 
    $('#b-droit1').click(function () {
        joueur1.seDeplacer('droite', $('#m1').val());
    }); 
    $('#b-droit2').click(function () {
        joueur2.seDeplacer('droite', $('#m2').val());
    }); 
    $('#joueur1').text(joueur1.decrireJoueur());
    $('#joueur2').text(joueur2.decrireJoueur());
    
    
}); 
