/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
	{
		id: 1,
		imageSrc:
			"https://i.pinimg.com/564x/d2/ab/ba/d2abbacebd30efb029a506054887ab14.jpg",
	},
	{
		id: 2,

		imageSrc:
			"https://i.pinimg.com/736x/da/5b/e6/da5be662c5807dd8b1e6c8ec6d3059ca.jpg",
	},
	{
		id: 3,

		imageSrc:
			"https://i.pinimg.com/564x/57/ad/27/57ad276c8c9c2560b3b69537896638ba.jpg",
	},
	{
		id: 4,

		imageSrc:
			"https://i.pinimg.com/564x/4d/4a/26/4d4a26719f78d73f04218cb5324f6e47.jpg",
	},
	{
		id: 5,

		imageSrc:
			"https://i.pinimg.com/564x/c5/8f/ec/c58fec8eef097b1c0ad96f0dd10b6950.jpg",
	},
	{
		id: 6,

		imageSrc:
			"https://i.pinimg.com/736x/62/95/de/6295de33163c24cb2af6341e65e7cb1c.jpg",
	},
	{
		id: 7,

		imageSrc:
			"https://i.pinimg.com/564x/46/ee/33/46ee3324e0e5aa5b5e853310b251185c.jpg",
	},
	{
		id: 8,

		imageSrc:
			"https://i.pinimg.com/564x/c2/f7/8c/c2f78c0b40109265315e7ab66ce0a969.jpg",
	},
	{
		id: 9,

		imageSrc:
			"https://i.pinimg.com/564x/b2/e7/0e/b2e70e97e83f3fa35c1128e114a4ac81.jpg",
	},
	{
		id: 10,

		imageSrc:
			"https://i.pinimg.com/564x/2f/69/1d/2f691dce2d36f58682b748a3c85b2544.jpg",
	},
	{
		id: 11,

		imageSrc:
			"https://i.pinimg.com/564x/5d/48/4c/5d484c76bd168efd7def23e86c06d946.jpg",
	},
	{
		id: 12,

		imageSrc:
			"https://i.pinimg.com/564x/21/50/83/21508382f3bccf47e9423c33bb34499a.jpg",
	},

	// More products...
];

export default function Galeri() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.id} href={product.href} className="group">
							<div className="relative overflow-hidden rounded-lg bg-gray-200">
								<div
									className="aspect-w-1 aspect-h-1 w-full"
									style={{ paddingBottom: "100%" }}
								>
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">
								{product.price}
							</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
