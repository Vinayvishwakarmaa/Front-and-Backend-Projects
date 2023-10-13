# LMS Frontend

### Setup instruction

1. Clone the project

``` Git Clone git@github.com:Vinayvishwakarmaa/Front-and-Backend-Projects.git

```
2. Move into the directory

```
  cd lms-frontend
```

3. install dependencies

```
 npm install
```

4. run the server

```
   npm run dev
```

### Setup instruction for tailwind 

[Tailwind official instrucion doc] (https://tailwindcss.com/docs/installation/using-postcss)

1. Install tailwindcss

```
  npm install -D tailwindcss
```
2. Create tailwind config file

```
  npx tailwindcss init

```
3. Add file extention to tailwind config file in the contents property

```
   "./src/**/*.{html,js,jsx,ts,tsx}"

```

4. Add the tailwind directives at the top `index.css` file

```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

```

### Adding plungins and dependencies

``` 
 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp 
   
```