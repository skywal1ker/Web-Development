console.log("Hello World!")

function getColor(colorName) {
    const name = colorName.toLowerCase();
    if (name === "red") { return 'FF3633'; } else if (name === "blue") { return '335AFF'; }
    console.log(getColor("red"))
}