export const englishToGermanMap = {
    'Hello': 'Hallo',
    'Log in': 'Einloggen',
    'Password': 'Passwort',
    'Email address': 'E-Mail-Addresse',
    'Log out': 'Ausloggen',
    'Let\'s play': 'Lass uns spielen', 
    'Create a new game': 'Erstelle ein neues Spiel',
    'Join existing game': 'Trete einem bestehenden Spiel bei',
    'Join': 'Beitreten',
    'Loading...': 'Wird geladen...',
    'Rotate your device': 'Drehen Sie Ihr Gerät',
    'Turn your device to landscape mode to see the game': 'Schalten Sie Ihr Gerät in den Querformatmodus, um das Spiel zu sehen',
    'Do not get angry!': 'Mensch ärgere Dich nicht!',
    'Move failed. Please try again.': 'Zug nicht möglich. Bitte nochmal versuchen.',
    'An error occurred saving the game state.': 'Es gab einen Fehler beim Speichern des Spielstands.',
};

export const getString = (englishString, language) => {
    if (language === 'en') {
        return englishString;
    }

    return englishToGermanMap[englishString] || englishString;
};
