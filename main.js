const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let rightPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.right = rightPosition + "px";
    cursor.style.top = topPosition + "px";
})