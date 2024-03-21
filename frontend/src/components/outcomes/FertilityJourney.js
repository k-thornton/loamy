import React from "react";

const FertilityJourney = ({ stepsCompleted = 0 }) => {
  // Define steps in the fertility journey
  const events = [
    "Starting to research fertility treatments and clinics",
    "Obtained my fertility lab testing (transvaginal ultrasound and blood test)",
    "Completed my first consultation at a fertility clinic",
    "Deciding to start my first fertility cycle",
    "Purchasing fertility medications and/or hormone injections",
    "Undergoing daily hormone injections and hormone monitoring at my clinic",
    "Completed one cycle of IVF or egg/embryo freezing",
    "Completed 2+ Fertility Cycles",
  ];

  return (
    <ul className="timeline">
      {events.map((event, index) => (
        <li key={index}>
          {index < stepsCompleted ? (
            <>
              {index !== 0 && <hr className="bg-primary" />}
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-start timeline-box">{event}</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className={"timeline-end timeline-box"}>{event}</div>
                </>
              )}
              {index !== stepsCompleted - 1 ? (
                <hr className="bg-primary" />
              ) : (
                <hr className="bg-secondary" />
              )}
            </>
          ) : (
            <>
              {index !== 0 && <hr className="bg-secondary" />}{" "}
              {/* Only show the line above if it's not the first item */}
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-start timeline-box">{event}</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className={"timeline-end timeline-box"}>{event}</div>
                </>
              )}
              {index <= events.length && <hr className="bg-secondary" />}{" "}
              {/* Only show the line below if it's not the last item */}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FertilityJourney;
