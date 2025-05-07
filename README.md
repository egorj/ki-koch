# KI Koch

KI Koch ist eine Single-Page-Application (SPA), die mit **React** und **Vite** entwickelt wurde. Über ein Inputfeld können Nutzer Zutaten eingeben, die sie zu Hause haben. Anschließend wird per **OpenAI Chat Completion API** ein kreatives und passendes Rezept generiert, das direkt auf diesen Zutaten basiert.

## Funktionen
- Eingabe einer Zutatenliste
- Anfrage an OpenAI Chat Completion API (Modell: `gpt-4o-mini`)
- Lade-Spinner während der Generierung
- Ausgabe des Rezepts formatiert in Markdown und angezeigt im Frontend

## Architektur
- **Frontend**: React + Vite, clientseitige SPA
- **API-Kommunikation**: fetch-Aufrufe an `https://api.openai.com/v1/chat/completions`
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: CSS 3

## Technologien
- React 19
- Vite
- JavaScript (ES6+)  
- CSS 3
- OpenAI Chat Completion API  

## Mögliche Erweiterungen
- **Backend-Proxy**: Backend-Endpoint oder Serverless Function zum Schutz des API-Schlüssels  
- **Verbesserte UI/UX**: Drag & Drop für Zutaten, mobile Layoutoptimierungen  
- **Erweiterte Nutzereingabe**: Nutzerprofile, Favoriten-Rezepte, Rezeptbewertung  
- **Lokalisierung**: Mehrsprachige Unterstützung
