import shauny from "../static/shauny1.png";
import rebecca from "../static/rebecca.jpeg";

const people = [
  {
    name: "Shauny Ullman",
    role: "Co-Founder",
    imageUrl: shauny,
    bio: "Shauny is an MBA/MPP with MIT Sloan and Harvard Kennedy School. She has worked in impact investing for several years, overseeing over $3B in social and environmental investments. Shauny is deeply passionate about women thriving and destigmatizing critical conversations. She believes each of us should be empowered to take control of our health and data.",
    xUrl: "",
    linkedinUrl: "",
  },
  {
    name: "Rebecca Curry",
    role: "Co-Founder",
    imageUrl: rebecca,
    bio: "Rebecca Curry is an AI and web3 builder and 2x child cancer survivor. She formally sat on the leadership council of MIT’s graduate course, AI and Web3 for Impact. Rebecca has been biohacking her own fertility, vitality, and longevity since age 10 and is committed to using emerging technologies to empower patient decision-making.",
    xUrl: "",
    linkedinUrl: "",
  },
];

export default function OurTeam() {
  return (
    <div className="py-24 md:py-32 lg:py-40 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 ">
        <div className="mx-auto max-w-2xl ">
          <h2 className="text-3xl font-bold tracking-tight text-neutral sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            The company was founded after Shauny had a frustrating experience as
            a fertility patient, which led her to pivot her last health tech
            company. Loamy is also inspired by Becky's own frustration
            navigating the healthcare and integrative care systems as a 2x child
            cancer survivor. We have experienced and understand the pain points,
            are passionate about advanced technology, and are activated patients
            ourselves.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We are also deeply committed to women's empowerment, recognizing
            fertility as integral to women's vitality and longevity.
          </p>
        </div>
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover object-top"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-neutral-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-neutral-600">
                {person.role}
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                {person.bio}
              </p>
              <ul className="mt-6 flex gap-x-6">
                {person.xUrl && (
                  <li>
                    <a
                      href={person.xUrl}
                      className="text-neutral-400 hover:text-neutral-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                )}
                {person.linkedinUrl && (
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-neutral-400 hover:text-neutral-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
