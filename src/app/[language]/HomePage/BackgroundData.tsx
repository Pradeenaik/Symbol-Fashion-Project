// data.ts

export interface Brand {
    name: string;
    description?: string; // Optional for additional brands
    logo: string;
  }
  
  export interface FeatureItem {
    title: string;
    imageUrl: string;
  }
  
  // Brands for the "About Us" section
  export const brands: Brand[] = [
    { name: "Forbes", description: "SYMBOL: REINVENTING LUXURY FASHION RETAIL", logo: "https://symbol.fashion/assets/webpack/f31255d0/forbse.svg" },
    { name: "Marie Claire", description: "SYMBOL: A NEW EXPERIENCE IN LUXURY FASHION", logo: "https://symbol.fashion/assets/webpack/f31255d0/marie_claire.svg" },
    { name: "Vogue", description: "SYMBOL IS A PLACE WHERE FASHION MEETS ART", logo: "https://symbol.fashion/assets/webpack/f31255d0/vogue.svg" },
  ];
  
  // Additional brands for the "All Brands" section
  export const additionalBrands: Brand[] = [
    { name: "STEFANO RICCI", logo: "https://media.symbol.fashion/aio-images/52/f1/52f144b0fc8f1eb2ccf8dc6b56e8e2ee/61590318-368c-4b13-9c96-9b74f98df226.png" },
    { name: "DOLCE&GABBANA", logo: "https://media.symbol.fashion/aio-images/c5/d4/c5d44083ca8548b535fb9ef1d2924a18/13547f6c-0f02-475c-8158-060b425303eb.png" },
    { name: "BALMAIN", logo: "https://media.symbol.fashion/aio-images/cc/e8/cce8579e11bdff8e9790bce6f28b0d10/6bfeaa3b-a458-464e-a657-968331bb892d.png" },
    { name: "SANTONI", logo: "https://media.symbol.fashion/aio-images/8d/7d/8d7dddd863db0f2d75342c6bdab42831/cce32c76-ca47-469a-bc2f-95225aa83349.png" },
    { name: "ISAIA", logo: "https://media.symbol.fashion/aio-images/b8/c6/b8c607e1f1bdcc0441a07f971c704527/11ee90bc-bad2-4156-bc51-5b649d057f32.png" },
    { name: "BRUNELLO CUCINELLI", logo: "https://media.symbol.fashion/aio-images/40/64/4064d27e4e4929b79df24cb57449c075/aa401db8-06f6-4891-b3a5-41a9e86614d2.png" },
    { name: "PARIS", logo: "https://media.symbol.fashion/aio-images/cc/e8/cce8579e11bdff8e9790bce6f28b0d10/6bfeaa3b-a458-464e-a657-968331bb892d.png" },
    { name: "Off-White™", logo: "https://media2.symbol.fashion/aio-images/27/18/2718227ab66d069cdecfdb04535c5502/18bf3525-e995-4ea5-bb7b-241b9358ed19.png" },
    { name: "PRADA", logo: "https://media.symbol.fashion/aio-images/da/36/da369ec25d6fdfbc46aca47b13118958/fc9c930d-29d6-4d30-93a0-044cc48f2a8c.png" },
    { name: "MANDELLI", logo: "https://media.symbol.fashion/aio-images/6c/91/6c91e5e7eca2eecf57c8eb7aca86a9d7/90950951-31fc-4955-82fd-43e3d8b072fd.png" },
  ];
  
  // Features for the "Features" section
  export const features: FeatureItem[] = [
    {
      title: 'DELIVERY TO 27 EUROPEAN UNION COUNTRIES',
      imageUrl: 'https://symbol.fashion/img/dpd_main.png',
    },
    {
      title: 'FREE RETURNS AND EXCHANGES WITHIN 30 DAYS',
      imageUrl: 'https://symbol.fashion/new_style/img/promoblock_exchange.png',
    },
    {
      title: 'SAFE PAYMENTS VIA APPLEPAY & PayPal',
      imageUrl: 'https://symbol.fashion/new_style/img/paypal_apay.png',
    },
    {
      title: '200+ DESIGNERS AVAILABLE NOW',
      imageUrl: 'https://symbol.fashion/new_style/img/promoblock_user_group.png',
    },
  ];

  export interface Product {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: "SNEAKERS", imageUrl: "https://media2.symbol.fashion/aio-images/f2/fd/f2fd36c8c34fd45c60c50a05d748ba5a/2e6bc84c-9e64-48fd-83dd-b176f4c23999.jpg" },
    { id: 2, name: "HOODIES", imageUrl: "https://media3.symbol.fashion/aio-images/67/a9/67a908dec33a4b32a3798ce41971ecf4/f8f3d84a-4cd6-48b5-93eb-a073ebb6859f.jpg" },
    { id: 3, name: "WINDBREAKERS", imageUrl: "https://media3.symbol.fashion/aio-images/45/e7/45e707eba074b055c88fd89a135db2d8/827bfc8a-eb33-49f1-9720-66cfa0e6ecde.jpg" },
    { id: 4, name: "BOOTS", imageUrl: "https://media3.symbol.fashion/aio-images/5d/87/5d879cde2e3601a1acfe8fc361cf950d/7d5fab14-fe4a-47bb-988c-0d90f9f16fcb.jpg" },
    { id: 5, name: "COAT", imageUrl: "https://media2.symbol.fashion/aio-images/e2/a9/e2a96c669561ed37f7c0ee40b6fe0d58/ef2ee3c5-3db2-4089-95c5-773292817345.jpg" },
    { id: 6, name: "RAINCOATS", imageUrl: "https://media2.symbol.fashion/aio-images/02/59/0259b43d8e31dcdec9cd959d991268eb/934afd55-335c-4db5-a5c0-9ea7fb47621f.jpg" },
    { id: 7, name: "STRAIGHT JEANS", imageUrl: "https://media2.symbol.fashion/aio-images/6f/b8/6fb8b817e2517258270072460cc7097f/5e38bf98-5c79-48d6-b392-ea32b9c9e66f.jpg" },
    { id: 8, name: "SHOULDER BAGS", imageUrl: "https://media3.symbol.fashion/aio-images/23/ba/23ba76004952d5488fc3372395ae9c26/47862b79-ec0a-4694-a99d-11393190fbb2.jpg" },
  ];

  export const newInProducts = [
    {
      id: 1,
      imageUrl: "https://media3.symbol.fashion/aio-images/3d/f8/3df827ba6f9be45168cf4e34ef29452d/cf8645ab-54af-4b7e-85a9-a7a76f136d29.jpg",
      name: "Product 1",
    },
    {
      id: 2,
      imageUrl: "https://media3.symbol.fashion/aio-images/53/99/539935d842075dc718a016fa8119dd79/c6701186-01af-4fbd-8c73-639172fab6f6.jpg",
      name: "Product 2",
    },
    {
      id: 3,
      imageUrl: "https://media3.symbol.fashion/aio-images/5d/00/5d00f3b4a3d00b7d7aa77f3b4019a1c8/2d8b0b94-25b4-4979-8948-a4def9c09495.jpg",
      name: "Product 3",
    },
    {
      id: 4,
      imageUrl: "https://media3.symbol.fashion/aio-images/77/12/7712d1adf6e7fadabfe4bd7a3b94f247/4b029682-4b6b-420d-aeed-05697724e3be.jpg",
      name: "Product 4",
    },
    {
      id: 5,
      imageUrl: "https://media3.symbol.fashion/aio-images/92/de/92defa946dc74b4408db3a24af6ba02b/274dafe6-17b5-418e-98ba-cbaec49660c1.jpg",
      name: "Product 5",
    },
    {
      id: 6,
      imageUrl: "https://media3.symbol.fashion/aio-images/28/17/2817ffe9e9fb4a0fffd18c0f005e2e6b/a87e7408-e4ca-4f24-999c-328e020dae83.jpg",
      name: "Product 6",
    },
  ];


