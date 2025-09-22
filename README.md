# Assignemnt1-JEM440
Web Dev assignment
1. What kind of website did you make and why? I made a website based around my favorite super hero, Batman. I saw the open-ended nature of the project as an oppurtunity to make a site about something I am interested in. I have always liked watching Batman on the big screen, reading his comics, and playing video games based on his story.
2. Briefly describe the 5 pages you created for your site.
     - Home: The home page is based solely on Batman. It has his character biography as well as a break down of how he was created in the creative sense.
     - Villians: A page dedicated to Batman's rogues galleries, it offers character biographies of the most well-known and prominent villians that Batman faces.
     - The Bat Family: A linear time line of the allies Batman has had throughout the years. Completed with character bios and images.
     - Gotham: A table displaying different regions of Gotham City along with their corresponding statistics, including population and crime stats. Below the table, we have a large scale map of Gotham.
     - Most Famous Adventures: An image collage of Batman's most famous comic story lines.
3. What were the HTML elements you used and why did you choose them?
   The main structure of my HTML consisted of: body(section((section tile)(div-row/col(div(content-box))))footer)
      - This structure allowed for flexible layouts when styled with CSS. This comes into play mainly when I want to display elements of similar functions in either rows, columns, or both. Within each sections, elements such as h1-h5, img, p, and ul/li were some of the most common occurences within each section. I used these specific elements frequently to construct character bios. 
   - Provide a link to the W3C HTML validationLinks to an external site. for your front-page. <img width="1549" height="892" alt="image" src="https://github.com/user-attachments/assets/164f7541-124b-4f50-9242-6296b35e558c" /> (Unable to insert link- resulted in browser error when copy/pasting)
   
4. What CSS styles did you apply to change the visual design of those HTML elements?
   The most major style I used repeatedly were:
      - coloring style changes: (font-color, border-color, background color) I used a main color pallete based upon Batman's most commonly seen colors (Batman Yellow, Dark Blue, black, Batman Beyond Red, Grey).
      - padding/margin (used to reduce spacing between elements/as well negate possible overflows that would create horizontal scrolling) wtih a lot of elements I used, there are default padding and margin settings in-place that messed with spacing, this required some manual configurations to get the layout the way I wanted.
      - flex: (creating flex-boxes, rows, columns, ways to display flex) possibly the most important part of my css was the flex applications and configurations I used. One key example was the flex-rows and flex-columns. I first put the flex elements (content-box) into a flex-row. I could configure this to have a set number of elements in a said row, or to have as many as can fit on a designated screen. This flex-row would then be put inside of a flex-column, which displays the rows in a set column.
      - Hover effects: I also used hover effects that would change brightness of links as well as cursor styles.
   - Provide a link to the W3C CSS validationLinks to an external site. for your front-page.<img width="1595" height="459" alt="image" src="https://github.com/user-attachments/assets/08ffb237-d67a-4347-a9bc-26a268f502ca" /> (Unable to insert link- resulted in browser error when copy/pasting)
5. Describe the Javascript code you wrote to add interactivity to your site. The main 2 elements are the carousel displayed towards the bottom of the home page and the scroll to the top button, which was used on every page.
   - Carousel: this was definetly the most difficult of the two JS elements to create and make functional. The carousel allows a user to scroll through images, which represent creative influences that the creative minds behind Batman used. It used opacity settings and positional configuration to allows the images to sit all on top of one another. It used a loop to iterate through each image when either the front or backwards button is pressed. It also uses an event listener to automatically scroll through the images with a fade effect after a certain amount of time passes.
   - Scroll to top button: a much simpler element, it simply scrolls to the top of the page on click for the user. It uses an event listener to automatically appear when the title element is out of view of the user's screen.
