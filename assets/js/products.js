/* FJ Production product catalogue
   All image filenames point to owner-provided images stored in assets/products.
   Product prices are copied from the provided product images/text. */

const BUSINESS = {
  brand: "FJ Production",
  tagline: "Premium Beauty & Skincare Products",
  phoneDisplay: "0333 4105708",
  phoneIntl: "923334105708",
  address: "Sabih Beauty Salon, Main Bazar, Fatehgarh, Lahore, Pakistan",
  mapsUrl: "https://maps.app.goo.gl/DVWHDLgLYU5bQCsbA",
  defaultWhatsappText: "Hello FJ Production, I would like to know more about your skincare products."
};

const P = "assets/products/";

const DEFAULT_PRODUCTS = [
  {
    id: "ice-cool-face-wash",
    name: "Ice Cool Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0046.jpg",
    gallery: [P + "IMG-20260817-WA0078.jpg", P + "IMG-20260817-WA0046.jpg", P + "IMG-20260817-WA0064.jpg", P + "IMG-20260817-WA0065.jpg", P + "IMG-20260817-WA0022.jpg", P + "IMG-20260817-WA0032.jpg", P + "IMG-20260817-WA0063.jpg"],
    description: "A refreshing Ice Cool face wash from the FJ Production skincare range. Product image, name, size, and price are shown exactly as provided by the owner.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "Order directly through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "For guidance before ordering, message FJ Production on WhatsApp."],
    available: true,
    featured: true
  },
  {
    id: "aqua-glow-face-wash",
    name: "Aqua Glow Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0034.jpg",
    gallery: [P + "IMG-20260817-WA0035.jpg", P + "IMG-20260817-WA0034.jpg", P + "IMG-20260817-WA0022.jpg", P + "IMG-20260817-WA0032.jpg", P + "IMG-20260817-WA0063.jpg"],
    description: "Aqua Glow Face Wash from FJ Production, presented with owner-provided product photography and exact provided pricing.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "WhatsApp-only order system"],
    howToUse: ["Use as directed on the product label.", "Contact FJ Production if you need usage guidance before purchase."],
    available: true,
    featured: true
  },
  {
    id: "aloe-vera-face-wash",
    name: "Aloe Vera Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0045.jpg",
    gallery: [P + "IMG-20260817-WA0045.jpg", P + "IMG-20260817-WA0066.jpg", P + "IMG-20260817-WA0037.jpg", P + "IMG-20260817-WA0052.jpg", P + "IMG-20260817-WA0033.jpg"],
    description: "Aloe Vera Face Wash from the FJ Production face care range. The product is listed with the owner-provided image and price.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "Order confirmation through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "Avoid unsupported use; ask FJ Production on WhatsApp if unsure."],
    available: true
  },
  {
    id: "cherry-face-wash",
    name: "Cherry Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0030.jpg",
    gallery: [P + "IMG-20260817-WA0030.jpg", P + "IMG-20260817-WA0067.jpg", P + "IMG-20260817-WA0041.jpg", P + "IMG-20260817-WA0059.jpg", P + "IMG-20260817-WA0018.jpg"],
    description: "Cherry Face Wash by FJ Production, shown with owner-provided product photos and exact price details.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "Order through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "Message FJ Production for product guidance before ordering."],
    available: true
  },
  {
    id: "blueberry-face-wash",
    name: "Blueberry Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0070.jpg",
    gallery: [P + "IMG-20260817-WA0070.jpg", P + "IMG-20260817-WA0022.jpg", P + "IMG-20260817-WA0032.jpg", P + "IMG-20260817-WA0063.jpg"],
    description: "Blueberry Face Wash from FJ Production. Browse the owner-provided images and order directly on WhatsApp.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "WhatsApp order available"],
    howToUse: ["Use as directed on the product label.", "For details, chat with FJ Production on WhatsApp."],
    available: true
  },
  {
    id: "alpha-arbutin-glow-face-wash",
    name: "Alpha Arbutin Glow Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0027.jpg",
    gallery: [P + "IMG-20260817-WA0025.jpg", P + "IMG-20260817-WA0027.jpg", P + "IMG-20260817-WA0069.jpg", P + "IMG-20260817-WA0041.jpg", P + "IMG-20260817-WA0059.jpg"],
    description: "Alpha Arbutin Glow Face Wash by FJ Production. Product name, size, image and price follow the provided product material.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "Order through WhatsApp only"],
    howToUse: ["Use as directed on the product label.", "Contact FJ Production if you want to confirm suitability before ordering."],
    available: true,
    featured: true
  },
  {
    id: "vitamin-c-face-wash",
    name: "Vitamin C Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0021.jpg",
    gallery: [P + "IMG-20260817-WA0077.jpg", P + "IMG-20260817-WA0021.jpg", P + "IMG-20260817-WA0060.jpg", P + "IMG-20260817-WA0038.jpg", P + "IMG-20260817-WA0061.jpg"],
    description: "Vitamin C Face Wash from FJ Production, listed with owner-provided imagery and exact provided price.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "WhatsApp-only ordering"],
    howToUse: ["Use as directed on the product label.", "For questions before purchase, contact FJ Production on WhatsApp."],
    available: true,
    featured: true
  },
  {
    id: "lemon-face-wash",
    name: "Lemon Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0028.jpg",
    gallery: [P + "IMG-20260817-WA0005.jpg", P + "IMG-20260817-WA0028.jpg", P + "IMG-20260817-WA0038.jpg", P + "IMG-20260817-WA0061.jpg"],
    description: "Lemon Face Wash from FJ Production. The product is displayed with the business owner's image and provided price.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "Order confirmation through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "Message FJ Production for more information before ordering."],
    available: true
  },
  {
    id: "anti-acne-face-wash",
    name: "Anti Acne Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0058.jpg",
    gallery: [P + "IMG-20260817-WA0026.jpg", P + "IMG-20260817-WA0058.jpg", P + "IMG-20260817-WA0033.jpg", P + "IMG-20260817-WA0037.jpg", P + "IMG-20260817-WA0052.jpg"],
    description: "Anti Acne Face Wash by FJ Production, shown with provided product packaging images and exact price.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "WhatsApp order available"],
    howToUse: ["Use as directed on the product label.", "For skin-specific questions, contact FJ Production before ordering."],
    available: true
  },
  {
    id: "rose-petal-face-wash",
    name: "Rose Petal Face Wash",
    category: "Face Wash",
    type: "Face Care",
    price: "Rs. 1,050 (150ml)",
    minPrice: 1050,
    variants: [{ label: "150ml", price: "Rs. 1,050", messagePrice: "Rs. 1,050 (150ml)" }],
    image: P + "IMG-20260817-WA0043.jpg",
    gallery: [P + "IMG-20260817-WA0043.jpg", P + "IMG-20260817-WA0062.jpg", P + "IMG-20260817-WA0041.jpg", P + "IMG-20260817-WA0059.jpg", P + "IMG-20260817-WA0018.jpg"],
    description: "Rose Petal Face Wash from FJ Production. Displayed with the exact owner-provided product imagery and price.",
    features: ["Face wash product", "Available size: 150ml", "Exact provided price: Rs. 1,050", "Order through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "For product information, chat on WhatsApp before ordering."],
    available: true
  },
  {
    id: "blueberry-body-wash",
    name: "Blueberry Body Wash",
    category: "Body Care",
    type: "Body Wash",
    price: "350ml - Rs. 1,500",
    minPrice: 1500,
    variants: [{ label: "350ml", price: "Rs. 1,500", messagePrice: "350ml - Rs. 1,500" }],
    image: P + "IMG-20260817-WA0042.jpg",
    gallery: [P + "IMG-20260817-WA0042.jpg", P + "IMG-20260817-WA0068.jpg"],
    description: "Blueberry Body Wash by FJ Production. Product image and price are based on the provided owner material.",
    features: ["Body wash product", "Provided size/price: 350ml - Rs. 1,500", "Beauty product from FJ Production", "Order on WhatsApp"],
    howToUse: ["Use as directed on the product label.", "Ask FJ Production on WhatsApp for ordering and product details."],
    available: true
  },
  {
    id: "mint-facial-kit",
    name: "Mint Facial Kit (10 Products)",
    category: "Facial Kits",
    type: "Face Care Kit",
    price: "Small (350g) - Rs. 10,000 | Large (500g) - Rs. 13,000",
    minPrice: 10000,
    variants: [
      { label: "Small (350g)", price: "Rs. 10,000", messagePrice: "Small (350g) - Rs. 10,000" },
      { label: "Large (500g)", price: "Rs. 13,000", messagePrice: "Large (500g) - Rs. 13,000" }
    ],
    image: P + "IMG-20260817-WA0044.jpg",
    gallery: [P + "IMG-20260817-WA0044.jpg", P + "IMG-20260817-WA0071.jpg"],
    description: "Mint Facial Kit with 10 products. Available in Small 350g and Large 500g options with the provided prices.",
    features: ["10-product facial kit", "Small option: 350g - Rs. 10,000", "Large option: 500g - Rs. 13,000", "Order through WhatsApp"],
    howToUse: ["Use each kit item as directed on its product label.", "Contact FJ Production for kit guidance before use."],
    available: true
  },
  {
    id: "lavender-facial-kit",
    name: "Lavender Facial Kit (10 Products)",
    category: "Facial Kits",
    type: "Face Care Kit",
    price: "Small (350g) - Rs. 10,000 | Large (500g) - Rs. 13,000",
    minPrice: 10000,
    variants: [
      { label: "Small (350g)", price: "Rs. 10,000", messagePrice: "Small (350g) - Rs. 10,000" },
      { label: "Large (500g)", price: "Rs. 13,000", messagePrice: "Large (500g) - Rs. 13,000" }
    ],
    image: P + "IMG-20260817-WA0047.jpg",
    gallery: [P + "IMG-20260817-WA0047.jpg", P + "IMG-20260817-WA0048.jpg", P + "IMG-20260817-WA0072.jpg", P + "IMG-20260817-WA0073.jpg"],
    description: "Lavender Facial Kit with 10 products. Small and Large sizes are listed with exact provided prices.",
    features: ["10-product facial kit", "Small option: 350g - Rs. 10,000", "Large option: 500g - Rs. 13,000", "WhatsApp ordering"],
    howToUse: ["Use each product as directed on its label.", "Message FJ Production if you need kit details before ordering."],
    available: true
  },
  {
    id: "strawberry-facial-kit",
    name: "Strawberry Facial Kit (10 Products)",
    category: "Facial Kits",
    type: "Face Care Kit",
    price: "Small (350g) - Rs. 10,000 | Large (500g) - Rs. 13,000",
    minPrice: 10000,
    variants: [
      { label: "Small (350g)", price: "Rs. 10,000", messagePrice: "Small (350g) - Rs. 10,000" },
      { label: "Large (500g)", price: "Rs. 13,000", messagePrice: "Large (500g) - Rs. 13,000" }
    ],
    image: P + "IMG-20260817-WA0049.jpg",
    gallery: [P + "IMG-20260816-WA0006.jpg", P + "IMG-20260817-WA0049.jpg"],
    description: "Strawberry Facial Kit with 10 products. Available in Small 350g and Large 500g options.",
    features: ["10-product facial kit", "Small option: 350g - Rs. 10,000", "Large option: 500g - Rs. 13,000", "Order via WhatsApp"],
    howToUse: ["Use each product according to the product label.", "Confirm usage instructions with FJ Production if needed."],
    available: true
  },
  {
    id: "strawberry-lip-balm",
    name: "Strawberry Lip Balm",
    category: "Lip Care",
    type: "Lip Balm",
    price: "Rs. 500 (25g)",
    minPrice: 500,
    variants: [{ label: "25g", price: "Rs. 500", messagePrice: "Rs. 500 (25g)" }],
    image: P + "IMG-20260817-WA0023.jpg",
    gallery: [P + "IMG-20260817-WA0023.jpg", P + "IMG-20260817-WA0074.jpg"],
    description: "Strawberry Lip Balm by FJ Production. Listed with the provided product photo and price.",
    features: ["Lip care product", "Provided size/price: 25g - Rs. 500", "Owner-provided product imagery", "WhatsApp order available"],
    howToUse: ["Use as directed on the product label.", "Message FJ Production for more information before ordering."],
    available: true
  },
  {
    id: "fj-hair-oil",
    name: "FJ Hair Oil",
    category: "Hair Care",
    type: "Hair Oil",
    price: "150ml - Rs. 1,000",
    minPrice: 1000,
    variants: [{ label: "150ml", price: "Rs. 1,000", messagePrice: "150ml - Rs. 1,000" }],
    image: P + "IMG-20260817-WA0075.jpg",
    gallery: [P + "IMG-20260817-WA0075.jpg"],
    description: "FJ Hair Oil from the FJ Production beauty range. Price and image follow the owner-provided listing.",
    features: ["Hair care product", "Provided size/price: 150ml - Rs. 1,000", "Order through WhatsApp", "No online payment gateway"],
    howToUse: ["Use as directed on the product label.", "Contact FJ Production on WhatsApp for guidance before ordering."],
    available: true
  },
  {
    id: "hair-protein-mask",
    name: "Hair Protein Mask",
    category: "Hair Care",
    type: "Hair Mask",
    price: "350g - Rs. 1,500",
    minPrice: 1500,
    variants: [{ label: "350g", price: "Rs. 1,500", messagePrice: "350g - Rs. 1,500" }],
    image: P + "IMG-20260817-WA0076.jpg",
    gallery: [P + "IMG-20260817-WA0076.jpg"],
    description: "Hair Protein Mask by FJ Production. Product listing uses the provided image and exact price.",
    features: ["Hair care product", "Provided size/price: 350g - Rs. 1,500", "Owner-provided image", "WhatsApp order button"],
    howToUse: ["Use as directed on the product label.", "Ask FJ Production for usage details before ordering if required."],
    available: true
  },
  {
    id: "glow-hydrating-cream",
    name: "Glow Hydrating Cream",
    category: "Creams",
    type: "Moisturizer",
    price: "50g - Rs. 750 | 100g - Rs. 1,000",
    minPrice: 750,
    variants: [
      { label: "50g", price: "Rs. 750", messagePrice: "50g - Rs. 750" },
      { label: "100g", price: "Rs. 1,000", messagePrice: "100g - Rs. 1,000" }
    ],
    image: P + "IMG-20260817-WA0036.jpg",
    gallery: [P + "IMG-20260817-WA0036.jpg", P + "IMG-20260817-WA0050.jpg"],
    description: "Glow Hydrating Cream by FJ Production. Available in 50g and 100g options with exact provided prices.",
    features: ["Cream product", "50g option: Rs. 750", "100g option: Rs. 1,000", "WhatsApp-only ordering"],
    howToUse: ["Use as directed on the product label.", "Confirm product details with FJ Production before ordering if needed."],
    available: true
  },
  {
    id: "advanced-brightening-cream",
    name: "Advanced Brightening Cream",
    category: "Creams",
    type: "Face Cream",
    price: "50g - Rs. 750 | 100g - Rs. 1,000",
    minPrice: 750,
    variants: [
      { label: "50g", price: "Rs. 750", messagePrice: "50g - Rs. 750" },
      { label: "100g", price: "Rs. 1,000", messagePrice: "100g - Rs. 1,000" }
    ],
    image: P + "IMG-20260817-WA0024.jpg",
    gallery: [P + "IMG-20260817-WA0024.jpg", P + "IMG-20260817-WA0051.jpg"],
    description: "Advanced Brightening Cream from FJ Production. Sizes and prices are copied from the provided product material.",
    features: ["Cream product", "50g option: Rs. 750", "100g option: Rs. 1,000", "Order through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "Message FJ Production for product guidance before ordering."],
    available: true
  },
  {
    id: "hand-foot-whitening-cream",
    name: "Hand & Foot Whitening Cream",
    category: "Creams",
    type: "Hand & Foot Cream",
    price: "100g - Rs. 1,000",
    minPrice: 1000,
    variants: [{ label: "100g", price: "Rs. 1,000", messagePrice: "100g - Rs. 1,000" }],
    image: P + "IMG-20260817-WA0020.jpg",
    gallery: [P + "IMG-20260817-WA0020.jpg", P + "IMG-20260817-WA0031.jpg", P + "IMG-20260817-WA0053.jpg"],
    description: "Hand & Foot Whitening Cream by FJ Production. Product image and price are based on the provided product photo.",
    features: ["Cream product", "Provided size/price: 100g - Rs. 1,000", "Owner-provided imagery", "WhatsApp order"],
    howToUse: ["Use as directed on the product label.", "Contact FJ Production for details before ordering."],
    available: true
  },
  {
    id: "24k-gold-gel",
    name: "24K Gold Gel",
    category: "Gels",
    type: "Face Gel",
    price: "100g - Rs. 750 | 350g - Rs. 1,500",
    minPrice: 750,
    variants: [
      { label: "100g", price: "Rs. 750", messagePrice: "100g - Rs. 750" },
      { label: "350g", price: "Rs. 1,500", messagePrice: "350g - Rs. 1,500" }
    ],
    image: P + "IMG-20260817-WA0039.jpg",
    gallery: [P + "IMG-20260817-WA0039.jpg", P + "IMG-20260817-WA0054.jpg", P + "IMG-20260817-WA0055.jpg"],
    description: "24K Gold Gel by FJ Production. Available in 100g and 350g options with exact provided prices.",
    features: ["Gel product", "100g option: Rs. 750", "350g option: Rs. 1,500", "Order on WhatsApp"],
    howToUse: ["Use as directed on the product label.", "For professional-use questions, contact FJ Production before ordering."],
    available: true
  },
  {
    id: "advance-skin-anti-aging-cream",
    name: "Advance Skin Anti Aging Cream",
    category: "Creams",
    type: "Anti Aging Cream",
    price: "100g - Rs. 1,000 | 250g - Rs. 1,500",
    minPrice: 1000,
    variants: [
      { label: "100g", price: "Rs. 1,000", messagePrice: "100g - Rs. 1,000" },
      { label: "250g", price: "Rs. 1,500", messagePrice: "250g - Rs. 1,500" }
    ],
    image: P + "IMG-20260817-WA0040.jpg",
    gallery: [P + "IMG-20260817-WA0019.jpg", P + "IMG-20260817-WA0040.jpg", P + "IMG-20260817-WA0056.jpg"],
    description: "Advance Skin Anti Aging Cream by FJ Production. The product is shown with owner-provided images and listed prices.",
    features: ["Cream product", "100g option: Rs. 1,000", "250g option: Rs. 1,500", "WhatsApp-only ordering"],
    howToUse: ["Use as directed on the product label.", "Contact FJ Production to confirm details before ordering."],
    available: true,
    featured: true
  },
  {
    id: "white-prestige-4d-serum",
    name: "White Prestige 4D Serum",
    category: "Serums",
    type: "Serum",
    price: "70ml - Rs. 1,850",
    minPrice: 1850,
    variants: [{ label: "70ml", price: "Rs. 1,850", messagePrice: "70ml - Rs. 1,850" }],
    image: P + "IMG-20260817-WA0029.jpg",
    gallery: [P + "IMG-20260817-WA0029.jpg", P + "IMG-20260817-WA0057.jpg"],
    description: "White Prestige 4D Serum by FJ Production. Product listing follows the owner-provided image and price.",
    features: ["Serum product", "Provided size/price: 70ml - Rs. 1,850", "Owner-provided product image", "Order through WhatsApp"],
    howToUse: ["Use as directed on the product label.", "Message FJ Production for details before ordering."],
    available: true
  }
];

const OWNER_GALLERY_IMAGES = [
  "IMG-20260816-WA0006.jpg", "IMG-20260817-WA0005.jpg", "IMG-20260817-WA0018.jpg", "IMG-20260817-WA0019.jpg", "IMG-20260817-WA0020.jpg", "IMG-20260817-WA0021.jpg", "IMG-20260817-WA0022.jpg", "IMG-20260817-WA0023.jpg", "IMG-20260817-WA0024.jpg", "IMG-20260817-WA0025.jpg", "IMG-20260817-WA0026.jpg", "IMG-20260817-WA0027.jpg", "IMG-20260817-WA0028.jpg", "IMG-20260817-WA0029.jpg", "IMG-20260817-WA0030.jpg", "IMG-20260817-WA0031.jpg", "IMG-20260817-WA0032.jpg", "IMG-20260817-WA0033.jpg", "IMG-20260817-WA0034.jpg", "IMG-20260817-WA0035.jpg", "IMG-20260817-WA0036.jpg", "IMG-20260817-WA0037.jpg", "IMG-20260817-WA0038.jpg", "IMG-20260817-WA0039.jpg", "IMG-20260817-WA0040.jpg", "IMG-20260817-WA0041.jpg", "IMG-20260817-WA0042.jpg", "IMG-20260817-WA0043.jpg", "IMG-20260817-WA0044.jpg", "IMG-20260817-WA0045.jpg", "IMG-20260817-WA0046.jpg", "IMG-20260817-WA0047.jpg", "IMG-20260817-WA0048.jpg", "IMG-20260817-WA0049.jpg", "IMG-20260817-WA0050.jpg", "IMG-20260817-WA0051.jpg", "IMG-20260817-WA0052.jpg", "IMG-20260817-WA0053.jpg", "IMG-20260817-WA0054.jpg", "IMG-20260817-WA0055.jpg", "IMG-20260817-WA0056.jpg", "IMG-20260817-WA0057.jpg", "IMG-20260817-WA0058.jpg", "IMG-20260817-WA0059.jpg", "IMG-20260817-WA0060.jpg", "IMG-20260817-WA0061.jpg", "IMG-20260817-WA0062.jpg", "IMG-20260817-WA0063.jpg", "IMG-20260817-WA0064.jpg", "IMG-20260817-WA0065.jpg", "IMG-20260817-WA0066.jpg", "IMG-20260817-WA0067.jpg", "IMG-20260817-WA0068.jpg", "IMG-20260817-WA0069.jpg", "IMG-20260817-WA0070.jpg", "IMG-20260817-WA0071.jpg", "IMG-20260817-WA0072.jpg", "IMG-20260817-WA0073.jpg", "IMG-20260817-WA0074.jpg", "IMG-20260817-WA0075.jpg", "IMG-20260817-WA0076.jpg", "IMG-20260817-WA0077.jpg", "IMG-20260817-WA0078.jpg"
].map(name => P + name);

function getProducts() {
  try {
    const saved = localStorage.getItem("fj_products_override");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (error) {
    console.warn("Could not load saved products", error);
  }
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem("fj_products_override", JSON.stringify(products));
}

function resetProducts() {
  localStorage.removeItem("fj_products_override");
}

function getCategories(products = getProducts()) {
  return [...new Set(products.filter(p => p.available !== false).map(p => p.category))].sort();
}

function getTypes(products = getProducts()) {
  return [...new Set(products.filter(p => p.available !== false).map(p => p.type))].sort();
}

function productById(id, products = getProducts()) {
  return products.find(p => p.id === id);
}

function safeText(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;","\"":"&quot;"}[char]));
}

function createWhatsappUrl({ productName, productPrice, quantity = 1, variant = "" } = {}) {
  const text = productName
    ? `Hello FJ Production, I would like to order:\n\nProduct: ${productName}${variant ? `\nOption: ${variant}` : ""}\nPrice: ${productPrice}\nQuantity: ${quantity}\n\nPlease confirm my order.`
    : BUSINESS.defaultWhatsappText;
  return `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(text)}`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
