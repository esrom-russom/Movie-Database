
function formatReleaseDate(date){
    //go from 2023-12-11 => December 11, 2024
    const dateObj = new Date(date);
    return dateObj.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}
function formatRating(rating){
    return rating.toFixed(1);
}
export {formatReleaseDate, formatRating};''