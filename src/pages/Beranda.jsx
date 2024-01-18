import React, { useEffect } from "react";
import "../App.css";
export default function Beranda() {
	return (
		<div className="relative isolate overflow-hidden h-screen bg-gray-900 py-24 sm:py-32">
			<img
				src="public\images\adiwiyata.jpg"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				style={{ opacity: "50%" }}
			/>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						Adiwiyata
					</h2>
					<p className="mt-6 text-lg leading-8 text-white">
						Adiwiyata is one of the key programs of the Ministry of Environment
						aimed at promoting knowledge and awareness about environmental
						conservation efforts among the student community in Indonesia.
					</p>
				</div>
			</div>
		</div>
	);
}
