import TraveClub from "./TravelClub";

class ClubCoordinator {

    clubs: TraveClub[];

    constructor() {
        
        this.clubs = [];
    }

    hasClubs(): boolean {

        return this.clubs.length !== 0;
    }

    exist(name: string): boolean {

        for (let i = 0; i < this.clubs.length; i++) {
            
            if ((this.clubs[i] !== undefined) && (this.clubs[i].name === name)) {
                return true;
            }
            
        }
        return false;
    }

    register(newClub: TraveClub): string {

        const foundClub = this.exist(newClub.name);

        if (foundClub) {
            
            return '0';
        }

        this.clubs.push(newClub);

        return newClub.name;
    }

    find(name: string): TraveClub | null {

        for (let i = 0; i < this.clubs.length; i++) {
            
            if (this.clubs[i].name === name) {
                
                return this.clubs[i];
            }
            
        }
        return null;
    }

    findAll(): TraveClub[] {
        
        return this.clubs;

    }
}

export default ClubCoordinator;