import React from 'react';
//Data validation
type dataObject = {
    id:string,
    name: string,
    subItems: subItems
}

type subItems = dataObject[] | [];

interface propsObject {
    dataArray: dataObject[];
    indent: number
}


//Component
const ListDataRecursively = ({dataArray, indent=0 }: propsObject) => {

    //Test if an array is empty and therefore item has no children
    const arrayIsEmpty = (array: subItems) => !(array.length>0);

    //list item indentation (increases with depth of child)
    const style = {
        marginLeft: `${indent}px`,
    }

    //JSX saved in a variable
    const list = dataArray.map((item: dataObject) => {
        return (
                <>
                    <li id={item.id} style={style}>
                        {item.name}
                    </li>

                    {
                        arrayIsEmpty(item.subItems) ? 
                            null
                            :
                            <ul>
                                <ListDataRecursively
                                    dataArray={item.subItems}
                                    indent={indent+10}
                                />
                            </ul>
                    }  
                </>
        )
    })

    //return the list variable 
    return <>{list}</>
}

export default ListDataRecursively;