# Podcast Platform

### Goal
The Podcast Platform is designed to allow users to seamlessly create, upload, and manage podcast episodes. The platform ensures a smooth experience with user authentication, profile management, and easy episode uploads.

### Features
- User Authentication: Secure login and signup using Firebase Authentication.
- Profile Management: Users can view and manage their profiles.
- Episode Upload: Users can create and upload podcast episodes directly to the platform.
- Seamless User Interface: Easy-to-use and responsive interface built with React.
- Notifications: Toast notifications for important events like successful uploads, login, errors, etc.

### Tech Stack
- React: Frontend framework for building a dynamic user interface.
  - React Router: For navigation between different pages and views.
  - React Toastify: For showing toast notifications for user feedback.
- Firebase:
  - Authentication: Secure user authentication and authorization.
  - Storage: Storing podcast audio files.
  - Database (Firestore): Storing metadata like user profiles and podcast information.

### Live Demo
Check out the live version of the app here: https://react-podcast-platform.netlify.app

### Installation
To run this project locally:
- Clone the repository:
```
git clone https://github.com/pankajmokashi/podcast-platform.git
cd podcast-platform
```

- Install dependencies:
```
npm install
```

- Set up Firebase:
  - Create a Firebase project on the Firebase Console.
  - Enable Authentication (Email/Password) and Firestore Database.
  - Add Firebase Storage for uploading audio files.
  - Get your Firebase config and add it to a .env file:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

- Start the development server:
```
npm start
```
The app should now be running on http://localhost:3000/.
