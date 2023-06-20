# Pizza Parlor

#### **By Eva Kemp**

## Technologies Used

- HTML
- CSS
- JavaScript

## Description

This website will allow users to create a pizza. They can select their pizza size and toppings of choice, submit their order, and pay.

## Setup/Installation Requirements

- Clone the repository from GitHub by navigating to the main page of the repository.
- Above the list of files on the repository, click "Code".
- Then click "Download ZIP".
- After downloading, open the file.
- Navigate to "index.html". Then open the file in your browser of choice for viewing.

## Known Bugs

- None

## Tests

Describe: function pizza ()

Test: "It should create a pizza with the user inputs."
Code: pizza ("small, pepperoni, mushrooms")
Expected Output: Pizza {toppings: "pepperoni", "mushrooms", size: "small"}

Describe: function newPizza ()

Test: "It should allow users to choose toppings and size"
Code: newPizza ( )
Expected Output:

Describe: function getToppings ()

Test: "It should get the value of the toppings selected by a user and return what they have chosen"
Code: getToppings("tom", "mozz", "pepp")
Expected Output: "You ordered a pizza with tomato, mozzerella, and pepperoni."

Describe: function calculateOrderTotal()

Test: "It should calculate the total cost of a pizza based on the user's selections of size and toppings."
Code: calculateOrderTotal("size=small", "toppings=pepperoni")
Expected Output: Order total = $15.50

## License

MIT License

Copyright (c) _06/19/2023_ Eva Kemp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
