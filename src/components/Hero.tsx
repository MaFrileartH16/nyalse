import {Button, Grid, Group, Stack, Text, Title} from "@mantine/core";
import {IconCamera, IconMapPin, IconUsers} from "@tabler/icons-react";
import "@mantine/carousel/styles.css";
import {Carousel} from "./Carousel.tsx";
import {FC} from "react";

const stats = [
	{icon: IconUsers, value: "80,409", label: "travelers"},
	{icon: IconCamera, value: "862", label: "treasure"},
	{icon: IconMapPin, value: "1,492", label: "cities"}
];

interface HeroProps {
	onClickShowNow: () => void;
}

export const Hero: FC<HeroProps> = ({onClickShowNow}) => {
	return (
		<Grid gutter={64} align="center" py={80} mt={80}>
			{/* Carousel akan di atas ketika layar kecil */}
			<Grid.Col span={{base: 12, md: 6}} order={{base: 1, md: 2}}>
				<Carousel/>
			</Grid.Col>
			
			{/* Konten akan di bawah ketika layar kecil */}
			<Grid.Col span={{base: 12, md: 6}} order={{base: 2, md: 1}}>
				<Title order={1} c="#152C5B">
					Forget Busy Work, <br/> Start Next Vacation
				</Title>
				
				<Text size="lg" mt={16} c="#595959">
					We provide what you need to enjoy your holiday with family.
					Time to make another memorable moment.
				</Text>
				
				<Button mt={24} color="#3252DF" w="calc(100% / 3)" onClick={onClickShowNow}>
					Show Me Now
				</Button>
				
				<Group justify="apart" gap={32} grow mt={64}>
					{stats.map((stat, index) => (
						<Stack key={index} align="start" gap={8}>
							<stat.icon size={36} stroke={1.5} color="#152C5B"/>
							<Group gap={4}>
								<Title order={4} c="#152C5B">{stat.value}</Title>
								<Text size="sm" c="#595959">{stat.label}</Text>
							</Group>
						</Stack>
					))}
				</Group>
			</Grid.Col>
		</Grid>
	);
};
