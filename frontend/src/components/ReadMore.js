import React, { useState, Children, cloneElement, useRef } from 'react';

export const ReadMore = ({ children, maxItems = 1 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children);
  const itCanOverflow = childrenArray.length > maxItems;
  const displayedChildren = isExpanded ? childrenArray : childrenArray.slice(0, maxItems);
  const containerRef = useRef();

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Optional: Scroll into view upon expansion
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="read-more-container w-full" ref={containerRef}>
      {displayedChildren.map((child, index) => (
        cloneElement(child, { key: index })
      ))}
      {(itCanOverflow && !isExpanded) && (
        <button
          className="btn btn-gray-100 btn-right focus:outline-none mt-5 focus:ring focus:ring-accent"
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
        >
          Show More
        </button>)
      }
    </div>
  );
};

export default ReadMore;
