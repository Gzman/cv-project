
function PersonalInfo({ categoryName, firstname, lastname, title, city, phoneNumber, email }) {
    return (
        <div className={`${categoryName}-content`}>
            <div className={`${categoryName}-fullname`}>
                <h2 className={`${categoryName}-title`}>{title}</h2>
                <div className={`${categoryName}-fullname`}>
                    <h2 className={`${categoryName}-firstname`}>{firstname}</h2>
                    <h2 className={`${categoryName}-lastname`}>{lastname}</h2>
                </div>
            </div>
            <div className={`${categoryName}-contact`}>
                <p className={`${categoryName}-city`}>{city}</p>
                <p className={`${categoryName}-phone`}>{phoneNumber}</p>
                <p className={`${categoryName}-email`}>{email}</p>
            </div>
        </div>
    )
}

export { PersonalInfo }