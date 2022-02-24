import React from "react";
import Contact_item from "./Contact_title";

const Contact = () => {
    return React.createElement(
        'div',
        {id: 'contact-container'},
        React.createElement('div', {class: 'contact-item', id: 'git'}, "Github"),
        React.createElement('div', {class: 'contact-item', id: 'link'}, "LinkedIn"),
        React.createElement('div', {class: 'contact-item', id: 'inst'}, "Instagram"),
        React.createElement('div', {class: 'contact-item', id: 'contact_title'}, "Contact Me")
    );
}
export default Contact;