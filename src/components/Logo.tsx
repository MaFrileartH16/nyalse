import {Group, Text} from "@mantine/core";

export const Logo = () => {
	return (
		<Group gap={0}>
			<Text component="span" size="xl" fw={700} c="#3252DF">
				Nyalse
			</Text>
			<Text component="span" size="xl" fw={700} c="#152C5B">
				.
			</Text>
		</Group>
	);
};
