//to render header and category component
import React from "react";

export function Categories(props){
    let categories = props.data;

    return (
        <div class="header">
            <a href="#default" class="logo">Lazado</a>
            <div class="header-right">
                {
                    categories.map((category) => {
                        if (category.id == 1){ //to set the first category as active
                            return <a class="active" href={category.url}>{category.name}</a>
                        } else{
                        return <a href={category.url}>{category.name}</a>
                        }
                    })
                }
            </div>
        </div>
    );
}
export default Categories