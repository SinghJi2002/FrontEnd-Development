## Installing Tailwind

Step 1: Initialise the npm environment

    npm init -y


Step 2: Install and initialise tailwind.
    npm install -D tailwindcss

    npx tailwindcss init

Step 3: Edit tailwind.config.js. Add this to its content option of json.

    "  "./src/**/*.{html,js}"  "


Step 4: Create input.css file in the src directory. Add this to input.css file.

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    


Step 5: Run the code to start working on terminal.

    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


Step 6: Create you html file in the directory mentioned in configure file of tailwind. Like output.css to the html file where you want to use tailwind css.


