// // // // import React, { useState, useEffect } from "react";
// // // // import "../styles/Contacts.css";

// // // // export default function Contacts({ contacts, changeChat }) {
// // // //   const [currentUserName, setCurrentUserName] = useState(undefined);
// // // //   const [currentUserImage, setCurrentUserImage] = useState(undefined);
// // // //   const [currentSelected, setCurrentSelected] = useState(undefined);

// // // //   useEffect(async () => {
// // // //     const data = await JSON.parse(
// // // //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// // // //     );
// // // //     setCurrentUserName(data.username);
// // // //     setCurrentUserImage(data.avatarImage);
// // // //   }, []);

// // // //   const changeCurrentChat = (index, contact) => {
// // // //     setCurrentSelected(index);
// // // //     changeChat(contact);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {currentUserImage && currentUserName && (
// // // //         <div className="contacts-container">
// // // //           <div className="brand">
// // // //             <h3>Contacts</h3>
// // // //           </div>
// // // //           <div className="contacts">
// // // //             {contacts.map((contact, index) => (
// // // //               <div
// // // //                 key={contact._id}
// // // //                 className={`contact ${index === currentSelected ? "selected" : ""}`}
// // // //                 onClick={() => changeCurrentChat(index, contact)}
// // // //               >
// // // //                 <div className="avatar">
// // // //                   <img
// // // //                     src={`data:image/svg+xml;base64,${contact.avatarImage}`}
// // // //                     alt=""
// // // //                   />
// // // //                 </div>
// // // //                 <div className="username">
// // // //                   <h3>{contact.username}</h3>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="current-user">
// // // //             <div className="avatar">
// // // //               <img
// // // //                 src={`data:image/svg+xml;base64,${currentUserImage}`}
// // // //                 alt="avatar"
// // // //               />
// // // //             </div>
// // // //             <div className="username">
// // // //               <h2>{currentUserName}</h2>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }


// // // // // import React, { useState, useEffect } from "react";
// // // // // import "../styles/Contacts.css";

// // // // // export default function Contacts({ contacts, changeChat }) {
// // // // //   const [currentUserName, setCurrentUserName] = useState(undefined);
// // // // //   const [currentUserImage, setCurrentUserImage] = useState(undefined);
// // // // //   const [currentSelected, setCurrentSelected] = useState(undefined);

// // // // //   useEffect(() => {
// // // // //     async function fetchUserData() {
// // // // //       const data = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
// // // // //       setCurrentUserName(data.username);
// // // // //       setCurrentUserImage(data.avatarImage);
// // // // //     }

// // // // //     fetchUserData();
// // // // //   }, []);