export interface Product {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export const actualProducts: Product[] = [
    { id: 1, name: "Accessories SS'24", imageUrl: "https://media3.symbol.fashion/aio-images/17/40/174013e57c7e597b5b2709e9f8db8ca3/f994dc85-b111-4eec-ac28-bf14639d2dd9.png" },
    { id: 2, name: "Clothes SS'24", imageUrl: "https://media3.symbol.fashion/aio-images/4f/bf/4fbf338e43b123cabd769c486a0213f8/743445de-18b8-4937-bddf-15e3ff9cc4c8.png" },
    { id: 3, name: "Shoes SS'24", imageUrl: "https://media3.symbol.fashion/aio-images/7c/06/7c0629ee04db53399666ade39ae73e00/02748f29-fe7c-4ba7-b9f6-2d372e929a6e.png" },
  ];

  export const featuredProducts = [
    {
      id: 1,
      name: "Limited Edition Sneakers",
      price: "€120",
      imageUrl: "https://media3.symbol.fashion/aio-images/c6/e1/c6e12598780c2558c4078b7d461902cf/ad996988-c6f1-4864-a23c-01ed1cf32b67.jpg",
    },
    {
      id: 2,
      name: "Premium Leather Jacket",
      price: "€299",
      imageUrl: "https://media2.symbol.fashion/aio-images/02/5c/025c4d69eff247e9b1a07f1394cd5411/3448fdfe-9582-43a8-889f-ce88ef8e1a10.jpg",
    },
    {
      id: 3,
      name: "Exclusive Handbag",
      price: "€499",
      imageUrl: "https://media3.symbol.fashion/aio-images/57/45/57457354c33d93b6c974259d7965b9e5/09f2b1cc-9884-4ec4-9e59-9deb46f51c33.jpg",
    },
    {
      id: 4,
      name: "Luxury Timepiece",
      price: "€1,200",
      imageUrl: "/images/luxury-watch.jpg",
    },
    {
      id: 5,
      name: "Designer Shoes",
      price: "€250",
      imageUrl: "/images/designer-shoes.jpg",
    },
    {
      id: 6,
      name: "Modern Sunglasses",
      price: "€180",
      imageUrl: "/images/modern-sunglasses.jpg",
    },
  ];

  export const recommendedProducts = [
    {
      id: 1,
      name: "STEFANO RICCI",
      imageUrl: "https://media2.symbol.fashion/aio-images/00/dd/00dd6dbc688c49d5d0993ba21de5f868/890ca2db-333f-47aa-83be-5b67631b1d88.jpg",
      price: "$200"
    },
    {
      id: 2,
      name: "AMIRI",
      imageUrl: "https://media3.symbol.fashion/aio-images/a2/1f/a21ff7dfa2b5ab1d8bf9f3ea9aace90b/40956a1c-ac7f-4d0c-99ea-6c46f97786ab.jpg",
      price: "$200"
    },
    {
      id: 3,
      name: "LE SILLA",
      imageUrl: "https://media3.symbol.fashion/aio-images/7a/46/7a464b52cb936bc33fd4baa2b53c40b2/e4bf288f-a8c2-46f2-baa3-16519532865f.jpg",
      price: "$200"
    }
  ];
  