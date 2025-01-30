# Gamer Store Website Documentation

## Project Overview
This project is a **gaming store website** designed for users to browse, purchase, and manage their game collections. The site is built using **HTML and CSS** and includes multiple pages such as the home page, cart, login, wishlist, and contact page.

---

## Key Features
- **Home Page (`index.html`)**
  - Displays featured games and latest releases.
  - Styled using `stylesIndex.css`.

- **Shopping Cart (`carrinho.html`)**
  - Allows users to manage their selected games.
  - Styled using `stylesCarrinho.css`.

- **Wishlist (`lista-de-desejos.html`)**
  - Enables users to save games for future purchases.
  - Styled using `stylesListaDeDesejos.css`.

- **Login Page (`login.html`)**
  - Provides a login interface for users.
  - Styled using `stylesLogin.css` and additional styles in `stylesLogin/`.

- **Games Page (`games_page/games_page.html`)**
  - Showcases detailed information on available games.
  - Styled using `games_page/games_page.css`.

- **Contact Page (`contato.html`)**
  - Displays contact information for customer support.
  - Styled using `stylesContato.css`.

---

## Project Structure
```
GamerStore/
├── index.html             # Home page
├── carrinho.html          # Shopping cart
├── lista-de-desejos.html  # Wishlist
├── login.html             # Login page
├── contato.html           # Contact page
│
├── stylesIndex.css        # Styles for the home page
├── stylesCarrinho.css     # Styles for shopping cart
├── stylesListaDeDesejos.css # Styles for wishlist
├── stylesLogin.css        # Styles for login page
│
├── games_page/
│   ├── games_page.html    # Game details page
│   ├── games_page.css     # Styles for games page
│   ├── imagens/           # Images for games page
│
├── imagens/               # Game images
│
├── stylesLogin/           # Additional login page styles
│   ├── layout.css
│   ├── reset.css
│   ├── style.css
│   ├── utilities.css
│   ├── variables.css
```

---

## Requirements
- A web browser to view the site.
- A local or online web server (optional for testing dynamic features).

---

## Usage
1. Open `index.html` in a web browser to access the main page.
2. Navigate through the different pages using links on the site.
3. Use the shopping cart and wishlist functionalities to manage game selections.
4. Login through `login.html` to access user-specific features.

---

## Example Screenshot
A sample screenshot of the website can be placed here.

---

## Notes
- Ensure all CSS files are correctly linked in the HTML files for proper styling.
- Additional backend functionality (e.g., user authentication, game purchases) would require a server-side implementation.

---
