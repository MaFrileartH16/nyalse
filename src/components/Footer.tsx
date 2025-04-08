import {Container} from "@mantine/core";

export const Footer = () => {
	return (
		<Container size="xl" ta="center" c="dimmed" fz="sm" py="md">
			© {new Date().getFullYear()} MyApp. All rights reserved.
		</Container>
	);
};
