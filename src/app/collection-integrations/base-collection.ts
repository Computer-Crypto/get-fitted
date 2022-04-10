import { Observable } from "rxjs";

export abstract class Collection {

    constructor(id:string, name:string, logo:string, baseImageUri:string) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.baseImageUri = baseImageUri;
    }

    public id: string;
    public name: string;
    public logo: string;
    public baseImageUri: string;

    abstract getTokenImageUrl(tokenId: number): string;
    abstract getTokensForWallet(address: string): Observable<string[]>;
    abstract getCollectionSize(): number;
}
