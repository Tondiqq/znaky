function generateTrojuhelRig(rows) {
    let trojuhel = "";
    for (let i = 0; i < rows; i++) {
        let spaces = " ".repeat(rows - i - 1);
        let stars = "*".repeat(2 * i + 1);
        trojuhel += spaces + stars + "\n";
    }
    return trojuhel.trim();
}