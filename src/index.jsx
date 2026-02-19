import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));



//  function User (firstName, lastName, age,company ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.company  = company;
// }
// const childUser=new User('doston','rajabov',25,'iSystem');
// const parenUser=new User('Sodiq','raja',20,'iSy');
//
// const users = [
//     {
//     firstName: 'Doston',
//     lastName: 'Dost',
//     age: 15,
// },
//     {
//     firstName: 'Axmad',
//     lastName: 'Donyorov',
//     age: 25,
// },
//     {
//     firstName: 'Dilshod',
//     lastName: 'Dostonov',
//     age: 35,
// },
// ];
//
// let colors=['blue','green','red','orange'];

// function testFunction(name) {
//     alert('Hello World!'+'  '+ name);
// }

// const users=['Doston','Doston2','Doston3','Doston4','Doston5'];
// function changeUserName(index) {
// // console.log(index,users[index]);
//     users[index] = 'changed';
//     console.log(users);
// }
//
// function deleteUser(index) {
//     users.splice(index,1);
//     console.log(users);
// }



root.render( <App/>
    // <div className="container border-2 border-dark">
    //     {/*<div className="row my-5">*/}
    //     {/*/!*    <div className="col-xl-4">*!/*/}
    //     {/*/!*        <h4>{childUser.firstName}</h4>*!/*/}
    //     {/*/!*        <h4>{parenUser.lastName}</h4>*!/*/}
    //     {/*/!*        {users.map((item, index) => (*!/*/}
    //     {/*/!*        <ol key={index}>*!/*/}
    //     {/*/!*            <li key={index}>ism: {item.firstName}</li>*!/*/}
    //     {/*/!*            <li key={index}>familiya: {item.lastName}</li>*!/*/}
    //     {/*/!*            <li key={index}>age: {item.age}</li>*!/*/}
    //     {/*/!*        </ol>*!/*/}
    //     {/*/!*        ))}*!/*/}
    //     {/*/!*        <div className="col-xl-4">*!/*/}
    //     {/*/!*            {colors.map((item, index) => (*!/*/}
    //     {/*/!*                <ul key={index}>*!/*/}
    //     {/*/!*                    <li>{item}</li>*!/*/}
    //     {/*/!*                </ul>*!/*/}
    //     {/*/!*            ))}*!/*/}
    //     {/*/!*        </div>*!/*/}
    //     {/*/!*    </div>*!/*/}
    //     {/*</div>*/}
    //     {/*<div className="row my-5">*/}
    //     {/*    /!*<div className="col-xl-4">*!/*/}
    //     {/*    /!*    <button onClick={()=>testFunction('doston')} className="btn btn-primary w-100">*!/*/}
    //     {/*    /!*        click me</button>*!/*/}
    //     {/*    /!*</div>*!/*/}
    //     {/*    <div className="col-xl-4">*/}
    //     {/*        <ol>*/}
    //     {/*            {users.map((item, index) => (*/}
    //     {/*                <li key={index} className='mt-3'>*/}
    //     {/*                    {item}*/}
    //     {/*                    <button onClick={()=>changeUserName(index)} className="btn btn-warning btn-sm ms-3">change name</button>*/}
    //     {/*                    <button onClick={()=>deleteUser(index)} className="btn btn-danger btn-sm ms-3">delete</button>*/}
    //     {/*                </li>*/}
    //     {/*            ))}*/}
    //     {/*        </ol>*/}
    //     {/*    </div>*/}
    //     {/*</div>*/}
    //
    // </div>
)