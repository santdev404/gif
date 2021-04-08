import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['Ragnar', 'targaryen', 'omniman']

    const [categories, setCategories] = useState([ 'targaryen'])

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Peaky'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>



            <ol>

                {
                    categories.map(
                        category => 
                            (
                                <GifGrid 
                                    key      = {category}
                                    category = {category}
                                />
                            )
                        
                    )
                }

            </ol>

        </>
    )
}
