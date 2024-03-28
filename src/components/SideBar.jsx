import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`lg:hidden sidebar bg-gray-800 text-white h-screen flex flex-col justify-between ${isOpen ? 'w-64' : 'w-0'}`}>
            <button onClick={toggleSidebar} className="text-bleu p-3">
                Toggle Sidebar
            </button>
            <ul>
                <li className="py-2">Option 1</li>
                <li className="py-2">Option 2</li>
                <li className="py-2">Option 3</li>
                {/* Ajoutez d'autres options de menu ici */}
            </ul>
        </div>
    );
};

export default Sidebar;
