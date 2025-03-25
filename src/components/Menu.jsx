import React, { useState } from 'react';
import './Menu.css'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);

    const navigation = [
        { link: '#', text: 'Link 1' },
        { link: '#', text: 'Link 2' },
        { link: '#', text: 'Link 3' },
        { link: '#', text: 'Link 4' },
    ];

    return (
        <nav>
            <button className="menu-toggle" onClick={toggle}>
                <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
            </button>
            <ul className="menu-links">
                {navigation.map(nav => (
                    <li key={nav.text}>
                        <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show}>
                            {nav.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
