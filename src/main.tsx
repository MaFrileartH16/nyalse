import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import "@mantine/carousel/styles.css";
import {MantineProvider} from '@mantine/core';
import {theme} from "./theme.ts";
import {RouterProvider} from "react-router";
import {router} from "./routes.ts";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={theme}>
			<RouterProvider router={router}/>
		</MantineProvider>
	</StrictMode>,
)
