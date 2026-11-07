const snortleblatStats = {
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100
}

function renderCharacterCard() {
    document.getElementById('character-class').textContent = snortleblatStats.class;
    document.getElementById('character-level').textContent = snortleblatStats.level;
    document.getElementById('character-health').textContent = snortleblatStats.health;
}

renderCharacterCard();

document.getElementById('lvlup').addEventListener('click', function() {
    snortleblatStats.level++;
    renderCharacterCard();
})

document.getElementById('attack').addEventListener('click', function() {
    snortleblatStats.health -= 10;
    if (snortleblatStats.health < 0) {
        snortleblatStats.health = 0;
        alert('Character Died')
    }
    renderCharacterCard();
})