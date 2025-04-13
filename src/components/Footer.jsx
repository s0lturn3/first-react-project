function Footer() {
    return(
        <footer>
            <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
            <p>Follow us on:
                <a href="https://www.facebook.com">Facebook</a> |
                <a href="https://www.twitter.com">Twitter</a> |
                <a href="https://www.instagram.com">Instagram</a>
            </p>
        </footer>
    );
}

export default Footer;