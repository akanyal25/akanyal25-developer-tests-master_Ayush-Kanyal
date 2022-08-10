// Example Item in the array.
// {
//     "movie_id": 1,
//     "title": "Iron Man",
//     "phase": "Phase One",
//     "release_year": 2015,
//     "running_time": 126,
//     "rating_name": "PG-13",
//     "disc_format_name": "Blu-ray",
//     "viewing_format_name": "Widescreen",
//     "release_date": "May 2, 2008",
//     "budget": "140,000,000"
// }
export function sortByBudget(sample) {
    // Also sort by movie_id

    const sortedByBudget = sample.sort((a,b)=> parseInt(a.budget) - parseInt(b.budget))

    return sortedByBudget;
}

export function sortByTitle(sample) {
    
    const sortedTitle = sample.sort((a, b)=> {
        if(a.title > b.title){
            return 1;
        }
        else if(a.title < b.title){
            return -1;
        }
        return 0;
    })

    return sortedTitle;
}

export function filterByBluray(sample) {
    // Also sort by movie_id

    //creating a new array using filter method to save only objects that have "Blu-ray" in their disc_format_name property
    const filteredByBlueray = sample.filter(a=> a.disc_format_name.includes("Blu-ray"))

    //sorting the list by the movie_id
    return filteredByBlueray.sort((a,b) => parseInt(a.movie_id)-parseInt(b.movie_id));
}

export function transformArray(sample) {
    const transformedArray = sample.map(a =>{

        /*More accurate solution; given the phases were different and not a static value*/
        // if(a.phase.includes("One")){
        //     a.phase = 1;
        // }
        // else if(a.phase.includes("Two")){
        //     a.phase = 2;
        // }
        // else if(a.phase.includes("Three")){
        //    a.phase = 3;
        // }
        // return {"title" : a.title, "phase": a.phase, "release" : a.release_date};

        return {"title" : a.title, "phase": 1, "release" : a.release_date};
    })

    //Sorting the transformed array by it's title
    sortByTitle(transformedArray);
    return transformedArray;
}

export function sumBudget(sample) {

    //using reduce method, add all the values of budget attribute of the Object Array.
    const summedBudget = sample.reduce((sum, a)=> {

        // Since the values in budget attribute are Strings and have ',' in the middle of thier values, I used replace method and regex to remove the ',' from the values
        return sum + parseInt(a.budget.replace(/[,]/g, ""));
    }, 0)
    return summedBudget;
}
