import "@mantine/core/styles.css";
import {AppShell, Burger, createTheme, Group, MantineProvider, Card, Image, Text, Badge, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { NavbarNested } from "./components/navbarNested/NavbarNested";

const theme = createTheme({
  fontFamily: "Ubuntu, Arial, sans-serif"
})

function App() {
  return(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <Layouts/>
  </MantineProvider>
  )
}

function Layouts() {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } } }
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested/>
      </AppShell.Navbar>
      <AppShell.Main>
        <Page/>
      </AppShell.Main>
    </AppShell>
  )
}

function Page() {
  return (
    <Group grow>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Penerimaan</Text>
        <Badge color="pink">88</Badge>
      </Group>

      <Button color="blue" fullWidth mt="sm" radius="md">
        Open
      </Button>
    </Card>

    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="sm" mb="xs">
        <Text fw={500}>Pengiriman</Text>
        <Badge color="pink">100</Badge>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Open
      </Button>
    </Card>

    </Group>
  )
}

export default App
