import React from 'react';

class StorePicker extends React.Component {
    render() {
       return (
           <form className='store-selector'>
            <h1>Please Enter the Store</h1>
            <input type="text" required placeholder="Store Name"></input>
            <button type="submit">Visit Store >></button>
           </form>
       )
    }
}

export default StorePicker;