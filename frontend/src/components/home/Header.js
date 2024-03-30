import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../static/logo.png";
import { Link } from "react-router-dom";


const navigation = [
    { name: "Women Like Me", href: "#womenlikeme" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];
  
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
    <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <div className="-m-1.5 p-1.5">
                <span className="sr-only">Loamy</span>
                <img className="h-auto w-24" src={logo} alt="" />
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-neutral-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* The one at the top when it's large */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/womenlikeme"
                className="btn btn-primary text-sm font-semibold leading-6 drop-shadow-xl hover:bg-neutral"
              >
                Take the Quiz
              </Link>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-7 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">Loamy</span>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    {/* The one in the small dropdown dialog panel */}
                    <Link
                      to="/womenlikeme"
                      className="btn btn-primary btn-outline -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-content"
                    >
                      Take the Quiz <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
    );}