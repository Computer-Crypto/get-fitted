import { Observable } from "rxjs";
import { FitGroup } from "./fit";

export abstract class Collection {

    constructor(id:string, name:string, logo:string, baseImageUri:string, fitGroups:FitGroup[]) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.baseImageUri = baseImageUri;
        this.fitGroups = fitGroups;
    }

    public id: string;
    public name: string;
    public logo: string;
    public baseImageUri: string;
    public fitGroups: FitGroup[]

    abstract getTokenImageUrl(tokenId: number): string;
    abstract getTokensForWallet(address: string): Observable<number[]>;
    abstract getCollectionSize(): number;
}
