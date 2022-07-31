export interface Product{
    id:number;
    uid:string;
    blend_name:string;
    orgin:string;
    variety:string;
    notes:string;
    intensified:string;

}

export interface ProductList{
    products:Product[];
}

