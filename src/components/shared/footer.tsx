import { keystaticReader } from '@/lib/keystatic';
import Image from "next/image";
import Link from "next/link";

export const Footer = async ({ showInterest = true }) => {
  const settings = await keystaticReader.singletons.settings.read();
  return (
    <div className="bg-dim-dark">
      <div className="flex justify-center py-6">
        <a href="https://www.buymeacoffee.com/marville001" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
            alt="Buy Me A Coffee"
            className="h-[60px] w-[217px]"
            height={60}
            width={217}
            priority
          />
        </a>
      </div>

      {showInterest && (
        <div className="max-w-screen-lg mx-auto min-h-[200px] py-6 text-white">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="px-4">
              <h4 className="text-lg">Positions Of Interest</h4>
              <div className="my-2 h-[1px] w-16 bg-white bg-opacity-40"></div>

              <div className="flex flex-wrap gap-2 mt-6 text-sm">
                <div className="px-5 py-2 bg-white cursor-pointer rounded-xl bg-opacity-5 hover:bg-opacity-20">
                  React Js Developer
                </div>
                <div className="px-5 py-2 bg-white cursor-pointer rounded-xl bg-opacity-5 hover:bg-opacity-20">
                  Node Js Developer
                </div>
                <div className="px-5 py-2 bg-white cursor-pointer rounded-xl bg-opacity-5 hover:bg-opacity-20">
                  Angular Developer
                </div>
                <div className="px-5 py-2 bg-white cursor-pointer rounded-xl bg-opacity-5 hover:bg-opacity-20">
                  Full Stack Developer
                </div>
                <div className="px-5 py-2 bg-white cursor-pointer rounded-xl bg-opacity-5 hover:bg-opacity-20">
                  Lead Web Developer
                </div>
              </div>
            </div>

            <div className="px-4">
              <h4 className="text-lg">Salary Range</h4>
              <div className="my-2 h-[1px] w-16 bg-white bg-opacity-40"></div>
              <div className="mt-6">
                <h2>Annual</h2>
                <p className="my-2 opacity-75">Accepting custom offers</p>
                {/* <p className="flex items-center gap-2 my-2">
                  <span className="text-sm text-white opacity-40">From</span>
                  <span>40,000 $USD</span>
                  <span className="text-sm text-white opacity-40">To</span>
                  <span>+150,000 $USD</span>
                </p> */}
                <h2>Per hour:</h2>
                <p className="my-2 opacity-75">Accepting custom offers</p>
                {/* <p className="flex items-center gap-2 my-2">
                  <span className="text-sm text-white opacity-40">From</span>
                  <span>20.00 $USD</span>
                  <span className="text-sm text-white opacity-40">To</span>
                  <span>+100.22 $USD</span>
                </p> */}
              </div>
            </div>

            <div className="p-4 bg-white self-start rounded-xl bg-opacity-10 lg:col-span-2">
              <p className="text-xs tracking-wide">
                NOTE: In case you have an idea for a project but you estimate
                that your budget may be very small, do not refrain from
                contacting me and presenting your project to me. I&apos;m
                working to provide flexible payment methods that allow us to
                carry out great projects, without cost being a barrier.
              </p>

              <Link
                target="_blank"
                href="https://cal.com/marville001/30min"
                className="w-full block py-2 mt-5 font-semibold text-center bg-white rounded-lg text-dark hover:bg-opacity-80"
              >
                Schedule a meeting
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="py-10 px-4 bg-dim-dark text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-start gap-4 md:flex-row md:justify-center">
          <div className="flex flex-col flex-1">
            <p>
              This website has been designed and developed by me from scratch :)
            </p>
            <p className="text-sm">
              Copyright{" "}
              <span className="font-bold text-primary">
                <a href="https://twitter.com/marville001" target="_blank">
                  @ Martin Mwangi
                </a>
              </span>{" "}
              {new Date().getFullYear()}
            </p>
          </div>
          <Link
            href={`mailto:${settings?.contact?.email}`}
            target="_blank"
            className="px-8 py-2 text-center block text-white rounded-full bg-primary hover:bg-opacity-80"
          >
            Contact Me Via Email
          </Link>
        </div>
      </div>
    </div>
  );
};
