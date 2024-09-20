# Pokemon App 🐱‍👤
### pokemon API를 통해서 Pokemon의 정보를 보여주는 APP

## ◽ vite-app으로 시작
```
npx vite-app //vite-app 설치   
npm i 
npm run dev
```
📃[참조 사이트](https://www.npmjs.com/package/create-vite)
 


## ◽  tailwind css 적용

```
//Terminal
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p

 //tailwind.config.js
 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
📃[공식문서](https://tailwindcss.com/docs/guides/vite)


## ◽ 그 외 사용기술
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&amp;logo=html&amp;logoColor=white"/>
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&amp;logo=css&amp;logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black"/>   
<img src="https://img.shields.io/badge/React-1572B6?style=for-the-badge&amp;logo=React&amp;logoColor=black"/>