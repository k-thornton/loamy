export default function About() {
  return (
    <div className="relative isolate overflow-hidden pt-24 sm:pt-32">
      <div
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
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="about">
        <div className="mx-auto max-w-2xl">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral sm:text-4xl">About Loamy</h1>
          <p className="mt-6 text-xl leading-8 text-neutral">
          We're using data + love to optimize fertility decision-making. 
          </p>
          <p className="mt-6 text-xl leading-8 text-neutral">
          Loamy helps women (and men!) make fertility decisions by delivering real-world data and evidence-based recommendations directly into patients’ hands. By delivering outcome expectations, it can meaningfully differentiate how patients make decisions in this space.            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-10">
          <div className="relative ">
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
