import { Group, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconGauge,
  IconArchiveFilled,
  IconReport
} from '@tabler/icons-react';
// import { UserButton } from '../UserButton/UserButton';
import { LinksGroup } from '../NavbarLinksGroup';
import { Logo } from './Logo';
import classes from './NavbarNested.module.css';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Operasi',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Pengiriman', link: '/' },
      { label: 'Penerimaan', link: '/' },
    ],
  },
  { label: 'Produk', icon: IconArchiveFilled },
  { label: 'Laporan', icon: IconReport }
];

export function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          {links}
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        {/* <UserButton /> */}
      </div>
    </nav>
  );
}