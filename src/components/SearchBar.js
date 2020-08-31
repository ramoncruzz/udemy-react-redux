import React from 'react'
import { Segment, Input } from 'semantic-ui-react';

const SearchBar = props =>{

    const pesquisarEvento = (event)=>{
        
        if(event.keyCode ===13){
            const termo = event.target.value;
            console.log('evento chamado ', termo);
        }
        
    }
    return (
        <div className="search-bar">
            <Segment stacked>
                <Input icon='search' onKeyDown={pesquisarEvento} size = 'large' placeholder='Procure...'/>
            </Segment>
        </div>
    )
}

export default SearchBar;