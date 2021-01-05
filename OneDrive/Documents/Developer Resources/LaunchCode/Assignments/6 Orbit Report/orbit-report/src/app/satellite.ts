export class Satellite {
     //Define properties and Constructor for class
     name: string;
     orbitType: string;
     type: string;
     operational: boolean;
     launchDate: string;
     constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
     }

     //Step 6: Will highlight Space Debris red on table
     shouldShowWarning(){
        if(this.type === 'Space Debris'){
           return true;
        } else {
           return false;
        }
    }
}
