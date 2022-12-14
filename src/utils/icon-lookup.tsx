import {
  BellIcon,
  LockClosedIcon,
  ShareIcon,
  ShoppingBagIcon,
  DocumentIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

type IconLookup = {
  [key: string]: JSX.Element;
};

const iconLookup = (icon: string): JSX.Element => {
  const icons: IconLookup = {
    bell: <BellIcon />,
    lock: <LockClosedIcon />,
    shopping: <ShoppingBagIcon />,
    share: <ShareIcon />,
    document: <DocumentIcon />,
    info: <InformationCircleIcon />,
  };

  return icons[icon];
};

export default iconLookup;
