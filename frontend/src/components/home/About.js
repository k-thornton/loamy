import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <div className="relative isolate overflow-hidden pt-24 sm:pt-32">
      {/* <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem]"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="about">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</p> */}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral sm:text-4xl">About Loamy</h1>
          <p className="mt-6 text-xl leading-8 text-neutral">
          Loamy helps women (and men!) make fertility decisions by delivering real-world data (RWD) and evidence-based recommendations directly into patients’ hands. We believe women are smart and by delivering outcome expectations to them, it can meaningfully differentiate how they can make decisions in this space, for instance whether to freeze their eggs or undergo another round of IVF. We then offer recommendations for optimizing fertility and achieving each user’s stated reproductive goal based on science, literature, and evidence. 
          </p>
          <p className="mt-6 text-xl leading-8 text-neutral">
          Loamy was spun-out of the MIT Media Lab and is part of the inaugural cohort of C10 Labs, Dimensional AI Venture Studio and Fund. They are the winner of the NextMED Health 2023 National startup competition and are committed to enabling informed consent for all fertility patients.           </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-primary pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-neutral">
                <p>
                "This is enlightenment. Thank you for helping me understand the data and how that impacts my options."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
              <div className="text-sm leading-6">
                  <div className="font-semibold text-neutral">Priya</div>
                  <div className="text-neutral-600">age 32</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
