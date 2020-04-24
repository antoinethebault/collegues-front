export class Collegue{
    constructor(private _matricule:string, private _nom:string, private _prenoms:string, private _email:string, private _dateDeNaissance:Date, private _photoUrl:string){

    }
    get matricule(){
        return this._matricule;
    }
    set matricule(matricule:string){
        this._matricule = matricule;
    }
    get nom(){
        return this._nom;
    }
    set nom(nom:string){
        this._nom = nom;
    }
    get prenoms(){
        return this._prenoms;
    }
    set prenoms(prenoms:string){
        this._prenoms = prenoms;
    }
    get email(){
        return this._email;
    }
    set email(email:string){
        this._email = email;
    }
    get dateDeNaissance(){
        return this._dateDeNaissance;
    }
    set dateDeNaissance(dateDeNaissance:Date){
        this._dateDeNaissance = dateDeNaissance;
    }
    get photoUrl(){
        return this._photoUrl;
    }
    set photoUrl(photoUrl:string){
        this._photoUrl = this.photoUrl;
    }
}