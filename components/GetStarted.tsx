import { Card, Chip } from "@nextui-org/react";

export default function GetStarted() {
  return (
    <Card className="py-20">
      <div className="container mx-auto w-6/12 text-center space-y-4">
        <Chip className="rounded-xl">Get Started</Chip>
        <h2 className="text-4xl font-bold">Automatic AI Bot Download</h2>
        <div className="">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="City"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />

            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 mx-auto p-3 rounded-lg"
              value="Download"
            />
          </form>
        </div>
      </div>
    </Card>
  );
}
