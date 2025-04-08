import {CSSProperties, FC, RefObject} from "react";
import {Badge, Grid, Image, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

interface PropertyItem {
	image: string;
	title: string;
	location: string;
	price?: string;
	popular?: boolean;
}

interface CategoryItem {
	title: string;
	properties: PropertyItem[];
}

interface PropertyListProps {
	mostPickedRef: RefObject<HTMLDivElement | null>;
	mostPickedData: PropertyItem[];
	propertyCategoriesData: CategoryItem[];
}

const badgeStyle: CSSProperties = {
	position: "absolute",
	top: 0,
	right: 0,
	borderTopRightRadius: 16,
	borderBottomLeftRadius: 16,
	borderTopLeftRadius: 0,
	borderBottomRightRadius: 0,
};

export const PropertyList: FC<PropertyListProps> = ({
	                                                    mostPickedRef,
	                                                    mostPickedData,
	                                                    propertyCategoriesData,
                                                    }) => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	
	const renderOverlay = (title: string, location: string) => (
		<div
			style={{
				position: "absolute",
				bottom: 0,
				left: 0,
				width: "100%",
				padding: "12px",
				background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
				color: "white",
				borderBottomLeftRadius: "16px",
				borderBottomRightRadius: "16px",
			}}
		>
			<Title order={5} style={{color: "#ffffff"}}>{title}</Title>
			<Text size="sm">{location}</Text>
		</div>
	);
	
	return (
		<>
			<div ref={mostPickedRef}>
				<Title order={2} mb="md" style={{color: "#152C5B"}}>
					Most Picked
				</Title>
				
				{isMobile ? (
					<Grid gutter="md">
						{mostPickedData[0] && (
							<Grid.Col span={12}>
								<div style={{position: "relative", overflow: "hidden", borderRadius: 16}}>
									<Image
										src={mostPickedData[0].image}
										height={240}
										style={{objectFit: "cover"}}
									/>
									{mostPickedData[0].price && (
										<Badge variant="filled" color="pink" size="xl" style={badgeStyle}>
											{mostPickedData[0].price}
										</Badge>
									)}
									{renderOverlay(mostPickedData[0].title, mostPickedData[0].location)}
								</div>
							</Grid.Col>
						)}
						
						{mostPickedData.slice(1, 5).map((item, index) => (
							<Grid.Col span={6} key={index}>
								<div style={{position: "relative", overflow: "hidden", borderRadius: 16}}>
									<Image
										src={item.image}
										height={160}
										style={{objectFit: "cover"}}
									/>
									{item.price && (
										<Badge variant="filled" color="pink" size="xl" style={badgeStyle}>
											{item.price}
										</Badge>
									)}
									{renderOverlay(item.title, item.location)}
								</div>
							</Grid.Col>
						))}
					</Grid>
				) : (
					<SimpleGrid cols={3} spacing="md" style={{alignItems: "stretch"}}>
						{mostPickedData.length > 0 && (
							<div
								style={{
									position: "relative",
									display: "flex",
									flexDirection: "column",
									height: "100%",
									overflow: "hidden",
									borderRadius: 16,
								}}
							>
								<Image
									src={mostPickedData[0].image}
									height="100%"
									style={{objectFit: "cover", flex: 1}}
								/>
								{mostPickedData[0].price && (
									<Badge variant="filled" color="pink" size="xl" style={badgeStyle}>
										{mostPickedData[0].price}
									</Badge>
								)}
								{renderOverlay(mostPickedData[0].title, mostPickedData[0].location)}
							</div>
						)}
						
						<Stack gap="md" style={{flex: 1}}>
							{mostPickedData.slice(1, 3).map((item, index) => (
								<div key={index} style={{position: "relative", flex: 1, overflow: "hidden", borderRadius: 16}}>
									<Image
										src={item.image}
										height={180}
										style={{objectFit: "cover"}}
									/>
									{item.price && (
										<Badge variant="filled" color="pink" size="xl" style={badgeStyle}>
											{item.price}
										</Badge>
									)}
									{renderOverlay(item.title, item.location)}
								</div>
							))}
						</Stack>
						
						<Stack gap="md" style={{flex: 1}}>
							{mostPickedData.slice(3, 5).map((item, index) => (
								<div key={index} style={{position: "relative", flex: 1, overflow: "hidden", borderRadius: 16}}>
									<Image
										src={item.image}
										height={180}
										style={{objectFit: "cover"}}
									/>
									{item.price && (
										<Badge variant="filled" color="pink" size="xl" style={badgeStyle}>
											{item.price}
										</Badge>
									)}
									{renderOverlay(item.title, item.location)}
								</div>
							))}
						</Stack>
					</SimpleGrid>
				)}
			</div>
			
			{propertyCategoriesData.map((category, catIndex) => (
				<div key={catIndex} style={{marginTop: 40}}>
					<Title order={2} mb="md" style={{color: "#152C5B"}}>
						{category.title}
					</Title>
					<SimpleGrid cols={isMobile ? 2 : 4} spacing="md">
						{category.properties.map((property, index) => (
							<div key={index} style={{position: "relative"}}>
								<Image
									src={property.image}
									height={160}
									style={{objectFit: "cover"}}
								/>
								{property.popular && (
									<Badge variant="filled" color="pink" size="xl" style={badgeStyle}>
										Popular Choice
									</Badge>
								)}
								<Stack gap={4} mt="md">
									<Title order={5} style={{color: "#152C5B"}}>{property.title}</Title>
									<Text size="sm" style={{color: "#595959"}}>
										{property.location}
									</Text>
								</Stack>
							</div>
						))}
					</SimpleGrid>
				</div>
			))}
		</>
	);
};
