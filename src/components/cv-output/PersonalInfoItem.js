import "../../style/cv-output/PersonalInformation.css"

function PersonalInfoItem({ categoryName, firstname, lastname, title, city, phoneNumber, email }) {
    return (
        <div className={`${categoryName}-content`}>
            <div className={`${categoryName}-header`}>
                {title && <h2 className={`${categoryName}-title`}>{title}</h2>}
                <div className={`${categoryName}-fullname`}>
                    <h2 className={`${categoryName}-firstname`}>{firstname}</h2>
                    <h2 className={`${categoryName}-lastname`}>{lastname}</h2>
                </div>
            </div>
            <div className={`${categoryName}-contact`}>
                <p className={`${categoryName}-label`}>Adress</p><p className={`${categoryName}-city`}>{city}</p>
                <p className={`${categoryName}-label`}>Phone Number</p><p className={`${categoryName}-phone`}>{phoneNumber}</p>
                <p className={`${categoryName}-label`}>Email</p><p className={`${categoryName}-email`}>{email}</p>
            </div>
        </div>
    )
}

export { PersonalInfoItem }