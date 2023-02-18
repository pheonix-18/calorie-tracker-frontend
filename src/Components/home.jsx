// import react
import React from 'react';
import {AuthContext} from '../AuthProvider.jsx';

export default function Home () {
    const {handleLogout} = React.useContext(AuthContext);
     return (
         <div>
             <h1>Home</h1>
             <button className="bg-red-900" onClick={(e) =>{
                    e.preventDefault();
                    handleLogout();
             }}
            >Logout</button>
         </div>
    );
}
