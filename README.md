# Zadatak 1
Zadatak je implementiran koristeći Cypress.io framework.
Da bi se test pokrenuo potrebno je imati instaliran `node.js` koji se može preuzeti na linku: https://nodejs.org/en/
Nakon instaliranja node-a, potrebno je clonirati Git repozitorij sa linka: https://github.com/nixpix/intis-zadatak-cypress

Potrebno je u nekoj komandnoj liniji, da li bio cmd, powershell za windowse ili terminal za linux pokrenuti `npm install` u istoj razini kao i `package.json` datoteka, kako bi se instalirali svi dependenciji.

Nakon instalacije, moguće je pokrenuti test na nekoliko načina:

 - headless  - naredba: `npm run test-headless` za izvođenje testa bez vidljivog browsera
 - headed - naredba: `npm run test` za izvođenje testa sa vidljivim browserom
Reporti će biti generirani i spremljeni u folder: `\intis-zadatak-cypress\mochawesome-report` u obliku HTML-a.

**Naomena: unutar repozitorija postoji i video uputa i demonstracija izvršavanja testa**
https://github.com/nixpix/intis-zadatak-cypress/raw/main/01%20-%20Setup%20and%20run%20headed%20mode.mp4
https://github.com/nixpix/intis-zadatak-cypress/raw/main/02%20-%20Run%20headless%20mode.mp4

## Info o repozitoriju.
Test je implementiran koristeći Page Object Model pattern. 
Tako da su svi selektoru/lokatori spremljeni u zasebne klase koje se onda pozivaju u testu. Na taj način se omogućuje maksimalni reusability tih funkcija i olakšava održavanje, jer je kod promjene selektora to isto potrebno promijeniti samo na jednom mjestu.

POM klase se nalaze na putanji: `intis-zadatak-cypress\cypress\support\PageObjects`
Sami test se nalazi u folderu: `intis-zadatak-cypress\cypress\integration`


# Zadatak 2

Postoji više odgovora na pitanje.

 1. Ako govorimo striktno semantički, onda je moguće oduzeti 10 od broja 100 samo jedan put. Nakon što se jednom oduzme, više nije broj 100 već 90, tako da bi oduzimali od 90 a ne od 100.
 2. Također semantički, moguće je oduzeti beskonačni broj puta. Jer nije specificirano da će se broj 100 umanjiti. Dakle moguće je oduzeti beskonačno puta 100-10.
 3. Ako govorimo u kontekstu čiste matematike, broj 10 od broja 100 možemo oduzimati neograničen broj puta. A ako nam je 0 krajnja točka onda je moguće oduzeti 10 puta.
 4. Ako govorimo u kontekstu programiranja i matematičkih operacija koje se izvode na računalima onda je odgovor drugačiji. Broj se može oduzimati dok se ne dosegne veličina registra odnosno memorijske lokacije koja je rezervirana za reprezentaciju rezultata. Koliko točno puta se može oduzeti zato ovisi o jeziku i njegovoj implementaciji koja se koristi. Starije verzije i implementacije programskih jezika su imali ograničen broj byteova u koje su spremale vrijednosti. Primjerice int je standardno implementiran sa 4 byte. No, novije verzije istih programskih jezika dinamično rješavaju taj problem, povećavajući (castajući) memorijsku lokaciju u kojoj se čuva vrijednost ako se dosegne limit. Na taj način primjerice python nema ograničenja minimalnog ili maksimalnog broja. Broj će jedino ovisiti o količini dostupne memorije jer će python dinamično alocirati svu dostupnu memoriju.
 5. Što se tiče broja 214748364 douzimanja. Broj -2147483648 je minimalni broj koji je moguće spremiti u integer u 32 bitnoj verziji pythona. A odnosi se i na druge jezike koji koriste isti broj bitova (32bita) za spremanje integera. taj broj podijeljen sa 10 daje broj iz zadatka: 214748364, što znači da je moguće toliko puta oduzeti broj 10, a nakon toga će se vrijednost zapravo preliti na pozitivne vrijednosti, krenuvši od maksimalne vrijednosti koju je moguće spremiti u 32bitni integer