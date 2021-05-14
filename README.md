<p align="center">
  <h2 align="center">Accessible Quiz </h2>
  <h3 align="center"><a href="https://aiseatu.github.io/accessible-quiz/">View Production Demo Here</a></h3>
  <p align="center">
    A simple Quiz Game that meets WCAG 2.0 requirements
  </p>
</p>

  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#accessibility-features-and-considerations">Accessibility features and considerations</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>

## About The Project

### Built With

- React 17

- Typescript

- Styled Components

### Accessibility features and considerations 

- #### Color contrast (<a href="https://webaim.org/resources/contrastchecker/">WebAIM checker</a>)

- #### Screen reader only texts along with non-color based information provider

- #### Keyboard navigation & focus styles

- #### Custom radio buttons
  In this project, I used radio type input for the quiz questions' choices and customized them as buttons. 
    
  _If buttons are desired(for aesthetic reasons, let's say), Why not just use buttons?_  
    
  Good question. In fact, it can be difficult to notice any difference at all if the choices were coded with `<button>` element -- they would have very similar event listeners that trigger the state change as the radio inputs, and your overall UX would stay pretty much the same way regardless of browser/device choices.  
    
  However, `<button>` and `<input>` are essentially different HTML elements with different functions, and this difference has siginificant meanings when assistive techonolgies were designed to read HTML. When screen reader first goes to `<button>` element, it perceives the button as a clickable item with some texts and that's it. Of course `<button>` can have `role`, disabled state, or even be grouped together, but essentially it is an independent element and has no meaningful relationship with the question text or other choices in the same question.  
    
    `<input>` on the other hand, is designed to be part of a group -- the `<fieldset>`, and is always used together with the question title `<legend>` and its designated `<label>`. `<fieldset>` tells the screen reader that there's a group of control elements, and `<legend>` performs its role as the caption of the group. Because of the grouping, every `<input>` element has semantic relationships with the caption, and screen reader will always conveys the following information for every `<input>`: 1, index of the current element; 2, total number of `<input>`elements in the current `<fieldset>`, similar to a list; and 3, selected/unselected state of the current element. These information are all crucial for users who rely on assistive technologies to complete a multiple choice quiz.  
      
    Yet we know the plain HTML (example for the above mentioned input group can be found <a href="https://www.w3.org/WAI/tutorials/forms/grouping/">here</a> is not always visually appealling, and we do not intend to sacrifice aesthetic UI here at all! Just like we could style a button, we could also style our radio inputs. In this project, I first gave the `<input>` elements opaciy of 0 `opacity: 0` so that the little radio buttons are all hidden but not disappeared. Then I applied my custom css to `<legend>` so that they look like buttons with rounded corners. From here, prop based styles can also be implemented. For instance, this quiz project allow users to see different borders based on whether they have clicked the choice and whether they answered the question correctly. This is done by applying prop based styles to `<legend>`. Last but not least, when user navigates the page with keyboard, the `focus` state goes to the hidden`<input>` instead of the styled `<legend>`. Therefore, any on focus style we would like to see for our question choices (e.g. outline) will need to be applied like this: `input:focus + legend {outline: 2px solid}`.   
      
    Of course, button is just one of the many ways to style a multiple choice quiz. Some may prefer to use slightly larger radio buttons, or different colors, maybe? When I tried to build something like that, I found <a href="https://www.a11ywithlindsey.com/blog/create-custom-keyboard-accessible-radio-buttons">this article</a> particularly helpful. Through some little css tricks, it's quite easy and fun to satisfy both design and accessibility functions!
<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo

   ```sh

   git clone https://github.com/aiseatu/accessible-quiz.git

   ```

2. Install NPM packages

   ```sh

   npm install

   ```

3. Run on local

   ```sh

   npm run start

   ```
