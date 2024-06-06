import React, { useState ,useEffect} from 'react';
export default function Navbar(){
    const [activeTab, setActiveTab] = useState('home');
    const [isScreenLarge, setIsScreenLarge] = useState(false);
  
    const handleTabClick = (tab) => {
      console.log(`Tab clicked: ${tab}`);
      setActiveTab(tab);
    };
  
    useEffect(() => {
      const handleResize = () => {
        console.log(window.innerWidth);
        setIsScreenLarge(window.innerWidth > 768);
      };
  
      // Check initial screen size
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    if (!isScreenLarge) {
      console.log(`isScreenLarge: ${isScreenLarge}`);
    }

    const data = 'home'
    return(
        <div className='tab-bar'>
        {isScreenLarge && (
           <button
             className={`tab ${activeTab === 'home' ? 'active' : ''}`}
             onClick={() => handleTabClick('home')}
           >
             Home
           </button>
         )}
         <button
           className={`tab ${activeTab === 'about' ? 'active' : ''}`}
           onClick={() => handleTabClick('about')}
         >
           About
         </button>
         <button
           className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
           onClick={() => handleTabClick('contact')}
         >
           Contact
         </button>

       </div>
    )
}