// // // // //   const changeCurrentChat = (index, contact) => {
// // // // //     setCurrentSelected(index);
// // // // //     changeChat(contact);
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {currentUserImage && currentUserName && (
// // // // //         <div className="contacts-container">
// // // // //           <div className="brand">
// // // // //             <h3>Contacts</h3>
// // // // //           </div>
// // // // //           <div className="contacts">
// // // // //             {contacts.map((contact, index) => (
// // // // //               <div
// // // // //                 key={contact._id}
// // // // //                 className={`contact ${index === currentSelected ? "selected" : ""}`}
// // // // //                 onClick={() => changeCurrentChat(index, contact)}
// // // // //               >
// // // // //                 <div className="avatar">
// // // // //                   <img
// // // // //                     src={`data:image/svg+xml;base64,${contact.avatarImage}`}
// // // // //                     alt=""
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="username">
// // // // //                   <h3>{contact.username}</h3>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div className="current-user">
// // // // //             <div className="avatar">
// // // // //               <img
// // // // //                 src={`data:image/svg+xml;base64,${currentUserImage}`}
// // // // //                 alt="avatar"
// // // // //               />
// // // // //             </div>
// // // // //             <div className="username">
// // // // //               <h2>{currentUserName}</h2>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }



// // // // import React, { useState, useEffect } from "react";
// // // // import "../styles/Contacts.css";

// // // // export default function Contacts({ contacts, changeChat }) {
// // // //   const [currentUserName, setCurrentUserName] = useState(undefined);
// // // //   const [currentUserImage, setCurrentUserImage] = useState(undefined);
// // // //   const [currentSelected, setCurrentSelected] = useState(undefined);

// // // //   useEffect(() => {
// // // //     let isMounted = true; // Track whether the component is mounted

// // // //     async function fetchUserData() {
// // // //       try {
// // // //         const data = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
// // // //         if (isMounted) {
// // // //           setCurrentUserName(data.username);
// // // //           setCurrentUserImage(data.avatarImage);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching user data", error);
// // // //       }
// // // //     }

// // // //     fetchUserData();

// // // //     // Cleanup function to avoid state updates on unmounted component
// // // //     return () => {
// // // //       isMounted = false;
// // // //     };
// // // //   }, []);

// // // //   const changeCurrentChat = (index, contact) => {
// // // //     setCurrentSelected(index);
// // // //     changeChat(contact);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {currentUserImage && currentUserName && (
// // // //         <div className="contacts-container">
// // // //           <div className="brand">
// // // //             <h3>Contacts</h3>
// // // //           </div>
// // // //           <div className="contacts">
// // // //             {contacts.map((contact, index) => (
// // // //               <div
// // // //                 key={contact._id}
// // // //                 className={`contact ${index === currentSelected ? "selected" : ""}`}
// // // //                 onClick={() => changeCurrentChat(index, contact)}
// // // //               >
// // // //                 <div className="avatar">
// // // //                   {/* Ensure the correct format for image source */}
// // // //                   <img
// // // //                     src={`data:image/svg+xml;base64,${contact.avatarImage}`}
// // // //                     alt="contact-avatar"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="username">
// // // //                   <h3>{contact.username}</h3>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="current-user">
// // // //             <div className="avatar">
// // // //               {/* Ensure the correct format for image source */}
// // // //               <img
// // // //                 src={`data:image/svg+xml;base64,${currentUserImage}`}
// // // //                 alt="current-user-avatar"
// // // //               />
// // // //             </div>
// // // //             <div className="username">
// // // //               <h2>{currentUserName}</h2>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }


// // // import React, { useState, useEffect } from "react";
// // // import "../styles/Contacts.css";

// // // export default function Contacts({ contacts, changeChat }) {
// // //   const [currentUserName, setCurrentUserName] = useState(undefined);
// // //   const [currentUserImage, setCurrentUserImage] = useState(undefined);
// // //   const [currentSelected, setCurrentSelected] = useState(undefined);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       const data = await JSON.parse(
// // //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
// // //       );
// // //       setCurrentUserName(data.username);
// // //       setCurrentUserImage(data.avatarImage);
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   const changeCurrentChat = (index, contact) => {
// // //     setCurrentSelected(index);
// // //     changeChat(contact);
// // //   };

// // //   return (
// // //     <>
// // //       {currentUserImage && currentUserName && (
// // //         <div className="contacts-container">
// // //           <div className="brand">
// // //             <h3>Contacts</h3>
// // //           </div>
// // //           <div className="contacts">
// // //             {contacts.map((contact, index) => (
// // //               <div
// // //                 key={contact._id}
// // //                 className={`contact ${index === currentSelected ? "selected" : ""}`}
// // //                 onClick={() => changeCurrentChat(index, contact)}
// // //               >
// // //                 <div className="avatar">
// // //                   <img
// // //                     src={`data:image/svg+xml;base64,${contact.avatarImage}`}
// // //                     alt=""
// // //                   />
// // //                 </div>
// // //                 <div className="username">
// // //                   <h3>{contact.username}</h3>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <div className="current-user">
// // //             <div className="avatar">
// // //               <img
// // //                 src={`data:image/svg+xml;base64,${currentUserImage}`}
// // //                 alt="avatar"
// // //               />
// // //             </div>
// // //             <div className="username">
// // //               <h2>{currentUserName}</h2>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }


// import React, { useState, useEffect } from "react";
// import "../styles/Contacts.css";

// export default function Contacts({ contacts, changeChat }) {
//   const [currentUserName, setCurrentUserName] = useState(undefined);
//   const [currentUserImage, setCurrentUserImage] = useState(undefined);
//   const [currentSelected, setCurrentSelected] = useState(undefined);

//   useEffect(() => {
//     // Define an inner async function
//     const fetchUserData = async () => {
//       const data = JSON.parse(
//         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//       );
//       setCurrentUserName(data.username);
//       setCurrentUserImage(data.avatarImage);
//     };

//     // Call the async function
//     fetchUserData();
//   }, []);

//   const changeCurrentChat = (index, contact) => {
//     setCurrentSelected(index);
//     changeChat(contact);
//   };

//   return (
//     <>
//       {currentUserImage && currentUserName && (
//         <div className="contacts-container">
//           <div className="brand">
//             <h3>Contacts</h3>
//           </div>
//           <div className="contacts">
//             {contacts.map((contact, index) => (
//               <div
//                 key={contact._id}
//                 className={`contact ${index === currentSelected ? "selected" : ""}`}
//                 onClick={() => changeCurrentChat(index, contact)}
//               >
//                 <div className="avatar">
//                   {/* <img
//                     src={`data:image/svg+xml;base64,${contact.avatarImage}`}
//                     alt=""
//                   /> */}
//                   <img
//                     src={`data:image/svg+xml;base64,${contact.avatarImage}`}
//                     alt=""
//                   />
//                 </div>
//                 <div className="username">
//                   <h3>{contact.username}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="current-user">
//             <div className="avatar">
//               {/* <img
//                 src={`data:image/svg+xml;base64,${currentUserImage}`}
//                 alt="avatar"
//               /> */}
//               <img
//                 src={`data:image/svg+xml;base64,${currentUserImage}`}
//                 alt="Current user avatar"
//                 onError={(e) => e.target.src = "/path/to/placeholder/image.png"} // Update this path if needed
//               />

//             </div>
//             <div className="username">
//               <h2>{currentUserName}</h2>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import "../styles/Contacts.css";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    // Define an inner async function
    const fetchUserData = async () => {
      const data = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );

      if (data) {
        setCurrentUserName(data.username);
        // Ensure base64 includes the image type (prefix)
        if (data.avatarImage) {
          const imageUrl = data.avatarImage.startsWith("data:image")
            ? data.avatarImage
            : `data:image/svg+xml;base64,${data.avatarImage}`;
          setCurrentUserImage(imageUrl);
        }
      }
    };

    // Call the async function
    fetchUserData();
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <div className="contacts-container">
          <div className="brand">
            <h3>Contacts</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              const avatarImage = contact.avatarImage.startsWith("data:image")
                ? contact.avatarImage
                : `data:image/svg+xml;base64,${contact.avatarImage}`;

              return (
                <div
                  key={contact._id}
                  className={`contact ${index === currentSelected ? "selected" : ""}`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={avatarImage}
                      alt="Contact avatar"
                      onError={(e) => e.target.src = "/path/to/placeholder/image.png"} // Set a placeholder image path
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={currentUserImage}
                alt="Current user avatar"
                onError={(e) => e.target.src = "/path/to/placeholder/image.png"} // Update with fallback placeholder
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
