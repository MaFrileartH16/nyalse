import {ReactNode, useEffect, useRef, useState} from "react";
import {ActionIcon, AppShell, Container, Transition} from "@mantine/core";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {IconArrowUp} from "@tabler/icons-react";

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
	const [visible, setVisible] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	
	const handleScroll = () => {
		const headerHeight = headerRef.current?.offsetHeight || 0;
		setVisible(window.scrollY > headerHeight);
	};
	
	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: "smooth"});
	};
	
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	return (
		<AppShell>
			<AppShell.Header ref={headerRef}>
				<Header/>
			</AppShell.Header>
			
			<AppShell.Main>
				<Container size="xl" mih="100vh" my={80}>
					{children}
				</Container>
				
				<Transition mounted={visible} transition="fade" duration={200} timingFunction="ease">
					{(styles) => (
						<ActionIcon
							variant="filled"
							color="#152C5B"
							style={{
								...styles,
								position: "fixed",
								bottom: 40,
								right: 40,
								zIndex: 999,
							}}
							onClick={scrollToTop}
							aria-label="Scroll to top"
						>
							<IconArrowUp size={24} color="white"/>
						</ActionIcon>
					)}
				</Transition>
				
				{/* Footer tidak fixed */}
				<Footer/>
			</AppShell.Main>
		</AppShell>
	);
};
