- whatever you can regenarate , don't put it on git.
- not a normal js file, so use type=module in script.
npx parcel build index.html -> for production, it will compress files.
- parcel is a beast
- "start": "parcel index.html", developmenent
- "build": "parcel build index.html", production
industry standard, write in script use npm run start
- "start": "parcel index.html",
    "build": "parcel build index.html",
- css inside jsx, not prefered way.
- when dynamic pass data, use props.
- destructuring is javascript, so use {} in react when using props.
- use unique id, no unique id then use at least index as last resort it is better than not using a key.
- named export and default export. 
- key should be on parent JSX.
- npm run watch-test
- 
#819A91
#A7C1A8
#D1D8BE
#EEEFE0npx
- npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
