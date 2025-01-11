"use client";

import * as React from "react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  INSTALLATION_CLIMBER,
  INSTALLATION_PIK,
  SHOP_PATH,
  VENTILATION_SISTEM,
  sales_list,
} from "@/constans";
import { ListItem } from "./ListItem";
import { SalesType } from "@/types";
import { Icons } from "../icons";
import RenovationLink from "./renovation/renovation-link";

interface NavMenuProps {
  className?: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  return (
    <NavigationMenu className={`${className}`}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Главная
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Покупателю</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={SHOP_PATH}
                  >
                    <BiLinkExternal className="w-6 h-6 text-slate-900" />
                    <div className="mb-2 mt-4 text-lg font-medium">Магазин</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Если нужна помощь с подбором техники, оставьте заявку или
                      позвоните нам.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href={VENTILATION_SISTEM} title="Вентиляции">
                Проектирование и монтaж вентиляции.
              </ListItem>
              <ListItem href={INSTALLATION_PIK} title="Дома ПИК">
                Особенности установки кондиционеров и сплит-систем.
              </ListItem>
              <ListItem
                href={INSTALLATION_CLIMBER}
                title="Промышленный альпинизм"
              >
                Производим даже самый сложный мондаж.
              </ListItem>
              {/* <li className="col-span-2 w-full">
                <NavigationMenuLink asChild>
                  <RenovationLink />
                </NavigationMenuLink>
              </li> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Акции</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
              {sales_list.map((component: SalesType) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={CONTACTS_PATH} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Контакты
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={ABOUT_PATH} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              О нас
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
