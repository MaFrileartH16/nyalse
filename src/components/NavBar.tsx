import {useDisclosure} from "@mantine/hooks";
import {Link, useLocation} from "react-router";
import {Burger, Button, Drawer, Flex, Group, Stack} from "@mantine/core";

// Extracted to prevent re-creation on every render
const NAV_LINKS = [
	{label: "Home", path: "/"},
	{label: "Browse by", path: "/browse"},
	{label: "Stories", path: "/stories"},
	{label: "Agents", path: "/agents"},
];

export const NavBar = () => {
	const [opened, {open, close}] = useDisclosure(false);
	const location = useLocation();
	
	const isActiveRoute = (path: string) => location.pathname === path;
	
	const renderNavLink = ({label, path}: (typeof NAV_LINKS)[number], onClick?: () => void) => (
		<Button
			key={path}
			variant="subtle"
			component={Link}
			to={path}
			onClick={onClick}
			styles={{
				root: {
					color: isActiveRoute(path) ? "#3252DF" : "#152C5B",
					fontWeight: isActiveRoute(path) ? 600 : 400,
				},
			}}
		>
			{label}
		</Button>
	);
	
	return (
		<>
			<Flex justify="space-between" align="center">
				<Burger opened={opened} onClick={open} hiddenFrom="sm" color="#152C5B"/>
				
				<Group visibleFrom="sm" gap="md">
					{NAV_LINKS.map((link) => renderNavLink(link))}
				</Group>
			</Flex>
			
			<Drawer opened={opened} onClose={close} title="Menu" size="xs">
				<Stack gap="md">
					{NAV_LINKS.map((link) => renderNavLink(link, close))}
				</Stack>
			</Drawer>
		</>
	);
};
