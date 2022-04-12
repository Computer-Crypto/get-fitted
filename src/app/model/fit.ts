export class FitGroup {
    name!: string;
    fits!: Fit[]
}

export class Fit {
    name!: string;
    variants!: Variant[];
}

export class Variant {
    name!: string;
    url!: string;
}