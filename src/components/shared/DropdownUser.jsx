import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DropdownUser({}) {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Seleccione un filtro 😎"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown className="font-body bg-pink-user-0 text-red-user-0">
      <DropdownTrigger className="bg-black text-red-user-0">
        <Button variant="light" className="font-body capitalize mb-8">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant={"shadow"}
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="Mas Populares 🔥">Mas Populares 🔥</DropdownItem>
        <DropdownItem key="Ultimas añadidas 📈">
          Ultimas añadidas 📈
        </DropdownItem>
        <DropdownItem key="Orden alfabetico 🅰️">
          Orden alfabetico 🅰️
        </DropdownItem>
        <DropdownItem key="Menor precio 💵">Menor precio 💵</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
