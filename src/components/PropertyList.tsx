import {FC, RefObject} from "react";
import {Badge, Image, SimpleGrid, Stack, Text, Title} from "@mantine/core";

// 🏠 Interface untuk item properti
interface PropertyItem {
	image: string;
	title: string;
	location: string;
	price?: string; // Hanya ada di mostPicked
	popular?: boolean; // Hanya ada di kategori tertentu
}

// 📌 Interface untuk kategori properti
interface CategoryItem {
	title: string;
	properties: PropertyItem[];
}

// 📝 Props untuk PropertyList
interface PropertyListProps {
	mostPickedRef: RefObject<HTMLDivElement | null>;
	mostPickedData: PropertyItem[];
	propertyCategoriesData: CategoryItem[];
}

// 🏡 Komponen PropertyList
export const PropertyList: FC<PropertyListProps> = ({mostPickedRef, mostPickedData, propertyCategoriesData}) => {
	return (
		<>
			{/* Section: Most Picked */}
			<div ref={mostPickedRef}>
				<Title order={2} mb="md">Most Picked</Title>
				<SimpleGrid cols={3} spacing="md" style={{alignItems: "stretch"}}>
					{/* Item pertama lebih besar dan full height */}
					{mostPickedData.length > 0 && (
						<div style={{position: "relative", display: "flex", flexDirection: "column", height: "100%"}}>
							<Image src={mostPickedData[0].image} height="100%" radius="md" style={{objectFit: "cover", flex: 1}}/>
							{mostPickedData[0].price && (
								<Badge variant="filled" color="pink" style={{position: "absolute", top: 10, left: 10}}>
									{mostPickedData[0].price}
								</Badge>
							)}
							<Stack mt="md">
								<Title order={4}>{mostPickedData[0].title}</Title>
								<Text size="sm" color="dimmed">{mostPickedData[0].location}</Text>
							</Stack>
						</div>
					)}
					
					{/* Kolom ke-2 untuk 2 item secara vertikal */}
					<Stack gap="md" style={{flex: 1}}>
						{mostPickedData.slice(1, 3).map((item, index) => (
							<div key={index} style={{position: "relative", flex: 1}}>
								<Image src={item.image} height={180} radius="md" style={{objectFit: "cover"}}/>
								{item.price && (
									<Badge variant="filled" color="pink" style={{position: "absolute", top: 10, left: 10}}>
										{item.price}
									</Badge>
								)}
								<Stack mt="md">
									<Title order={5}>{item.title}</Title>
									<Text size="sm" color="dimmed">{item.location}</Text>
								</Stack>
							</div>
						))}
					</Stack>
					
					{/* Kolom ke-3 untuk 2 item secara vertikal */}
					<Stack gap="md" style={{flex: 1}}>
						{mostPickedData.slice(3, 5).map((item, index) => (
							<div key={index} style={{position: "relative", flex: 1}}>
								<Image src={item.image} height={180} radius="md" style={{objectFit: "cover"}}/>
								{item.price && (
									<Badge variant="filled" color="pink" style={{position: "absolute", top: 10, left: 10}}>
										{item.price}
									</Badge>
								)}
								<Stack mt="md">
									<Title order={5}>{item.title}</Title>
									<Text size="sm" color="dimmed">{item.location}</Text>
								</Stack>
							</div>
						))}
					</Stack>
				</SimpleGrid>
			</div>
			
			{/* Section: Property Categories */}
			{propertyCategoriesData.map((category, catIndex) => (
				<div key={catIndex} style={{marginTop: "40px"}}>
					<Title order={2} mb="md">{category.title}</Title>
					<SimpleGrid cols={4} spacing="md">
						{category.properties.map((property, index) => (
							<div key={index} style={{position: "relative"}}>
								<Image src={property.image} height={160} radius="md" style={{objectFit: "cover"}}/>
								{property.popular && (
									<Badge variant="filled" color="pink" style={{position: "absolute", top: 10, left: 10}}>
										Popular Choice
									</Badge>
								)}
								<Stack mt="md">
									<Title order={5}>{property.title}</Title>
									<Text size="sm" color="dimmed">{property.location}</Text>
								</Stack>
							</div>
						))}
					</SimpleGrid>
				</div>
			))}
		</>
	);
};
