import React from "react";
import Contact from "./Box_contact";
// import BoxB from "./BoxB";

const BoxA = () => {
    return React.createElement(
        'div',
        {id: 'boxA-container'},
        <Contact />,
        React.createElement('div', {id: 'box-b-container'},
            React.createElement('div', {class: 'boxB-item', id:'a'}, 'picA'),
            React.createElement('div', {class: 'boxB-item', id:'b'}, 'picB'),
            React.createElement('div', {class: 'boxB-item', id:'c'}, 'picC')
        ),
        React.createElement('div', {id: 'welcomeBanner'}, "Welcome Banner"),
        React.createElement('div', {class: 'Portion', id:'Portion-1'}, "First Third"),
        React.createElement('div', {class: 'Portion', id:'Portion-2'}, "Second Third"),
        React.createElement('div', {class: 'Portion', id:'Portion-3'}, "Third Third")
    );
}
export default BoxA;