import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  HomeIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import AccountMenu from "./DropDownMeuItems";



function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
     <div className="flex items-center">
     <Image
        className="object-contain"
        src={"https://links.papareact.com/ua6"}
        height={100}
        width={200}
        alt={"logo"}
      />
      <AccountMenu/>
     </div>
    </header>
  );
}

export default Header;
