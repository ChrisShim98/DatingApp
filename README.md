# SundayCruise - Dating Web Application
 <p align="center">
 <b>Developed with DotNet 7.0 x Bootstrap 5 x Angular 14</b>
 <img src="https://res.cloudinary.com/dhpo94oka/image/upload/v1709474256/Github/Description/b9ksoex1o7ynsnfcesvq.png" alt="Tech Stacks">
 </p>

Visit the [live demo](https://sundaycruise.fly.dev/) to explore the application.

**Testers can sign in as the demo user by clicking on the demo button or using the following credentials:**

**Username:** Sophie  
**Password:** Pa$$w0rd

**Username:** Ethan  
**Password:** Pa$$w0rd

## Features

1. **Registration:** Users can register for a new account using reactive forms that guide them through the required details.
2. **Secure Login:** Secure login using JSON Web Tokens (JWT) for communication between the server and client.
3. **Real-time Interaction:** Users can like and message each other in real-time.
4. **Message Status:** View message read status and timestamps.
5. **Message Deletion:** Messages are deleted from the database only when both users delete them.
6. **Profile Management:** Users can update their profile details and upload profile photos, stored securely on Cloudinary.
7. **Active User Tracking:** Track active users and their last active status using SignalR.
8. **User Sorting and Filtering:** Sort users by creation date or last active status and filter by age and gender.
9. **Like Tracking:** Track liked members and members who liked the user.
10. **Message Tracking:** View inbox, outbox, and new messages.
11. **Admin Features:** Administrators can manage user roles and moderate user-uploaded photos.

## Tech Stack Description

This dating web application leverages a combination of cutting-edge technologies to deliver a seamless user experience:

### Frontend:
- **Angular 14**: Empowering the client-facing aspect of the application, Angular offers a robust framework for building highly efficient single-page applications. With Angular, rendering processes are optimized, ensuring rapid delivery of content to users.

### Backend:
- **Microsoft .NET Core 7**: Serving as the backbone of the server-side functionalities, .NET Core 7 provides a cross-platform, high-performance framework for developing modern, cloud-enabled applications. It enables seamless integration with various platforms and ensures scalability and reliability.
- **ASP.NET Core**: Complementing .NET Core, ASP.NET Core is an open-source framework that facilitates the development of Internet-connected apps. It offers features such as an object-relational mapper for efficient data handling and supports rapid CRUD operations. ASP.NET Core streamlines development efforts, reducing both time-to-market and costs.

### Design:
- **Bootstrap 5**: Responsible for the application's design, Bootstrap 5 offers a comprehensive set of tools and components for creating responsive and visually appealing interfaces. By utilizing Bootstrap, the application benefits from a consistent and polished design, enhancing user engagement and usability.

By integrating these technologies, the dating web application achieves a harmonious blend of performance, scalability, and maintainability, ensuring an exceptional user experience.

## Deployment Strategy

The deployment process for this application involves several steps to ensure seamless delivery:

- **Building and Compression**: The Angular application is built and compressed, along with the Dotnet server files.

- **Dockerization**: The compressed files are dockerized within an Ubuntu (Linux) server environment using Docker containers.

- **Cloud Platform**: The dockerized application is then deployed to a cloud Platform as a Service (PaaS) provider, specifically Fly.io.

- **Automation with GitHub Actions**: GitHub Actions are set up to automate the dockerization and deployment process. Whenever there is a push to the main branch of the repository, GitHub Actions trigger the necessary steps to build, dockerize, and deploy the application.

This deployment strategy ensures efficient deployment of the application, with automatic updates triggered by changes in the main branch of the repository.

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
