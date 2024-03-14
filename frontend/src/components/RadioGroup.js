import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";

function MyRadioGroup({ options, selectedOption, setSelectedOption }) {
  return (
    <RadioGroup value={selectedOption} onChange={setSelectedOption}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
        Choose an option
      </RadioGroup.Label>
      <div className="mt-2">
        {options.map((option, index) => (
          <RadioGroup.Option
            key={index}
            value={option.text}
            as="div"
            className={({ checked }) =>
              `relative flex items-start p-4 mb-2 cursor-pointer rounded-lg border ${
                checked
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300"
              }`
            }
          >
            {({ active, checked }) => (
              <>
                <div className={`flex items-center justify-between w-full`}>
                  <span className="text-sm font-medium">{option.text}</span>
                  {checked && (
                    <CheckIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

export default MyRadioGroup;
