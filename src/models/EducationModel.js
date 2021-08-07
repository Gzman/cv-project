
const EducationMeta = {
    FROM: "From (YYYY)",
    TO: "To (YYYY)",
    SCHOOL: "School",
    DEGREE: "Degree",
}

const EducationModel = (from = "", to = "", school = "", degree = "") => {
    const { FROM, TO, SCHOOL, DEGREE } = EducationMeta;
    return {
        [FROM]: from,
        [TO]: to,
        [SCHOOL]: school,
        [DEGREE]: degree,
    }
}

export { EducationMeta, EducationModel }