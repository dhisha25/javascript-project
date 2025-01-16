// import { Button,EditableText,InputGroup,Toaster } from '@blueprintjs/core';

// import { useEffect, useState } from 'react';
// const AppToaster= Toaster.create({
//   position:"top"
// })
// function Application() {
//   const [users,setUsers] = useState(null);
//   const [newName,setNewName]=useState("")
//   const [newEmailAddress,setNewEmailAddress]=useState("")
//   const [newMobileNumber,setNewMobileNumber]=useState("")
//   const [newCollegeName,setNewCollegeName]=useState("")
//   const [newYearOfGraduation,setNewYearOfGraduation]=useState("")
//  useEffect(() => {
//     fetch('http://localhost:5000/users',{
//       // headers:{
//       //   "Content-Type":"application/json; charset=UTF-8"
//       // }
       
//   } )
//       .then((response) => response.json())
//       .then((json) => setUsers(json))
//       .catch((error) => console.error('Error fetching data:', error));
      
//   }, []);

// // //   fetch('https://jsonplaceholder.typicode.com/users')
// // //     .then((response) => response.json())
// // //     .then((data) => {
// // //       console.log('API Response:', data); // Inspect API response
// // //       if (Array.isArray(data)) {
// // //         setUsers(data);
// // //       } else {
// // //         console.error('Unexpected data format:', data);
// // //       }
// // //     })
// // //     .catch((error) => console.error('Error fetching users:', error));
// // // }, []);
//   function addUser() {
//     const Name=newName.trim();
//     const EmailAddress=newEmailAddress.trim();
//     const MobileNumber=newMobileNumber.trim();
//     const CollegeName=newCollegeName.trim();
//     const YearOfGraduation=newYearOfGraduation.trim();
//     if(Name && EmailAddress && MobileNumber && CollegeName && YearOfGraduation){
//       fetch("http://localhost:5000/users",
//         {
//           method:"POST",
//           body:JSON.stringify({
//             Name,
//             EmailAddress,
//             MobileNumber,
//             CollegeName,
//             YearOfGraduation
//           }),
//           headers:{
//             "Content-Type":"application/json; charset=UTF-8"
//           }
//         }
//       ).then((response)=>response.json())
//       .then(data =>{
//         setUsers([...users,data]);
// AppToaster.show({
//   message:"user added successfully",
//   intent:'success',
//   timeout:3000
// })
// setNewName("");
// setNewEmailAddress("");
// setNewMobileNumber("");
// setNewCollegeName("");
// setNewYearOfGraduation("");
//       })
//     }
//   }
//   function onchangeHandler(id,key,value){
//     setUsers((users)=>{
//     return users.map(user => {
//      return user.id===id?{...user,[key]:value}:user;
//      })
//     })
//   }
//   function updateUser(id){
//     const user=users.find((user) =>user.id===id);
//     fetch("http://localhost:5000/users/${id}",
//       {
//         method:"PUT",
//         body:JSON.stringify(user),
//         headers:{
//           "Content-Type":"application/json; charset=UTF-8"
//         }
//       }
//     ).then((response)=>response.json())
//     .then(data =>{
// AppToaster.show({
// message:"user updated successfully",
// intent:'success',
// timeout:3000
// })

//     })


//     }
//     function deleteUser(id) {
//       fetch("http://localhost:5000/users/${id}",
//         {
//           method:"DELETE",
         
//         }
//       ).then((response)=>response.json())
//       .then(data =>{
//         setUsers((users)=>{
//          return users.filter(user=>user.id !==id)
//         })
//   AppToaster.show({
//   message:"user deleted successfully",
//   intent:'success',
//   timeout:3000
//   })
  
//       }) 
//     }
//   return (
//     <div className="App">

//       <table className='bp4-html-table modifer'>
//         <thead>
       
//         <th>S.no</th>
//         <th>Name</th>
//         <th>EmailAdress</th>
//         <th>MobileNumber</th>
//         <th>CollegeName</th>
//         <th>YearOfGraduation</th>
//         </thead>
//         <tbody>
//              {Array.isArray(users) && users.map(user =>(
//           <tr key={user.id}>
            
//             <td>{user.Sno}</td>
//             <td>{user.Name}</td>
// <td><EditableText  onChange={value=>onchangeHandler(user.id,'EmailAddress',value)} value={user.EmailAddress}/></td>
// <td><EditableText   onChange={value=>onchangeHandler(user.id,'MobileNumber',value)} value={user.MobileNumber}/></td>
//             {/* <td>{user.EmailAddress}</td>
            
//             <td>{user.MobileNumber}</td> */}
//             <td>{user.CollegeName}</td>
//             <td>{user.YearOfGraduation}</td>
//             <td>
//               <Button intent='primary' onClick={() => updateUser(user.id)}>Update</Button>
//               &nbsp;
//             <Button intent='danger'  onClick={() => deleteUser(user.id)}>Delete</Button>
//             </td>
//           </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td></td>
    
