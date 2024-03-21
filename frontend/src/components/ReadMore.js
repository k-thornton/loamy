import React, { useState, Children, cloneElement, useRef } from 'react';

export const ReadMore = ({ children, maxItems = 3 }) => {
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
    <div className="read-more-container w-screen p-4 md:p-8" ref={containerRef}>
      {displayedChildren.map((child, index) => (
        cloneElement(child, { key: index })
      ))}
      {!isExpanded && itCanOverflow && (
        <div className="fade-out-effect"></div>
      )}
      {itCanOverflow && (
        <button
          className="text-accent focus:outline-none focus:ring focus:ring-accent"
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
      <hr className='border'/>
    </div>
  );
};

export default ReadMore;
