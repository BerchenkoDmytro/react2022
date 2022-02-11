import React from 'react';

const User = (props) => {
    const {id, name, surname, email} = props;
    return (
        <div>
            {/*{id}--{name}--{surname}--{email}*/}
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
        </div>
    );
};

export default User;