export class ProductModel{
    constructor(
        public productId: string,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public description:string,
        public price: string,
        public starRating: string,
        public imageUrl: string
    ){}
}
