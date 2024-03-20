import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

export function Navbar() {
  return (
    <div>
      <NavbarMobile />
      <NavbarDesktop />
    </div>
  );
}
