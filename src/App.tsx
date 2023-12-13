import '@mantine/core/styles.css';
import AuthenticationImage from './AuthenticationImage.tsx'

import { MantineProvider } from '@mantine/core';

function App() {
  return <MantineProvider>
    <AuthenticationImage />
    </MantineProvider>;
}

export default App
