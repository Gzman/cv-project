function Category({ title, children }) {
    return (
        <div className="output-category">
            {title && <h2 className="output-category-title">{title}</h2>}
            <div className="output-category-items">
                {children}
            </div>
        </div>
    )
}

export { Category }