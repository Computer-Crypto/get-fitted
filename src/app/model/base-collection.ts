import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { FitGroup } from "./fit";

export abstract class Collection {

    constructor(http: HttpClient, id:string, name:string, contractAddress:string, logo:string, fitGroups:FitGroup[]) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.fitGroups = fitGroups;
        this.contractAddress = contractAddress;
        this.http = http;
    }

    public id: string;
    public name: string;
    public logo: string;
    public fitGroups: FitGroup[];
    public contractAddress: string;
    private http: HttpClient;

    abstract getTokenImageUrl(tokenId: number): string;
    abstract getCollectionSize(): number;
    getTokensForWallet(address: string): Observable<number[]> {
        return this.http.get<any>(`https://eth-mainnet.alchemyapi.io/v2/o8CAzFq7u_LunKpAVlJ-bSZFPCfYD3-i/getNFTs?owner=${address}&contractAddresses[]=${this.contractAddress}`)
            .pipe(
                map(result => {
                    return result.ownedNfts.map((nft: { id: { tokenId: string; }; }) => parseInt(nft.id.tokenId));
                })
            );
      }
}
