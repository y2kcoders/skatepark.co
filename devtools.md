---
layout: default
title: Review Page
permalink: devtools
---

<table>
    <tr>
        <th>Post Name</th>
        <th>Author</th>
        <th>Delete</th>
    </tr>
    <tbody id="result">
    </tbody>
</table>

<script>
    async function main() {
        const backendURL = 'https://y2kcoders.stu.nighthawkcodingsociety.com/api/skatepark/'; // Update the URL to match your backend API

        try {
            const response = await fetch(backendURL);
            if (response.ok) {
                const data = await response.json();
                const result = document.getElementById("result");

                data.forEach((post) => {
                    console.log(post);

                    const row = document.createElement("tr");
                    row.setAttribute("data-post-id", post.title); // Set the data-post-id attribute

                    const nameCell = document.createElement("td");
                    nameCell.textContent = post.title;

                    const authorCell = document.createElement("td");
                    authorCell.textContent = post.author;

                    const deleteCell = document.createElement("td");
                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", () => deletePost(post.title)); // You'll need to implement this function
                    deleteCell.appendChild(deleteButton);

                    row.appendChild(nameCell);
                    row.appendChild(authorCell);
                    row.appendChild(deleteCell);

                    result.appendChild(row);
                });
            } else {
                console.error("Failed to fetch data from the backend.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    async function deletePost(postName) {
    const DeleteURL = `https://y2kcoders.stu.nighthawkcodingsociety.com/api/skatepark/delete/${postName}`; // Update the URL to match your backend API

    try {
        const response = await fetch(DeleteURL, {
            method: "DELETE",
            cache: 'no-cache',
            credentials: 'include'
        });

        if (response.ok) {
            // If the DELETE request is successful, remove the corresponding row from the table.
            const row = document.querySelector(`[data-post-id="${postName}"]`);
            row.remove();
        } else {
            console.error("Failed to delete the post.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
    }

    // Call the main function to load the posts when the page loads.
    main();
</script>
