import React from "react";

export function SubjectList(props){
    let subjects = props.data;
    let title=props.title

    return (
        <div>
            <h1>{title}</h1>
            <ol>
    	    {
                subjects.map((subject) => {
                    return <li key={subject.id}>{subject.code} - {subject.description}</li>
                })
            }
            </ol>

  	  </div>
    );
}

export default SubjectList