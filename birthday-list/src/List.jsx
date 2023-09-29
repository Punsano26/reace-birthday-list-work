import React from 'react'
const List = (props) => {
    const {people} =props;
  return (
    <div>
        {people.map((person)=>{
            const {id, name, image, age} =person;
            return (
            <article className="person" key={person.id}>
                <img src={person.image} alt="profile image" />
                <div>
                    <h4>{person.name}</h4>
                    <p>{age} years old</p>
                </div>
            </article>
                    );
        })}
    </div>
  )
}

export default List