import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, from, map, Observable, of, switchMap, tap } from 'rxjs';
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
  onlyShowMine: boolean = true;
  currentAccount: string = "";
  onlyShowMine$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  tokenIds$: Observable<number[]> = of([]);
  loading: boolean = false;

  constructor(
    private collectionsService: CollectionsService, 
    private route: ActivatedRoute,
    private router: Router,
    private walletService: WalletService
  ) { }

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

    this.tokenIds$ = combineLatest([this.onlyShowMine$, this.collection$]).pipe(
      switchMap(x => {
        const onlyMine = x[0];
        const collection = x[1];
        if(onlyMine && this.currentAccount) {
          this.loading = true;
          return collection.getTokensForWallet(this.currentAccount).pipe(
            tap(() => this.loading = false)
          );
        } else {
          return of(Array.from(Array(collection.getCollectionSize()).keys()));
        }
      })
    )

    if(localStorage.getItem("onlyShowMine")) {
      this.onlyShowMine = true;
      this.onlyShowMine$.next(this.onlyShowMine);
    }
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
