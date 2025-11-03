# 🚗 Carpool Frontend

Eine moderne, responsive Web-Anwendung für dezentrales Ride-Sharing mit Fokus auf Nachhaltigkeit, Kostenersparnis und Community-Building.

![Carpool Logo](public/ressources/carpool.png)

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Features](#features)
- [Technologie-Stack](#technologie-stack)
- [Projektstruktur](#projektstruktur)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [API-Integration](#api-integration)
- [Deployment](#deployment)
- [Entwicklung](#entwicklung)
- [Anforderungen](#anforderungen)
- [Mitwirken](#mitwirken)

---

## 🎯 Über das Projekt

Das **Carpool Frontend** ist eine benutzerfreundliche Webanwendung, die es Nutzern ermöglicht, Fahrgemeinschaften zu organisieren und zu nutzen. Das Projekt verfolgt drei Hauptziele:

- 🌱 **Nachhaltigkeit**: Reduzierung des CO2-Fußabdrucks durch geteilte Fahrten
- 💰 **Kostenersparnis**: Aufteilung der Fahrtkosten zwischen mehreren Personen
- 🤝 **Community**: Aufbau von sozialen Verbindungen und Netzwerken

### Projektvision

Eine dezentrale Ride-Sharing-Plattform, die Nutzer befähigt, selbstständig Fahrten anzubieten und zu finden, während gleichzeitig Umweltbewusstsein und Gemeinschaft gefördert werden.

---

## ✨ Features

### Authentifizierung & Nutzerverwaltung
- ✅ Benutzerregistrierung mit Validierung (Name, Mobilnummer, Passwort)
- ✅ Login-System mit JWT-Token-basierter Authentifizierung
- ✅ Sichere Passwort-Verwaltung mit Sichtbarkeits-Toggle
- ✅ Logout-Funktionalität mit Token-Invalidierung

### Fahrtenverwaltung
- ✅ Erstellen neuer Fahrten (Start, Ziel, Datum, Uhrzeit, Verfügbare Plätze)
- ✅ Anzeige von Fahrten-Listings in Tabellenformat
- 🚧 Fahrtensuche-Interface (in Entwicklung)
- 🚧 Matching von Fahrtanfragen (geplant)

### Benutzeroberfläche
- ✅ Moderne Landing Page mit Hero-Section
- ✅ Sidebar-Navigation mit Info-Karten
- ✅ Responsive Design für Mobile, Tablet und Desktop
- ✅ Schönes Toast/Alert-Benachrichtigungssystem
- ✅ Gradient-Design mit Purple/Blue Farbschema

### Benachrichtigungssystem
- ✅ Vier Alert-Typen: Success, Error, Warning, Info
- ✅ Auto-Dismiss mit konfigurierbarer Dauer
- ✅ Slide-in/out Animationen
- ✅ Detaillierte Fehlermeldungen

---

## 🛠 Technologie-Stack

### Frontend
| Technologie | Version | Verwendung |
|------------|---------|------------|
| **HTML5** | - | Semantisches Markup für alle Seiten |
| **CSS3** | - | Responsive Design, Animationen, Gradients |
| **Bootstrap** | minified | CSS-Baseline und Grid-System |
| **JavaScript** | ES5+ | Core-Logik und Interaktivität |
| **jQuery** | 3.6.0 | DOM-Manipulation und AJAX |

### Backend Integration
- **RESTful APIs** - Backend-Kommunikation
- **JWT** - Token-basierte Authentifizierung
- **AJAX** - Asynchrone Datenübertragung

### Deployment
- **PHP** - Apache-Webserver via Heroku
- **Heroku** - Cloud-Hosting
- **Cloud Foundry** - Alternative Deployment-Option

### Design-Patterns
- Mobile-First Responsive Design
- Component-based CSS Architecture
- Object-Oriented JavaScript (AlertManager Class)

---

## 📁 Projektstruktur

```
carpool-frontend/
├── public/                          # Öffentliche Frontend-Dateien
│   ├── index.html                  # Landing Page (Sidebar-Layout)
│   ├── Homepage.html               # Moderne Homepage mit Hero-Section
│   ├── Login.html                  # Benutzer-Login-Seite
│   ├── Register.html               # Benutzer-Registrierung
│   ├── Logout.html                 # Logout-Bestätigung
│   ├── Ride.html                   # Fahrten-Management
│   │
│   ├── css/                        # Stylesheets
│   │   ├── Index.css               # Landing-Page-Styles
│   │   ├── Homepage.css            # Homepage & Navbar-Styles
│   │   ├── Login-Register.css      # Formular-Styling
│   │   ├── Alerts.css              # Toast-Benachrichtigungen
│   │   ├── Carpool.css             # Zusätzliche Layout-Styles
│   │   └── bootstrap.min.css       # Bootstrap-Framework
│   │
│   ├── js/                         # JavaScript-Dateien
│   │   ├── alerts.js               # Alert/Toast-Benachrichtigungssystem
│   │   └── jquery-3.6.0.min.js     # jQuery-Bibliothek
│   │
│   └── ressources/                 # Bilder und Assets
│       ├── carpool.png             # Anwendungslogo
│       └── AppName.txt
│
├── Konzept/                        # Projekt-Dokumentation
│   ├── Produktvision              # Produktvisions-Statement
│   ├── Projektbeschreibung        # Detaillierte Projektbeschreibung
│   ├── Anforderungskatalog        # 32 Feature-Anforderungen
│   ├── API_Design_FGA_v01.docx    # API-Design-Dokumentation
│   └── Architekturdiagramm_FGA.drawio  # Architektur-Diagramm
│
├── Lernpfad                       # Lernpfad-Notizen
├── composer.json                  # PHP Composer-Konfiguration
├── index.php                      # PHP-Router (Redirect zu public/)
├── manifest.yml                   # Cloud Foundry Deployment
├── Procfile                       # Heroku Deployment
├── .gitignore                     # Git Ignore-Patterns
└── README.md                      # Diese Datei
```

---

## 🚀 Installation

### Voraussetzungen
- Webserver (Apache/Nginx) oder PHP Built-in Server
- PHP 7.4+ (für Deployment)
- Moderne Browser (Chrome, Firefox, Safari, Edge)
- Git

### Lokale Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/klrmax/carpool-frontend.git
   cd carpool-frontend
   ```

2. **Abhängigkeiten installieren**
   ```bash
   composer install
   ```
   *(Hinweis: Aktuell sind keine PHP-Abhängigkeiten definiert)*

3. **Development-Server starten**

   **Option A: PHP Built-in Server**
   ```bash
   php -S localhost:8000 -t public/
   ```

   **Option B: Mit index.php Router**
   ```bash
   php -S localhost:8000
   ```

4. **Anwendung öffnen**
   ```
   http://localhost:8000
   ```

### Konfiguration

Keine zusätzliche Konfiguration erforderlich. Die API-Endpunkte sind direkt in den HTML/JS-Dateien definiert:

- **BFF Backend**: `https://carpoolbff-c576f25b03e8.herokuapp.com`
- **SPA**: `https://carpool-spa-dc2811d7ff92.herokuapp.com`

---

## 📖 Verwendung

### Benutzer-Registrierung

1. Navigiere zu `Register.html`
2. Fülle das Registrierungsformular aus:
   - Name (Vorname Nachname)
   - Mobilnummer
   - Passwort (min. 8 Zeichen)
3. Klicke auf "Registrieren"
4. Bei Erfolg erscheint eine grüne Success-Benachrichtigung
5. Automatische Weiterleitung zum Dashboard

### Benutzer-Login

1. Navigiere zu `Login.html`
2. Gib deine Mobilnummer und Passwort ein
3. Klicke auf "Einloggen"
4. Bei erfolgreicher Authentifizierung wirst du zum Dashboard weitergeleitet
5. Dein JWT-Token wird automatisch gespeichert

### Fahrt erstellen

1. Nach dem Login navigiere zu `Ride.html`
2. Fülle das Formular aus:
   - Startort
   - Zielort
   - Datum der Fahrt
   - Uhrzeit
   - Verfügbare Sitzplätze
3. Klicke auf "Fahrt erstellen"
4. Die Fahrt wird im Backend gespeichert

### Fahrten anzeigen

- Die Fahrten-Übersicht ist über die SPA verfügbar
- Zugriff über: `https://carpool-spa-dc2811d7ff92.herokuapp.com/rides`
- Tabellarische Darstellung aller verfügbaren Fahrten

---

## 🔌 API-Integration

### Backend-Architektur

```
┌─────────────────────────────────────────┐
│     Carpool Frontend (Dieses Repo)       │
│  HTML/CSS/JavaScript + jQuery            │
└──────────────┬──────────────────────────┘
               │ AJAX Requests
               │
       ┌───────┴────────┬──────────────┐
       │                │              │
   ┌───▼─────┐  ┌──────▼────┐  ┌────▼────┐
   │   BFF   │  │    SPA    │  │Externe  │
   │ Heroku  │  │  Heroku   │  │  APIs   │
   └─────────┘  └───────────┘  └─────────┘
```

### API-Endpunkte

#### BFF (Backend for Frontend)
**Base URL**: `https://carpoolbff-c576f25b03e8.herokuapp.com`

##### Benutzer-Registrierung
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "Max Mustermann",
  "mobileNumber": "+491234567890",
  "password": "securePassword123"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user123",
    "name": "Max Mustermann",
    "mobileNumber": "+491234567890"
  }
}
```

##### Benutzer-Login
```http
POST /api/users/login
Content-Type: application/json

{
  "mobileNumber": "+491234567890",
  "password": "securePassword123"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user123",
    "name": "Max Mustermann"
  }
}
```

##### Benutzer-Logout
```http
POST /api/users/logout
Content-Type: application/json

{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

Response: 200 OK
{
  "message": "Logout successful"
}
```

##### Fahrt erstellen
```http
POST /ride
Content-Type: application/json

{
  "start": "Berlin",
  "destination": "Hamburg",
  "date": "2025-11-15",
  "time": "14:00",
  "availableSeats": 3
}

Response: 201 Created
{
  "rideId": "ride123",
  "message": "Ride created successfully"
}
```

#### SPA (Single Page Application)
**Base URL**: `https://carpool-spa-dc2811d7ff92.herokuapp.com`

- `/rides` - Fahrten-Listing
- `/dashboard` - Benutzer-Dashboard (nach Login)

### Authentifizierung

Die Anwendung verwendet **JWT (JSON Web Tokens)** für die Authentifizierung:

1. Nach erfolgreichem Login/Registrierung wird ein Token generiert
2. Token wird an die SPA als URL-Parameter übergeben
3. Token wird für alle nachfolgenden API-Requests verwendet
4. Token wird beim Logout invalidiert

---

## 🌐 Deployment

### Heroku Deployment (Aktuell)

Die Anwendung ist bereits auf Heroku deployed und läuft mit dem PHP Apache-Buildpack.

#### Deployment-Schritte

1. **Heroku CLI installieren**
   ```bash
   curl https://cli-assets.heroku.com/install.sh | sh
   ```

2. **Bei Heroku einloggen**
   ```bash
   heroku login
   ```

3. **Heroku App erstellen**
   ```bash
   heroku create carpool-frontend-app
   ```

4. **Deployment**
   ```bash
   git push heroku main
   ```

5. **App öffnen**
   ```bash
   heroku open
   ```

#### Wichtige Deployment-Dateien

**Procfile**
```
web: vendor/bin/heroku-php-apache2 public/
```

**composer.json**
```json
{
  "require": {},
  "autoload": {}
}
```

### Cloud Foundry Deployment

Alternativ kann die Anwendung auf Cloud Foundry deployed werden.

```bash
cf push
```

Die Konfiguration ist in `manifest.yml` definiert:

```yaml
applications:
- name: TasksFrontend
  instances: 1
  buildpacks: [php_buildpack]
  memory: 1G
```

---

## 💻 Entwicklung

### Code-Struktur

#### HTML-Seiten

Jede Seite ist eigenständig und folgt einem konsistenten Aufbau:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seiten-Titel</title>
    <link rel="stylesheet" href="css/[page-specific].css">
</head>
<body>
    <!-- Navbar -->
    <nav>...</nav>

    <!-- Hauptinhalt -->
    <main>...</main>

    <!-- Footer -->
    <footer>...</footer>

    <!-- Scripts -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/alerts.js"></script>
    <script>
        // Page-specific JavaScript
    </script>
</body>
</html>
```

#### CSS-Architektur

**Gemeinsame Styles:**
- Reset/Normalize
- Typography
- Layout-Container
- Responsive Breakpoints

**Component-Specific Styles:**
- Navbar-Komponenten
- Formulare
- Buttons & CTAs
- Cards & Info-Boxen
- Alerts/Toasts

**Responsive Breakpoints:**
```css
/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

#### JavaScript-Architektur

**AlertManager-Klasse** (`/public/js/alerts.js`)

```javascript
class AlertManager {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        // Initialisiert den Alert-Container
    }

    show(message, type = 'info', duration = 5000) {
        // Zeigt eine Benachrichtigung an
    }
}

// Globale Instanz
const alertManager = new AlertManager();
```

**Verwendung:**
```javascript
// Success-Benachrichtigung
alertManager.show('Login erfolgreich!', 'success');

// Error-Benachrichtigung
alertManager.show('Falsches Passwort', 'error');

// Warning-Benachrichtigung
alertManager.show('Bitte alle Felder ausfüllen', 'warning');

// Info-Benachrichtigung
alertManager.show('Willkommen zurück!', 'info');
```

### Neue Features hinzufügen

1. **Neue Seite erstellen**
   - HTML-Datei in `/public/` anlegen
   - CSS-Datei in `/public/css/` erstellen
   - Navigation in bestehenden Seiten aktualisieren

2. **Neue API-Integration**
   - AJAX-Call in der entsprechenden HTML-Seite hinzufügen
   - AlertManager für User-Feedback verwenden
   - Error-Handling implementieren

3. **Responsive Design**
   - Mobile-First-Ansatz verwenden
   - Media Queries für Breakpoints definieren
   - Touch-freundliche Interaktionselemente

### Debugging

**Browser DevTools:**
- Console für JavaScript-Fehler
- Network-Tab für API-Requests
- Elements-Tab für CSS-Debugging

**Häufige Probleme:**

| Problem | Lösung |
|---------|--------|
| CORS-Fehler | Backend muss CORS-Header senden |
| 500-Fehler bei Login | AlertManager wartet auf DOM-Ready |
| Alerts werden nicht angezeigt | `alerts.js` muss vor Custom-Scripts geladen werden |
| Token nicht gespeichert | LocalStorage-Permissions prüfen |

---

## 📋 Anforderungen

Das Projekt erfüllt die folgenden funktionalen Anforderungen (siehe `Konzept/Anforderungskatalog`):

### ✅ Implementiert

- **FGA-FKT-1, 2, 3**: Benutzerregistrierung mit Validierung
- **FGA-FKT-4, 5, 6, 7**: Login-System mit Authentifizierung
- **FGA-FKT-8, 9**: Homepage mit Navigation
- **FGA-FKT-10, 11**: Fahrt-Erstellung
- **FGA-FKT-14**: User-Feedback-Benachrichtigungen
- **FGA-FKT-29, 30, 31**: Logout-Funktionalität

### 🚧 In Entwicklung

- **FGA-FKT-15, 16**: Fahrtensuche
- **FGA-FKT-28**: Dashboard-Integration
- **FGA-FKT-24-27**: Fahrtanfragen-Matching
- **FGA-FKT-18, 20**: Deutsche Bahn API-Integration
- **FGA-FKT-21, 22**: Karten-Visualisierung

### 32 Features insgesamt
Vollständige Liste siehe: `Konzept/Anforderungskatalog`

---

## 🎨 Design-System

### Farbpalette

```css
/* Primary Colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--primary-purple: #667eea;
--primary-blue: #764ba2;

/* Semantic Colors */
--success: #28a745;
--error: #dc3545;
--warning: #ffc107;
--info: #17a2b8;

/* Neutral Colors */
--white: #ffffff;
--light-gray: #f8f9fa;
--dark-gray: #333333;
--text-gray: #666666;
```

### Typografie

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Headings */
h1 { font-size: 2.5rem; font-weight: 700; }
h2 { font-size: 2rem; font-weight: 600; }
h3 { font-size: 1.5rem; font-weight: 600; }

/* Body */
body { font-size: 16px; line-height: 1.6; }
```

### Spacing

```css
/* Margins & Paddings */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
```

### Components

**Buttons:**
```css
.btn {
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

**Cards:**
```css
.info-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
}
```

---

## 🤝 Mitwirken

Beiträge sind willkommen! Bitte beachte die folgenden Richtlinien:

### Contribution-Workflow

1. **Fork das Repository**
   ```bash
   git clone https://github.com/dein-username/carpool-frontend.git
   ```

2. **Feature-Branch erstellen**
   ```bash
   git checkout -b feature/neue-funktion
   ```

3. **Änderungen committen**
   ```bash
   git add .
   git commit -m "Add: Neue Funktion hinzugefügt"
   ```

4. **Branch pushen**
   ```bash
   git push origin feature/neue-funktion
   ```

5. **Pull Request erstellen**
   - Öffne einen PR auf GitHub
   - Beschreibe deine Änderungen
   - Warte auf Code-Review

### Commit-Konventionen

```
Add: Neue Funktionalität
Fix: Bugfix
Update: Bestehende Funktion aktualisiert
Refactor: Code-Umstrukturierung
Docs: Dokumentation
Style: CSS/Design-Änderungen
```

### Code-Style

**HTML:**
- 2 Spaces Einrückung
- Semantische HTML5-Tags verwenden
- Alt-Attribute für Bilder

**CSS:**
- 2 Spaces Einrückung
- BEM-Naming-Convention bevorzugt
- Mobile-First Media Queries

**JavaScript:**
- 2 Spaces Einrückung
- Semikolons verwenden
- Aussagekräftige Variablennamen
- Kommentare für komplexe Logik

---

## 📄 Lizenz

Dieses Projekt ist Teil eines Lernprojekts. Für kommerzielle Nutzung bitte Kontakt aufnehmen.

---

## 👥 Team & Kontakt

**Entwickelt von:** [Dein Name/Team]

**Repository:** https://github.com/klrmax/carpool-frontend

**Issues:** Bitte Issues auf GitHub melden

---

## 📚 Weitere Dokumentation

- **Produktvision:** `Konzept/Produktvision`
- **Projektbeschreibung:** `Konzept/Projektbeschreibung`
- **Anforderungskatalog:** `Konzept/Anforderungskatalog`
- **API-Design:** `Konzept/API_Design_FGA_v01.docx`
- **Architektur-Diagramm:** `Konzept/Architekturdiagramm_FGA.drawio`

---

## 🔄 Changelog

### [Aktuell] - 2025-11
- ✨ Add: Beautiful Alert/Toast-Benachrichtigungssystem
- 🐛 Fix: Robuste AlertManager-Initialisierung mit DOMContentLoaded
- 🐛 Fix: 500-Error-Handling für Registrierung verbessert
- 🎨 Update: Index.html Redesign mit Sidebar-Layout
- 🎨 Update: Homepage mit moderner Navbar redesigned
- 🔗 Update: Links zeigen jetzt auf SPA statt MPA

---

## 🙏 Danksagungen

- Bootstrap für das CSS-Framework
- jQuery für vereinfachtes DOM-Handling
- Heroku für kostenloses Hosting
- Alle Contributors und Tester

---

## ⚡ Quick Start

```bash
# Repository klonen
git clone https://github.com/klrmax/carpool-frontend.git

# In Verzeichnis wechseln
cd carpool-frontend

# Server starten
php -S localhost:8000 -t public/

# Browser öffnen
open http://localhost:8000
```

---

**Happy Carpooling! 🚗💨**
