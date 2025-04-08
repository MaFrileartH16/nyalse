import {ReactNode} from "react";
import {AppShell, Container} from "@mantine/core";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
	return (
		<AppShell>
			<AppShell.Header>
				<Header/>
			</AppShell.Header>
			
			<AppShell.Main>
				<Container size="xl" mih="100vh">
					{children}
				</Container>
			</AppShell.Main>
			
			<AppShell.Footer p="md">
				<Footer/>
			</AppShell.Footer>
		</AppShell>
	);
};
