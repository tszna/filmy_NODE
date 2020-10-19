# filmy_NODE
Jest to aplikacja wyświetlająca listę filmów, inspirowana tym co można znaleźć na stronie filmweb. Aplikacja jest kopią innej mojej aplikacji, tzn. filmy_php, z kilkoma zmianami. Projekt został opracowany przy wykorzystaniu node.js, silnika szablonów ejs, javascriptu oraz css. Baza danych opiera się na MongoDB. Aplikacja pobiera z bazy danych tylko te filmy, które maja być wyświetlone na widoku. Pobieranie filmów odbywa się w sposób asynchroniczny, przy użyciu technologii Ajax.
<h4>Projekt posiada następujące moduły:</h4>
<ul>
<li>wyświetlanie listy filmów</li>
<li>rejestrację i logowanie</li>
<li>nadawanie uprawnień do wyświetlenia filtrów filmów</li>
<li>filtrowanie listy filmów według roku wydania, tytułu, reżysera, kategorii np. fantasy, dramat</li>
<li>moduł odpowiedzialny za zalogowanie użytkownika od razu po rejestracji</li>
</ul>

<h4>Instalacja projektu</h4>
Po pobraniu projektu należy wpisać w terminalu komendę:
<pre><code>npm install</code></pre>
następnie:
<pre><code>npm run start</code></pre>
Baza danych działa na zewnętrznym serwerze w oparciu o MongoDB Atlas.
Strona główna aplikacji jest dostępna domyślnie na porcie 3000.
