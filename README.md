# Rewyred

## A modern, minimalist e-commerce platform for clothing, featuring a dynamic shopping cart and donation options.

## Table of Contents

*   [About Rewyred](#about-rewyred)
*   [Features](#features)
*   [Repository Structure](#repository-structure)
*   [Styling & Design](#styling--design)
*   [Technologies Used](#technologies-used)
*   [Usage](#usage)

---

### About Rewyred

Rewyred is presented as a tech-driven initiative, aiming to provide a seamless online shopping experience for clothing. The platform features a clean, dark-themed interface with vibrant accents and a focus on interactive product displays.

### Features

This repository showcases a multi-page e-commerce website with the following key features:

*   **Dynamic Clothing Catalog:** Browse various clothing items with interactive elements that expand to show details, color options, and size selections.
*   **Customizable Products:** Select different colors (Green, Yellow, Red, Blue, Black) and sizes (S, M, L, XL, XXL) for clothing items.
*   **Shopping Cart Functionality:** Add selected clothing items, including their chosen color and size, to a persistent shopping cart using `sessionStorage`.
*   **Checkout Page:** View all items currently in the cart, along with their image, color, size, and an automatically calculated total price.
*   **Donations Section:** A dedicated page for information regarding donations.
*   **Responsive Navigation:** A consistent navigation bar allows easy access to different sections of the site: Clothing, Donations, Checkout, and About.

### Repository Structure

The project is organized with clear separation of concerns:

*   **`index.html`**: The main landing page of the website.
*   **`about.html`**: Provides information about the Rewyred project.
*   **`clothing.html`**: Displays the clothing catalog, where users can browse and select items.
*   **`donations.html`**: A page dedicated to donations.
*   **`checkout.html`**: Shows the user's selected items and total price before purchase.
*   **`style.css`**: Contains global CSS styles, including layout utilities, typography, and the unique rainbow animated background.
*   **`clothing.css`**: Specific styles for the clothing catalog page.
*   **`checkout.css`**: Specific styles for the checkout page.
*   **`main.js`**: Handles the interactive behavior of clothing items on the `clothing.html` page, such as expanding/shrinking items and managing color/size selections.
*   **`checkout.js`**: Manages the shopping cart logic, including fetching items from `sessionStorage`, dynamically populating the checkout page, and calculating the total price.
*   **Images**: Assets like `IMG_7450.PNG`, `IMG_7451.PNG` (likely logos), and `shirt.JPG` are used throughout the site.

### Styling & Design

The website features a distinct visual style:

*   **Dark Mode Aesthetic:** Predominantly black backgrounds with white text create a sleek, modern look.
*   **Vibrant Background Animation:** A dynamic rainbow gradient background provides a striking visual effect.
*   **Custom Typography:** Uses the `"ReplitHack", monospace` font for a unique, code-like feel.
*   **Flexbox Layout:** Extensively uses CSS Flexbox (`.flex`, `.x1`, `.x3`, etc.) for responsive and organized content arrangement.
*   **Interactive Elements:** Hover effects, border styles (dotted, solid), and dynamic image filters enhance user interaction and visual feedback, particularly for clothing options.

### Technologies Used

*   **HTML5**: For structuring the web content.
*   **CSS3**: For styling and layout, including animations and flexbox.
*   **JavaScript**: For dynamic content, user interaction, and shopping cart logic using `sessionStorage`.

### Usage

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <repository-name>
    ```
3.  **Open `index.html`** in your preferred web browser.

You can then browse the clothing, add items to your cart, and proceed to checkout, experiencing the interactive features of the Rewyred platform.