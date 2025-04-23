import React, { useEffect, useState } from 'react';
import './index.css';

const Logo = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const animationDuration = 2000; 

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true); 
    }, animationDuration);

    const removeTimer = setTimeout(() => {
      setIsVisible(false); 
    }, animationDuration + 1000); 

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null; 

  return (
    <div
      className={`logo-screen bg-[#0b2339] w-full h-screen fixed z-50 flex items-center justify-center ${
        fadeOut ? 'fade-out' : ''
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6177 1945"
        className="logo-animation w-full max-w-[90%] sm:max-w-[700px] mx-auto"
        // style={{
        //   width: '100%',
        //   maxWidth: '700px',
        //   margin: '0 auto',
        // }}
      >
        <defs>
          <style>{`.fil0 { fill: #ffffff; fill-rule: nonzero; }`}</style>
        </defs>
        <g>
          <path
            className="fil0 letter-A"
            d="M4915 1393s-50 14-103 14c-69 0-73-39-73-75 0-54 22-65 88-65 32 0 61 4 88 10v115zm177-256v-1c0-7 0-15-1-22-8-159-91-210-260-210-88 0-187 14-255 32l-1 146c50-15 140-26 208-26 92 0 120 11 129 58 1 5 2 11 2 18v1c0 6 1 13 1 21-47-9-91-14-131-14-149 0-236 32-236 198 0 97 23 149 82 176 70 33 239 7 284-8v23h177v-392zM4291 1070v271c0 22-39 38-91 38-82 0-104-33-104-155 0-154 30-169 109-169 24 0 59 4 87 15zm-87-164c-216 0-296 87-296 322 0 220 70 309 243 309 63 0 113-18 140-31-2 71-46 100-149 100-55 0-113-8-181-27l-4-1-33 147 3 1c58 21 146 35 218 35 173 0 332-35 332-288V949l-3-1c-66-25-177-42-271-42zM1961 923l206-1h3l134 337 127-335 1-2 209 1-231 604-1 2h-211zM2996 1393s-50 14-103 14c-69 0-73-39-73-75 0-54 22-65 88-65 32 0 61 4 88 10v115zm-88-488c-55 0-118 5-178 16h-2l-57 148-6 19 7-2c51-13 131-29 193-29 112 0 130 21 131 97-47-9-91-14-131-14-149 0-236 32-236 198 0 97 23 148 82 176 70 33 239 7 284-8v23h177v-390c0-169-74-235-265-235zM5609 915l-62 161-21-3c-9 0-18-1-26-1-56 0-116 18-116 56v400h-187V920h187v42c34-32 66-54 140-58 37-2 69 5 85 10zM4785 538l-14 38H2774l14-38zM5039 448c-54 0-83 24-94 66l-1 4c-9 35-1 51 33 63l29 10c10 3 12 8 10 16l-2 6c-3 10-11 16-35 16-13 0-36-4-54-8l-14 51c20 4 46 8 61 8 57 0 87-23 98-66l2-8c9-35 1-52-32-63l-27-10c-12-3-14-8-12-16l1-5c3-10 10-16 27-16 13 0 35 3 54 6l14-50c-20-3-40-6-57-6zm264 55 13-50h-177l-13 50h60l-45 171h56l45-171h60zm132 94 106-144h-61l-59 96-9-96h-62l30 144-20 76h56l20-76zm158 26 45-171h-56l-58 221h139l13-50h-83zm298-121 13-50h-139l-58 221h139l13-50h-83l10-37h76l13-49h-76l9-35h83z"
          />
          <path
            className="fil0 vangard"
            d="m1782 816 280 714h-529l-137-470-619 393L0 1945 1087 0h374l5 12 222 565-393 137-62-214-177 369 259-89 398-138 756-261zM3663 922c-217-31-389 33-389 33h-1v574h187v-435l1-1s43-23 116-13c19 2 44 23 52 40 10 20 13 51 13 97v312h186v-338c0-152-39-251-164-269zM5897 1064c52 0 102 20 102 46v212c0 11-6 28-16 32-17 8-46 18-81 17-85-2-101-44-106-154-4-103 17-154 101-154zm281-382h-179v271s-81-31-139-31c-147 0-244 59-244 298 0 98 17 166 46 216 28 47 100 95 208 92 56-1 107-14 129-22v23h177V681z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
