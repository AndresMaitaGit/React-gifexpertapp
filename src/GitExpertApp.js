import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

        // una forma
        // setCategories( ['Pokemon', ...Categories] );
        
        //si se quiere que salga al final se coloca de forma invertida como
        // setCategories( [...Categories, 'Pokemon'] );

        //otra forma y la recomendada seria.
        // setCategories(cats => [...cats, 'Pokemon' ]);
        

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            {
                categories.map( category => {  // no hay que cometer el error de colocar como key el indice " i ".
                    return <GifGrid 
                        key = { category }
                        category = { category } /> 
                })
            }
        </>
    )
}

export default GifExpertApp
