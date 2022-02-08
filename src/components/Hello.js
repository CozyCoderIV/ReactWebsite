import React from "react";

const Hello = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello Otis</h1>
    //     </div>
    // )

    return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h2', {id: 'title'}, "Otis Jackson IV"),
    React.createElement(
        'div',
        {id: 'navbar'},
        React.createElement('div', {id: 'hello', className: 'nav-item'}, "Home"),
        React.createElement('div', {id: 'story', className: 'nav-item'}, "Story"),
        React.createElement('div', {id: 'feats', className: 'nav-item'}, "Prize"),
        React.createElement('div', {id: 'goals', className: 'nav-item'}, "Goals"),
        React.createElement('div', {id: 'art', className: 'nav-item'}, "Artwork")
          )
    );
}

export default Hello;