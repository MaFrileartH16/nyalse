import {Container, Flex} from "@mantine/core";
import {Logo} from "./Logo";
import {NavBar} from "./NavBar";

export const Header = () => {
	return (
		<Container size="xl" py={16}>
			<Flex component="nav" justify="space-between" align="center" gap={16}>
				<Logo/>
				<NavBar/>
			</Flex>
		</Container>
	);
};
