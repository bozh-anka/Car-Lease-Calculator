# Car-Lease-Calculator
Prime Holding Task 2 - Car Lease Calculator

Consists of three styles for the three separate aspects; Markup, Styling and Logic.

The markup utilizes element ID's for styling and form information fetching. Stylistically layout is dependent on the window view size, the media tag represents mobile layout. 
All window resizing will dynamically adjust the element sizes. 

Javascript logic is encased in a window on load function to prevent execution before the page loads. Information is then continuously fetched on input based on element IDs.
The on-input function called for each input action is identical, this is to ensure dynamic recalculation and result updates on screen.
The slide bar and numerical input values are synchronized within the markup tags with references to the other's value on input. 

The mathematical formula used for the lease calculation I learned (https://math.libretexts.org/Bookshelves/Applied_Mathematics/Contemporary_Mathematics_(OpenStax)/06%3A_Money_Management/6.12%3A__Buying_or_Leasing_a_Car)[ - this is a math textbook website.]

The task was solved by styling the markup first and then developing the logic through the console.
User input is regulated by the form input types and value validation that prevents the display of out-of-bounds calculations. The only two areas that allow out-of-bound input are the two number fields for Car Value and Down Payment, the misuse of each prints a specific "Invalid [blank]" message next to the Down Payment result section. 

The line that separates the input and output sections is a shadow border, a regular bottom border did not have the correct color and relative length.
