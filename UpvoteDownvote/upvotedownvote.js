"use strict";

document.addEventListener("DOMContentLoaded", () => {

    let upvoteButton = document.getElementById("btnUpvote");
    let downvoteButton = document.getElementById("btnDownvote")
    let upvoteCount = document.getElementById("numUpvotes"); // text displaying upvotes
    let downvoteCount = document.getElementById("numDownvotes"); // text displaying downvotes
    let totalScore = document.getElementById("totalScore"); // text displaying the score
    let numUpvotes = 0;
    let numDownvotes = 0;
    let score = 0;

    function addUpvote() {
        numUpvotes++;
        upvoteCount.textContent = `Upvotes: ${numUpvotes}`;
        score = numUpvotes - numDownvotes;
        totalScore.textContent = `Score: ${score}`;
    }

    function addDownvote() {
        numDownvotes++;
        downvoteCount.textContent = `Downvotes: ${numDownvotes}`;
        score = numUpvotes - numDownvotes;
        totalScore.textContent = `Score: ${score}`;
    }

    upvoteButton.addEventListener("click", addUpvote);
    downvoteButton.addEventListener("click", addDownvote);


});