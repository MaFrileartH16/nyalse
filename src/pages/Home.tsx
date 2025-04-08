import {AppLayout} from "../layouts/AppLayout.tsx";
import {Hero} from "../components/Hero.tsx";
import {PropertyList} from "../components/PropertyList.tsx";
import {useRef} from "react";

const mostPickedData = [
	{
		image: "",
		title: "Blue Origin Fams",
		location: "Jakarta, Indonesia",
		price: "$50 per night"
	},
	{
		image: "",
		title: "Londa",
		location: "Bandung, Indonesia",
		price: "$22 per night"
	},
	{
		image: "",
		title: "Stark House",
		location: "Karawang, Indonesia",
		price: "$856 per night"
	},
	{
		image: "",
		title: "Stark House",
		location: "Karawang, Indonesia",
		price: "$856 per night"
	},
	{
		image: "",
		title: "Stark House",
		location: "Karawang, Indonesia",
		price: "$856 per night"
	}
];

const propertyCategoriesData = [
	{
		title: "Houses with beauty backyard",
		properties: [
			{
				image: "",
				title: "Tabby Town",
				location: "Gunung Batu, Indonesia",
				popular: true
			},
			{
				image: "",
				title: "Anggana",
				location: "Bogor, Indonesia"
			},
			{
				image: "",
				title: "Tabby Town",
				location: "Gunung Batu, Indonesia",
				popular: true
			},
			{
				image: "",
				title: "Anggana",
				location: "Bogor, Indonesia"
			}
		]
	}
];
export const Home = () => {
	const mostPickedRef = useRef<HTMLDivElement>(null);
	
	return (
		<AppLayout>
			<Hero
				onClickShowNow={() => {
					const offset = 96;
					const element = mostPickedRef.current;
					
					if (element) {
						const top = element.getBoundingClientRect().top + window.scrollY - offset;
						window.scrollTo({top, behavior: "smooth"});
					}
				}}
			/>
			
			<PropertyList
				mostPickedRef={mostPickedRef}
				mostPickedData={mostPickedData}
				propertyCategoriesData={propertyCategoriesData}
			/>
		</AppLayout>
	);
};
