# Amazon clone react
![AMAZON_MD](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/7e01ad5f-486a-4962-a598-6fa5f12dd72c)

Hello guys, Here I have done a clone website of Amazon using React and authorized with Firebase. Through this project, I have learned a lot about React with Redux,
Authorization with Firebase and Style with Tailwind CSS.

# Getting Started with Create React App
This project uses Tailwind CSS for styling elements and It uses redux state management, There is no perfect state management solution, Redux maintains Centralized state management
so for this I choose redux. Let's get started with the Project.

## Available Commands
Add the node modules to your project:
```
npm install
```

use this command if you get an error:
```
npm install -g npm
```

While running your project till you get an error as `'react-scripts' is not recognized as an internal or external command`
then use:
```
npm install react-scripts --save
```

for Installing Tailwind CSS:
```
npm install -D tailwindcss
npx tailwindcss init
```

Add the Redux Toolkit and React Redux packages to your project:
```
npm install @reduxjs/toolkit react-redux
```
for connecting with Firebase:
```
npm install firebase react-router-dom react-firebase-hooks
```
for installing Firebase tools:
```
npm install -g firebase-tools
```
If you are hosting with Firebase, then use the following commands:
First, we will initialize a Firebase project in our React app by running the following command in the console in our root directory.
Authorize your Project details in Firebase.
```
firebase init
```

* Select Hosting from the options provided.
* Select the Use an existing project option.
* As the build folder of react apps is generated in the build folder by default, we will use the same as our public directory.
* Type y as we want to configure our app as a single-page app.
* The initialization is complete, now we just need to run a few commands and our application will be ready to go.
* Now we will run the following command to build our react app.

```
npm run build
```
Now we just need to run the last command and our application will be deployed.

```
firebase deploy
```
This will deploy our project and also provide us with the hosting link which we can visit.


 The following images are the output of my project.
 # Login 
![Screenshot (77)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/35c95428-15ca-40a5-ba1b-45dfe7d8df1b)

# Register
![Screenshot (78)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/ccb36d1a-ea59-4deb-8b12-0b3d983cf086)

# Homepage
![Screenshot (34)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/7788d9fc-f6d2-4b1e-b97e-05eac18a5c4a)
![Screenshot (35)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/3a2af265-59c4-46b7-aa54-69c8e1d43bc5)
![Screenshot (36)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/8a93d79c-420e-4f32-bb42-64115705ccc3)
![Screenshot (37)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/fc234142-e59f-4d12-92fe-f82815738c2a)
![Screenshot (38)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/1464c80b-ab10-42d3-8a10-f9fa69daea74)
![Screenshot (39)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/750b35ed-26f8-45f5-b6d4-63222c8f74bc)
# Product 
![Screenshot (40)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/7a92c672-f476-4bdf-89e3-ce735455a158)
# Cart 
![Screenshot (41)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/34080121-d568-4b68-a43c-1fbb1221f5fa)
# Checkout
![Screenshot (42)](https://github.com/Arun100203/Amazon_clone_react/assets/108601293/8b2d262e-8c2a-4d58-87c8-e3a5f6040e51)