//             <td><InputGroup value={newName} onChange={(e) => setNewName(e.target.value)}
//             placeholder='Enter Name...'/></td>
       
//              <td><InputGroup value={newEmailAddress} onChange={(e) => setNewEmailAddress(e.target.value)}
//             placeholder='Enter Email...'/></td>
//              <td><InputGroup value={newMobileNumber} onChange={(e) => setNewMobileNumber(e.target.value)}
//             placeholder='Enter MobileNumber...'/></td>
//              <td><InputGroup value={newCollegeName} onChange={(e) => setNewCollegeName(e.target.value)}
//             placeholder='Enter CollegeName...'/></td>
//             <td><InputGroup value={newYearOfGraduation} onChange={(e) => setNewYearOfGraduation(e.target.value)}
//             placeholder='Enter YearOfGraduation...'/></td>
//             <td>
//               <Button intent='success' onClick={addUser}>Add User</Button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
         
//     </div>
//   );
// }
// export default Application;







import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';
import { useEffect, useState } from 'react';

const AppToaster = Toaster.create({
  position: "top"
});

function Application() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmailAddress, setNewEmailAddress] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newCollegeName, setNewCollegeName] = useState("");
  const [newYearOfGraduation, setNewYearOfGraduation] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function addUser() {
    const Name = newName.trim();
    const EmailAddress = newEmailAddress.trim();
    const MobileNumber = newMobileNumber.trim();
    const CollegeName = newCollegeName.trim();
    const YearOfGraduation = newYearOfGraduation.trim();

    if (Name && EmailAddress && MobileNumber && CollegeName && YearOfGraduation) {
      fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify({
          Name,
          EmailAddress,
          MobileNumber,
          CollegeName,
          YearOfGraduation
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then((response) => response.json())
        .then(data => {
          setUsers([...users, data]);
          AppToaster.show({
            message: "User added successfully",
            intent: 'success',
            timeout: 3000
          });
          setNewName("");
          setNewEmailAddress("");
          setNewMobileNumber("");
          setNewCollegeName("");
          setNewYearOfGraduation("");
        });
    }
  }

  function onchangeHandler(id, key, value) {
    setUsers((users) => {
      return users.map(user => {
        return user.id === id ? { ...user, [key]: value } : user;
      });
    });
  }

  function updateUser(id) {
    const user = users.find((user) => user.id === id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json())
      .then(() => {
        AppToaster.show({
          message: "User updated successfully",
          intent: 'success',
          timeout: 3000
        });
      });
  }

  function deleteUser(id) {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    }).then((response) => response.json())
      .then(() => {
        setUsers((users) => {
          return users.filter(user => user.id !== id);
        });
        AppToaster.show({
          message: "User deleted successfully",
          intent: 'success',
          timeout: 3000
        });
      });
  }
  // function deleteUser(id) {
  //   fetch(`http://localhost:5000/users/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to delete user");
  //       }
  //       return response.json();
  //     })
  //     .then(() => {
  //       // Update the state to remove the specific user
  //       setUsers((users) => users.filter((user) => user.id !== id));
  //       AppToaster.show({
  //         message: "User deleted successfully",
  //         intent: 'success',
  //         timeout: 3000,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting user:", error);
  //       AppToaster.show({
  //         message: "Error deleting user",
  //         intent: 'danger',
  //         timeout: 3000,
  //       });
  //     });
  // }
  
  return (
    <div className="App">
      <table className='bp4-html-table modifer'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>EmailAdress</th>
            <th>MobileNumber</th>
            <th>CollegeName</th>
            <th>YearOfGraduation</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.Name}</td>
              <td><EditableText onChange={value => onchangeHandler(user.id, 'EmailAddress', value)} value={user.EmailAddress} /></td>
              <td><EditableText onChange={value => onchangeHandler(user.id, 'MobileNumber', value)} value={user.MobileNumber} /></td>
              <td>{user.CollegeName}</td>
              <td>{user.YearOfGraduation}</td>
              <td>
                <Button intent='primary' onClick={() => updateUser(user.id)}>Update</Button>
                &nbsp;
                <Button intent='danger' onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><InputGroup value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Enter Name...' /></td>
            <td><InputGroup value={newEmailAddress} onChange={(e) => setNewEmailAddress(e.target.value)} placeholder='Enter Email...' /></td>
            <td><InputGroup value={newMobileNumber} onChange={(e) => setNewMobileNumber(e.target.value)} placeholder='Enter MobileNumber...' /></td>
            <td><InputGroup value={newCollegeName} onChange={(e) => setNewCollegeName(e.target.value)} placeholder='Enter CollegeName...' /></td>
            <td><InputGroup value={newYearOfGraduation} onChange={(e) => setNewYearOfGraduation(e.target.value)} placeholder='Enter YearOfGraduation...' /></td>
            <td>
              <Button intent='success' onClick={addUser}>Add User</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Application;
