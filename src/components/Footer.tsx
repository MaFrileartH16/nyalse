import {Box, Container, Grid, Stack, Text, Title} from "@mantine/core";
import {Logo} from "./Logo.tsx";

export const Footer = () => {
	return (
		<Box bg="white" py="xl" mt="xl" style={{borderTop: "1px solid #eee"}}>
			<Container size="xl">
				<Grid gutter="xl">
					{/* Kolom 1 - Logo dan Deskripsi */}
					<Grid.Col span={{base: 12, md: 3}}>
						<Logo/>
						<Text c="gray.6">
							We kaboom your beauty holiday <br/>
							instantly and memorable.
						</Text>
					</Grid.Col>
					
					{/* Kolom 2 - For Beginners */}
					<Grid.Col span={{base: 12, sm: 4, md: 3}}>
						<Title order={6} fw={700} mb={8} c="dark.9">
							For Beginners
						</Title>
						<Stack gap={4}>
							<Text c="gray.6">New Account</Text>
							<Text c="gray.6">Start Booking a Room</Text>
							<Text c="gray.6">Use Payments</Text>
						</Stack>
					</Grid.Col>
					
					{/* Kolom 3 - Explore Us */}
					<Grid.Col span={{base: 12, sm: 4, md: 3}}>
						<Title order={6} fw={700} mb={8} c="dark.9">
							Explore Us
						</Title>
						<Stack gap={4}>
							<Text c="gray.6">Our Careers</Text>
							<Text c="gray.6">Privacy</Text>
							<Text c="gray.6">Terms & Conditions</Text>
						</Stack>
					</Grid.Col>
					
					{/* Kolom 4 - Connect Us */}
					<Grid.Col span={{base: 12, sm: 4, md: 3}}>
						<Title order={6} fw={700} mb={8} c="dark.9">
							Connect Us
						</Title>
						<Stack gap={4}>
							<Text c="gray.6">support@staycation.id</Text>
							<Text c="gray.6">021 - 2208 - 1996</Text>
							<Text c="gray.6">Staycation, Kemang, Jakarta</Text>
						</Stack>
					</Grid.Col>
				</Grid>
				
				{/* Copyright */}
				<Text ta="center" fz="sm" c="gray.5" mt="xl">
					Copyright {new Date().getFullYear()} • All rights reserved • Nyalse
				</Text>
			</Container>
		</Box>
	);
};
