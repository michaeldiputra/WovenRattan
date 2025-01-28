import Image from "next/image"

export const products = [
    {
        id: 1,
        name: "Rattan Tote Bag",
        color: "Natural Brown",
        image: "1.jpg",
        alt: "A stylish rattan tote bag",
        price: 45.99,
    },
    {
        id: 2,
        name: "Round Rattan Bag",
        color: "Honey Brown",
        image: "2.jpg",
        alt: "A round-shaped rattan bag",
        price: 39.99,
    },
    {
        id: 3,
        name: "Rattan Shoulder Bag",
        color: "Dark Brown",
        image: "3.jpg",
        alt: "A rattan shoulder bag with leather strap",
        price: 55.99,
    },
    {
        id: 4,
        name: "Mini Rattan Backpack",
        color: "Natural Beige",
        image: "4.jpg",
        alt: "A mini rattan backpack",
        price: 49.99,
    },
    {
        id: 5,
        name: "Rattan Crossbody Bag",
        color: "Golden Brown",
        image: "5.jpg",
        alt: "A rattan crossbody bag",
        price: 44.99,
    },
    {
        id: 6,
        name: "Rattan Picnic Bag",
        color: "Light Brown",
        image: "6.jpg",
        alt: "A rattan picnic bag",
        price: 65.99,
    },
    {
        id: 7,
        name: "Rattan Clutch",
        color: "Natural Tan",
        image: "7.jpg",
        alt: "A rattan clutch bag",
        price: 35.99,
    },
    {
        id: 8,
        name: "Rattan Bucket Bag",
        color: "Chestnut Brown",
        image: "8.jpg",
        alt: "A bucket-style rattan bag",
        price: 59.99,
    },
    {
        id: 9,
        name: "Rattan Beach Bag",
        color: "Light Beige",
        image: "9.jpg",
        alt: "A large rattan beach bag",
        price: 69.99,
    },
    {
        id: 10,
        name: "Rattan Laptop Bag",
        color: "Cocoa Brown",
        image: "10.jpg",
        alt: "A modern rattan laptop bag",
        price: 75.99,
    },
];


export default function ProductsPage() {
    return (
        <div class="bg-background">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Our Products</h2>
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {products.map((product) => (
                        <div class="group relative">
                            <Image src={`/landing/product/${product.image}`} alt={`${product.alt}`} width={500} height={500} class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                ))}

                </div>
            </div>
        </div>

    )
}