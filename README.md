# SundayCruise - Dating Web Application
 <p align="center">
 <b>Developed with Angular 14 x Bootstrap 5 x DotNet 7.0</b>
 <img src="https://res.cloudinary.com/diywkaahn/image/upload/v1674050548/Github/Techstacksfinal_jx9ber.png" alt="Tech Stacks">
 </p>

A demo of this application can be viewed <a href="https://bold-meadow-2147.fly.dev/">here</a>.   

<b>Testers can sign on as the demo user by clicking on the demo button or log in as one of the accounts:</b>

<b>Username:</b> Beverley  
<b>Password:</b> Pa$$w0rd  

<b>Username:</b> Leon  
<b>Password:</b> Pa$$w0rd

## What can this application do?
In this application, users can:  
<ol>
<li>Register for a new account using their username, password and a few details about themselves with reactive forms that inform the user of the required details</li>
<li>Login to the application securely with a JSON Web Token (JWT), which is used securely transfer information between the dotnet server and the client web application</li>
<li>Like and message other users in real time</li>
<li>View if messages have been read or not, as well as the time they were read</li>
<li>Delete messages from users - messages are only deleted from the database if both users delete the message</li>
<li>Change the details of their own profile to be viewed by other users</li>
<li>View the details and pictures of other users</li>
<li>Upload and store profile photos - these photos are stored on a cloud photo stored solution called "Cloudinary"</li>
<li>Users can set a main photo, and photos can be deleted only if they are not the main photo</li>
<li>Track active users and see the last time an account was active - this was implemented using SignalR, which is a WebSocket that continuously checks on the status of client connections</li>
<li>Sort users by creation date or last active status</li>
<li>Filter users by their age and gender</li>
<li>Track the members who the user has liked or the users that liked the user</li>
<li>Track messages that were sent by the users, tabs for inbox, outbox and new messages</li>
<li>Admin features: Admins can change the roles of users and moderate photos that were uploaded by regular users</li>
</ol>

## Description of Tech Stacks
This project is a dating web application that was developed with Angular 14 as the client facing,
Microsoft .NET Core 7 as the server-side technologies and Bootstrap 5 to strap the design of the application together.
This application takes advantage of the Google maintained JavaScript framework, Angular, to build highly efficient and lightning-fast
single-page application. This means that all processes within the can be easily rendered to the user in no time at all.
Furthermore, this was coupled with ASP.NET Core, which is a cross-platform, high-performance, open-source framework for building modern, cloud-enabled,
Internet-connected apps maintained by Microsoft. ASP.NET Core, is also packaged, with an object-relational mapper to work with relational data using domain-specific
objects. It helps to perform fast CRUD (Create, Read, Update and Delete) operations and aids visually designing models to map data to databases. 
This means a reduction of development time and development costs which leads to an easily scalable and maintainable application.

## Deployment Strategy
The Angular application was built, compressed and stored as a static site along with the Dotnet server files. The files were then dockerized as an Ubuntu (Linux) server using Docker. Then, pushed to the cloud PAAS (Platform as a service) Fly.io. Github actions are now in place to auto dockerize then deploy everytime there is a push to the main branch.

## Screenshots
| Home Page  | Signed In |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/HomePage_uvwtp2.png" alt="Home Page">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/SignedIn_dcdj8k.png" alt="Signed In">  |

| Register Form  | Active Users |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/RegisterForm_cydt6i.png" alt="Register Form">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/ActiveUsers_zr2qpd.png" alt="Active Users">  |

| Members I Like  | Members Who Like Me |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/MembersILike_rdlkdy.png" alt="Members I Like">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/MembersWhoLikeMe_hdf3uc.png" alt="Members Who Like Me">  |

| Real Time Messages  | Read Time Tracking |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/RealTimeMessages_ktwh2q.png" alt="Real Time Messages">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/ReadTimeTracking_rdxd1g.png" alt="Read Time Tracking">  |

| Filtering Users By Age And Gender  | Message Inbox |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/FilteringUsersByAgeAndGender_vshtlx.png" alt="Filtering Users By Age And Gender">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/MessageInbox_hrjuyo.png" alt="Message Inbox">  |

| Updating Profile  | Modal If Changes Are Not Saved |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/UpdatingProfile_knabde.png" alt="Updating Profile">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/ModalIfChangesAreNotSaved_oipbkm.png" alt="Modal If Changes Are Not Saved">  |

| Saved Changes  | Uploading Images |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/SavedChanges_cr1hra.png" alt="Saved Changes">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052933/Github/SundayCruise/UploadingImages_keyclq.png" alt="Uploading Images">  |

| Image Uploaded  | Viewing Other Users Photos |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/ImageUploaded_byw0z6.png" alt="Image Uploaded">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674055358/Github/SundayCruise/ViewingOtherUsersPhotos_iiuqf6.png" alt="Viewing Other Users Photos">  |

| Admin Panel  | Admin Edit Roles |
| ------------- | ------------- |
| <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/AdminPanel_tmygj6.png" alt="Admin Panel">  | <img width="500" src="https://res.cloudinary.com/diywkaahn/image/upload/v1674052932/Github/SundayCruise/AdminEditRoles_olvi0f.png" alt="Admin Edit Roles">  |
