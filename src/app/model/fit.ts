export class FitGroup {
    name!: string;
    fits!: Fit[];
    order!: number;
}

export class Fit {
    name!: string;
    variants!: Variant[];
}

export class Variant {
    name!: string;
    url!: string;
}