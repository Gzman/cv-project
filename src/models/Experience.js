
const ExperienceMeta = {
    FROM: "From (YYYY)",
    TO: "TO (YYYY)",
    COMPANY: "Company",
    POSITION: "Position",
    DESCRIPTION: "Description",
}

const Experience = (from = "", to = "", company = "", position = "", description = "") => {
    const { FROM, TO, COMPANY, POSITION, DESCRIPTION } = ExperienceMeta;
    return {
        [FROM]: from,
        [TO]: to,
        [COMPANY]: company,
        [POSITION]: position,
        [DESCRIPTION]: description,
    }
}

export { ExperienceMeta, Experience }