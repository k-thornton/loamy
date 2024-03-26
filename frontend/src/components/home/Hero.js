import { Link } from "react-router-dom";


export default function Hero() {
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1D8A99] to-[#DECDF5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl pt-28 pb-5">
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            <span className="inline-block">Empowering Your</span>
            <span className="inline-block">Fertility Journey</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Loamy’s Women Like Me quiz helps you navigate the complex, often
            emotional fertility treatment process. Sharing real, raw data
            and real-world experiences from women who’ve been there, we
            demystify the process and give you actionable steps to take.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* the one in the body */}
            <Link
              to="/womenlikeme"
              className=" rounded-md btn btn-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <button>Take the Quiz</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1D8A99] to-[#DECDF5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
    );}