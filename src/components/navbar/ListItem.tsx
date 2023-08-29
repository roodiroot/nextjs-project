import Link from "next/link";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

interface ListItemProps {
  href: string;
  className?: string;
  title: string;
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  title,
  children,
  ...props
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
