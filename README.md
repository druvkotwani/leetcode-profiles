# 𝙻𝚎𝚎𝚝𝙲𝚘𝚍𝚎  𝙿𝚛𝚘𝚏𝚒𝚕𝚎𝚜

𝙰 𝚙𝚕𝚊𝚝𝚏𝚘𝚛𝚖 𝚝𝚘 𝚌𝚛𝚎𝚊𝚝𝚎 𝚢𝚘𝚞𝚛 𝙻𝚎𝚎𝚝𝙲𝚘𝚍𝚎 𝚜𝚝𝚊𝚝𝚒𝚜𝚝𝚒𝚌𝚜 𝚊𝚗𝚍 𝚜𝚑𝚘𝚠𝚌𝚊𝚜𝚎 𝚢𝚘𝚞𝚛 𝙻𝚎𝚎𝚝𝙲𝚘𝚍𝚎 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚐𝚕𝚘𝚋𝚊𝚕𝚕𝚢.

![image](https://github.com/druvkotwani/Leetcode-Profiles/assets/96691139/6ce0aab2-1d74-4319-a436-e6663587da71)




## Languages/Tools

<a href="">
    <img src="https://skillicons.dev/icons?i=tailwindcss,js,react,firebase,vercel" />
  </a>

## 👩🏽‍💻 Demo
Check out the website: [𝙻𝚎𝚎𝚝𝙲𝚘𝚍𝚎 𝙿𝚛𝚘𝚏𝚒𝚕𝚎𝚜](https://leetcode-profiles.vercel.app/)


## 🛠️ Installation Steps

### 1. Fork the project:
- [Fork](https://github.com/druvkotwani/Leetcode-Profiles) the project. Click on the <a href="https://github.com/druvkotwani/Leetcode-Profiles/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="15" width="15"></a> icon in the top right to get started.

### 2. Create a New Branch:
- On your new repository's page, click the gray `main` button in the upper left to reveal a dropdown menu.
- Enter the name of your new branch in the text box. (Branch names usually make a reference to what is being changed. Example: `FixMargin`).
- Click on `Create branch <new branch name>` and this will automatically take you to your new branch. You can make edits on the main branch, but this may cause issues down the line. Best practice is to create a new branch for each separate issue you work on. That way, your `main` branch remains in sync with `leetcode-profiles` `main` branch.

### 3. Setup Firebase:
- Below are the steps to setup firebase.

### 4. Edit:
- Do the desired changes, you want.

### 5. Raise a Pull Request:
- And finally, create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!
- Great job! 


## Setting up Firebase 

1. **Firebase Account Setup:**
   - Sign up for a free Firebase account at [Firebase Console](https://console.firebase.google.com/).

2. **Create a Firebase Project:**
   - Create a new Firebase project via the Firebase Console.

3. **Add Firebase to your web app:**
   - Set up the firebase for your webapp and then Add Firebase SDK.

4. **Create Database(firestore Database)**

5. **Create a collection with the file format below:**

  
   ### 👇🏽 File Format
| Key              | Value                                                                                                                                                                                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fullName         | This value should be your real name.                                                                                                                                                                                                                        |
| image            | URL to your profile image.                                                                                                                                                                                                                                  |
| username         | This value should be your Twitter username (𝕏).                                                                                                                                                                                                             |
| badgeImg         | URL to your badge image or an empty string if not available.                                                                                                                                                                                                |
| rank             | Your rank on LeetCode.                                                                                                                                                                                                                                      |
| easySolved       | Number of easy problems solved on LeetCode.                                                                                                                                                                                                                  |
| easyTotal        | Total number of easy problems on LeetCode.                                                                                                                                                                                                                  |
| easyBeats        | Number of easy problems beaten on LeetCode.                                                                                                                                                                                                                 |
| mediumSolved     | Number of medium problems solved on LeetCode.                                                                                                                                                                                                               |
| mediumTotal      | Total number of medium problems on LeetCode.                                                                                                                                                                                                                |
| mediumBeats      | Number of medium problems beaten on LeetCode.|
| hardSolved       | Number of hard problems solved on LeetCode.|
| hardTotal        | Total number of hard problems on LeetCode.|
| hardBeats        | Number of hard problems beaten on LeetCode.|
| totalSolved      | Total number of problems solved on LeetCode.|
| totalQuestions   | Total number of questions available on LeetCode.|
| linkedin         | {link: Link, text: text}|
| twitter          | {link: Link, text: text}|
| github           | {link: Link, text: text}|
| website          | {link: Link, text: text} |

6. **Replace the firebaseConfig inside firebase.js with your actual apiKeys, and rest of the data**
7. **Add now you are good to go**

## 🚀 Running Frontend
To run locally, just `cd` into the `client` and run the following commands to run node modules and serve the website locally.
```bash
npm i
```

```bash
npm run dev
```

## 🚀 Running Backend(only necessary if you had made changes in the api)
To run locally, just `cd` into the `server` and run the following commands to run node modules and serve the website locally.
```bash
npm i
```

```bash
node index.js
```




<hr/>

## Drop a ⭐ if you like this project
