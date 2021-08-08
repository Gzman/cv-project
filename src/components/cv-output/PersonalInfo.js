
function PersonalInfo({ categoryName, firstname, lastname, title, phoneNumber, email }) {
    return (
        <div className={categoryName}>
            <div>
                <h2>{title}</h2>
                <h2>{firstname}</h2>
                <h2>{lastname}</h2>
            </div>
            <p>{phoneNumber}</p>
            <p>{email}</p>
        </div>
    )
}

export { PersonalInfo }