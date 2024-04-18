
function show() {
    // Variabler og typer: 
    // Deklarerer variablerne 'elements' og 'classes' ved hjælp af let, hvilket giver dem blok-scope.
    // 'elements' er en NodeList af HTML-elementer, der matcher selectorerne '.hamburger' eller '.navigation'.
    // 'classes' er et array, der indeholder to klassenavne, 'open' og 'active'.
    let elements = document.querySelectorAll('.hamburger, .navigation');
    let classes = ['open', 'active'];

    // Control Structure (Loops):
    // Bruger en forEach-løkke til at gennemgå alle elementer i 'elements'.
    elements.forEach(function(element) {
        // Bruger en indre forEach-løkke til at gennemgå hvert klassenavn i 'classes'.
        classes.forEach(function(className) {
            // Control structure (if-else):
            // Kontrollerer, om det aktuelle element allerede har klassen 'open' eller 'active'.
            if (element.classList.contains(className)) {
                // Hvis klassen allerede er til stede, fjernes den fra elementet.
                element.classList.remove(className);
            } else {
                // Ellers tilføjes klassen til elementet.
                element.classList.add(className);
            }
        });
    });
}