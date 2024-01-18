const bigdays = [
	{
		name: "World Wildlife Day",
		date: "March 3",
		desc: "A day to celebrate and raise awareness about the world's wild animals and plants.",
	},
	{
		name: "Earth Hour",
		date: "Last Saturday in March",
		desc: "An annual event encouraging people around the world to turn off non-essential lights for one hour as a symbol of commitment to the planet.",
	},
	{
		name: "Earth Day",
		date: "April 22",
		desc: "A global event celebrated to demonstrate support for environmental protection and raise awareness about environmental issues.",
	},
	{
		name: "International Day for Biological Diversity",
		date: "May 22",
		desc: "A day to promote understanding and awareness of biodiversity issues.",
	},
	{
		name: "World Oceans Day",
		date: "June 8",
		desc: "A day to celebrate the ocean, promote ocean conservation, and encourage sustainable use of marine resources.",
	},
	{
		name: "World Environment Day",
		date: "June 5",
		desc: "A day for encouraging awareness and action for the protection of the environment.",
	},
	{
		name: "International Day of Forests",
		date: "March 21",
		desc: "A day to raise awareness of the importance of all types of forests and trees.",
	},
	{
		name: "National Arbor Day",
		date: "Varies by country",
		desc: "A day dedicated to tree planting and conservation efforts.",
	},
	{
		name: "International Coastal Cleanup Day",
		date: "Third Saturday in September",
		desc: "A day for volunteers to clean up beaches and coastal areas around the world.",
	},
	{
		name: "World Rivers Day",
		date: "Last Sunday in September",
		desc: "A day to highlight the importance of rivers and promote their sustainable management.",
	},
	{
		name: "World Wetlands Day",
		date: "February 2",
		desc: "A day to raise awareness about the value of wetlands for humanity and the planet.",
	},
	// Add more days as needed
];

export default function HariBesar() {
	return (
		<ul role="list" className="divide-y divide-gray-100 mx-40">
			{bigdays.map((days) => (
				<li key={days.name} className="flex justify-between gap-x-6 py-5">
					<div className="flex min-w-0 gap-x-4">
						<div className="min-w-0 flex-auto">
							<p className="text-sm font-semibold leading-6 text-gray-900">
								{days.name}
							</p>
						</div>
					</div>
					<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
						<p className="text-sm leading-6 text-gray-900">{days.date}</p>
						<div className="mt-1 flex items-center gap-x-1.5">
							<p className="text-xs leading-5 text-gray-500">{days.desc}</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
