import {Button, Image, Stack, Text, Title} from "@mantine/core";

const Testimonial = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "60px 20px",
				gap: 60,
				flexWrap: "wrap",
				marginTop: 80
			}}
		>
			<div style={{position: "relative", width: 300, minWidth: 260}}>
				<div
					style={{
						position: "absolute",
						bottom: 40,
						right: 40,
						width: "100%",
						height: "100%",
						borderRadius: "16px 16px 160px 16px",
						border: "2px solid #ddd",
						zIndex: 0,
					}}
				></div>
				<Image
					src="https://images.unsplash.com/photo-1588979355313-6711a095465f?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Happy Family"
					style={{position: "relative", zIndex: 1, borderRadius: "16px 16px 160px 16px",}}
				/>
			</div>
			
			<Stack gap="sm" maw={500}>
				<Title order={5} style={{color: "#152C5B"}}>
					Happy Family
				</Title>
				<Title order={3} style={{color: "#152C5B", lineHeight: 1.5}}>
					What a great trip with my family and I should try again next time soon ...
				</Title>
				<Text size="sm" c="gray">
					Fauzul, Product Designer
				</Text>
				<Button size="md" color="#3252DF" mt="md" style={{alignSelf: "start"}}>
					Show Me Now
				</Button>
			</Stack>
		</div>
	);
};

export default Testimonial;