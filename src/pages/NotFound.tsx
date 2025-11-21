function NotFound() {
    const notFoundUrl = window.location.pathname;

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, no page exists at {notFoundUrl}</p>
        </div>
    )
}

export default NotFound