export const formatDoctorName = (name) => {
    return name.replace(/\((.*?)\)/, (match, qualification) => {
        return `(${qualification.length > 5
            ? qualification.substring(0, 3) + "..."
            : qualification})`;
    });
};