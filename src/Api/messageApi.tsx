import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDsmkm296DAmXyvQSBek-PEe8nR-YjJ-80',
  authDomain: 'huddleup-7eaba.firebaseapp.com',
  projectId: 'huddleup-7eaba',
  storageBucket: 'huddleup-7eaba.appspot.com',
  messagingSenderId: '348760925983',
  appId: '1:348760925983:web:584aa69d1ccbb6b25e722a',
  measurementId: 'G-7VWJX0X5QL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default async () => {
  const messaging = getMessaging(app);
  const token = await getToken(messaging, {
    vapidKey: 'BF38VqWbGBrFJJ0YH0flGe7t-bsBZxpPtdOO097ATLwbzbYqFfs1xt5G0ItokoQjJ1vcNyfV8Y1tIMfNygZ3S3c',
  });
  return token;
};
