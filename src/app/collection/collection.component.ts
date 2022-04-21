import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { Collection } from '../model/base-collection';
import { CollectionsService } from '../collections.service';
import WalletService from '../wallet.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectionId!: string;
  collection$!: Observable<Collection>;
  page: number = 1;
  pageSize: number = 24;
  lookupTokenId: string = "";
  onlyShowMine: boolean = false;
  currentAccount: string = "";
  onlyShowMine$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  tokenIds$: Observable<number[]> = of([]);
  tokenIdsForWallet$!: Observable<number[]>;
  tokenIdsForCollection$!: Observable<number[]>;
  loading: boolean = false;

  constructor(
    private collectionsService: CollectionsService, 
    private route: ActivatedRoute,
    private router: Router,
    private walletService: WalletService
  ) { }

  pageChanged(): void {
    localStorage.setItem(`${this.collectionId}-page`, this.page.toString());
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.collection$ = this.collectionsService.getCollection(this.collectionId);
    });

    this.walletService.currentAccount.subscribe(account => {
      this.currentAccount = account;
      this.onlyShowMine$.next(this.onlyShowMine);
    });

    this.walletService.checkIfWalletIsConnected();

    this.tokenIdsForWallet$ = this.collection$.pipe(
      switchMap(collection => {
        this.loading = true;
        return collection.getTokensForWallet(this.currentAccount).pipe(
          tap(() => this.loading = false),
          map(tokenIds => tokenIds.sort())
        );
      }),
      shareReplay(1)
    );

    this.tokenIdsForCollection$ = this.collection$.pipe(
      switchMap(collection => of(Array.from(Array(collection.getCollectionSize()).keys())))
    );

    this.tokenIds$ = this.onlyShowMine$.pipe(
      switchMap(onlyMine => {
        if(onlyMine && this.currentAccount) {
          return this.tokenIdsForWallet$;
        } else {
          return this.tokenIdsForCollection$;
        }
      })
    )

    if(localStorage.getItem("onlyShowMine")) {
      this.onlyShowMine = true;
      this.onlyShowMine$.next(this.onlyShowMine);
    }

    this.page = parseInt(localStorage.getItem(`${this.collectionId}-page`) ?? "1");
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  lookup() {
    if(this.lookupTokenId && parseInt(this.lookupTokenId)) {
      this.router.navigateByUrl(`/collections/${this.collectionId}/nfts/${this.lookupTokenId}/fits`);
    }
  }

  onSwitchChange() {
    this.onlyShowMine$.next(this.onlyShowMine);
    if(this.onlyShowMine && this.currentAccount) {
      localStorage.setItem("onlyShowMine", "true");
    } else {
      localStorage.removeItem("onlyShowMine");
    }
  }
}
