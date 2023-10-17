import React, { useState } from 'react';

export default function CollapseBar({ title, content }) {
  const [activeDropdown, setActiveDropdown] = useState(false);

  let maxHeight = '';
  if (window.innerWidth < 767) {
    maxHeight = '12px';
  } else if (window.innerWidth > 767) {
    maxHeight = '52px';
  }

  function toggleActive(event) {
    if (activeDropdown) {
      event.currentTarget.parentElement.style.maxHeight = maxHeight;
      event.currentTarget.nextSibling.classList.toggle(
        'collapse__dropdownInfoContainer--hidden'
      );
      event.currentTarget.children[1].classList.toggle(
        'collapse__dropdownBarArrow--rotated'
      );
      setActiveDropdown(false);
    } else if (!activeDropdown) {
      event.currentTarget.parentElement.style.maxHeight = '500px';
      event.currentTarget.nextSibling.classList.toggle(
        'collapse__dropdownInfoContainer--hidden'
      );
      event.currentTarget.children[1].classList.toggle(
        'collapse__dropdownBarArrow--rotated'
      );
      setActiveDropdown(true);
    }
  }

  return (
    <article className='collapse__dropdown'>
      <div className='collapse__dropdownBar' onClick={toggleActive}>
        <h2 className='collapse__dropdownBarTitle'>{title}</h2>
        <svg
          className='collapse__dropdownBarArrow collapse__dropdownBarArrow--rotated'
          xmlns='http://www.w3.org/2000/svg'
          width='33'
          height='32'
          viewBox='0 0 33 32'
          fill='none'
        >
          <path
            d='M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z'
            fill='white'
          />
        </svg>
      </div>
      <div className='collapse__dropdownInfoContainer collapse__dropdownInfoContainer--hidden'>
        <div className='collapse__dropdownInfoText'>{content}</div>
      </div>
    </article>
  );
}
