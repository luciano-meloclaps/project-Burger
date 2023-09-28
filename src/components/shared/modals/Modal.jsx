import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Car from "./Car"; // Asegúrate de importar el componente Car correctamente

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showOrder, setShowOrder] = React.useState(false);

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>{/* Contenido del modal */}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Muestra el componente Car con las funciones necesarias */}
      <Car
        showOrder={showOrder}
        setShowOrder={setShowOrder}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
