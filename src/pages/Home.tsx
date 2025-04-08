import {AppLayout} from "../layouts/AppLayout.tsx";
import {Hero} from "../components/Hero.tsx";
import {PropertyList} from "../components/PropertyList.tsx";
import {useRef} from "react";

const mostPickedData = [
	{
		image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: "Blue Origin Fams",
		location: "Jakarta, Indonesia",
		price: "$50 per night"
	},
	{
		image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: "Londa",
		location: "Bandung, Indonesia",
		price: "$22 per night"
	},
	{
		image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: "Stark House",
		location: "Karawang, Indonesia",
		price: "$856 per night"
	},
	{
		image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: "Stark House",
		location: "Karawang, Indonesia",
		price: "$856 per night"
	},
	{
		image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Tabby Town",
				location: "Gunung Batu, Indonesia",
				popular: true
			},
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Anggana",
				location: "Bogor, Indonesia"
			},
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Tabby Town",
				location: "Gunung Batu, Indonesia",
				popular: true
			},
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Anggana",
				location: "Bogor, Indonesia"
			}
		]
	},
	{
		title: "Houses with beauty backyard",
		properties: [
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Tabby Town",
				location: "Gunung Batu, Indonesia",
				popular: true
			},
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Anggana",
				location: "Bogor, Indonesia"
			},
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				title: "Tabby Town",
				location: "Gunung Batu, Indonesia",
				popular: true
			},
			{
				image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
