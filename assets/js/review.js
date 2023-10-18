const url = "https://y2kcoders.stu.nighthawkcodingsociety.com/api/skatepark/";

// this function will send info to the db with the info from the form
async function post() {
    // variables from the form
    var name = document.getElementById('name');
    var skatepark_name = document.getElementById('skatename');
    var address = document.getElementById('address');
    var rating = document.getElementById('rating');
    var description = document.getElementById('Description');

    // check if form is filled out correctly
    // make a box red if it's not filled out
    if (name.value === "") {
        name.style.borderColor = "red";
        return;
    }
    if (skatepark_name.value === "") {
        skatepark_name.style.borderColor = "red";
        return;
    }
    if (address.value === "") {
        address.style.borderColor = "red";
        return;
    }
    if (rating.value === "" || isNaN(rating.value) || rating.value < 0 || rating.value > 10) {
        rating.style.borderColor = "red";
        return;
    }
    if (description.value === "") {
        description.style.borderColor = "red";
        return;
    }

    // send info
    


    // send person to the posts page
}