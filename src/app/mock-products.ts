import { IProduct, InewProduct } from './models/product';


export const Products: IProduct[] = [
  { image: 'assets/Best-seller-images/234334.jpg',id: 116, name: 'Nike Air Max 97', description:'male sneakers', price:5499},
  { image: 'assets/Best-seller-images/Screenshot 2023-06-16 102516.png',id: 226, name: `Nike Air Max 97 Older Kids' Shoes`, description:'running shoe', price:7499},
  { image: 'assets/Best-seller-images/DQ8961_100_A_PREM.webp',id: 336, name: `Nike Blazer Low '77 Vintage`, description:'sports shoe', price:8999},
  { image: 'assets/Best-seller-images/s-l1200.webp',id: 446, name: 'Porsche Legacy X-Ray Speed', description:'unisex sneakers', price:8799},
];

export const newProducts: InewProduct[] = [
    { Nimage: 'assets/New-arrival-images/BMW-M-Motorsport-Neo-Cat-Mid-Unisex-Sneakers.webp',Nid: 1316, Nname: 'BMW M Motorsport Neo Cat', Ndescription:'Unisex Sneakers', Nprice:5499},
    { Nimage: 'assets/New-arrival-images/PUMA-x-KOCHE-Plexus-Mid-Unisex-Sneakers.webp',Nid: 346, Nname: 'valuedescription', Ndescription:'Women running shoe', Nprice:7499},
    { Nimage: 'assets/New-arrival-images/Slipstream-Lo-Super-Comic-Unisex-Sneakers.webp',Nid: 436, Nname: `PUMAx1DER Backcourt`, Ndescription:'Unisex sneakers', Nprice:8999},
    { Nimage: `assets/New-arrival-images/Anzarun-Camo-Men's-Sneakers.jpeg`,Nid: 126, Nname: 'Mercedes-AMG Petronas Drift Cat 8', Ndescription:'Men running shoe', Nprice:8799},
  ];