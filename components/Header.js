const Header = () => (
    <footer className="bg-dark text-center text-white">
        <div className="container p-2">
            <h1>&copy; My Portfolio</h1>
            <p> 2000 - { new Date().getFullYear() }</p>
            <p>All rights reserved.</p>
        </div>
    </footer>
)

export default Header;