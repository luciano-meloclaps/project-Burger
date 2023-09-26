import { Image } from "@nextui-org/react";

export default function Example() {
  return (
    <div className="bg-pink-user-0">
      <div className="relative isolate p-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32  ">
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                isBlurred
                className="bg-found-user-0 p-2 border-solid border-4 border-red-user-0 rounded-full object-cover"
                src="public\iconLogo.png"
                alt="Logo"
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-6xl pt-4 font-logo text-red-user-0 lg:text-9xl">
              Stack Burger
            </h1>
            <p className="mt-6 px-4 text-sm lg:4xl leading-8 italic text-gray-300">
              Cuando es algo especial comete una Stacker Burger, es un elixir y
              las otras son burger comunes. Una se come y las stacker se saborea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
