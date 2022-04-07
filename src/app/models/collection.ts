class Collection {

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
}

export default Collection;