import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, Chip } from "@nextui-org/react";

export default function Support() {
  return (
    <Card className="py-20 rounded-none">
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
        <div className="space-y-8 justify-between pr-8">
          <Chip className="rounded-xl">Ticket</Chip>
          <h2 className="text-4xl font-bold">Ticket Panel</h2>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ticket ID</h3>
            <p>
              Convert all information into tickets. We prioritize, categorize
              and assign them to the right Department.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl">For Support</h2>

            <div className="flex gap-2 items-center">
              <Icon icon="ic:baseline-email" className="text-primary text-lg" />
              <p>mining@robofxtrader.com</p>
            </div>
          </div>
        </div>

        <div className="">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
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
              placeholder="Email *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <select className="border-b border-black py-2 placeholder-black px-1 focus:outline-none">
              <option value="">Department*</option>
              <option value="">Department*</option>
              <option value="">Department*</option>
            </select>
            <select className="border-b border-black py-2 placeholder-black px-1 focus:outline-none">
              <option value="">Priority*</option>
              <option value="">Priority*</option>
              <option value="">Priority*</option>
            </select>

            <textarea
              name=""
              id=""
              placeholder="Message"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            ></textarea>

            <input type="file" name="" id="" />

            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 p-3 rounded-lg"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </Card>
  );
}
