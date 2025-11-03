/**
 * Alert/Toast Notification System
 * Schöne und benutzerfreundliche Benachrichtigungen
 */

class AlertManager {
    constructor() {
        this.container = null;
        // Container später initialisieren, wenn DOM bereit ist
        this.initContainer();
    }

    initContainer() {
        // Warte bis body vorhanden ist
        const initWithDelay = () => {
            if (!document.body) {
                setTimeout(initWithDelay, 100);
                return;
            }

            // Erstelle den Alert-Container, falls nicht vorhanden
            if (!document.querySelector('.alert-container')) {
                this.container = document.createElement('div');
                this.container.className = 'alert-container';
                document.body.appendChild(this.container);
            } else {
                this.container = document.querySelector('.alert-container');
            }
        };

        // Wenn DOM bereits ready, direkt initialisieren
        if (document.body) {
            initWithDelay();
        } else {
            // Sonst warten
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initWithDelay);
            } else {
                initWithDelay();
            }
        }
    }

    /**
     * Stelle sicher dass Container vorhanden ist
     */
    ensureContainer() {
        if (!this.container) {
            if (!document.querySelector('.alert-container')) {
                this.container = document.createElement('div');
                this.container.className = 'alert-container';
                document.body.appendChild(this.container);
            } else {
                this.container = document.querySelector('.alert-container');
            }
        }
    }

    /**
     * Zeige einen Alert
     * @param {string} type - 'success', 'error', 'warning', 'info'
     * @param {string} title - Titel des Alerts
     * @param {string} message - Nachricht des Alerts
     * @param {number} duration - Wie lange der Alert angezeigt wird (ms), 0 = unbegrenzt
     */
    show(type = 'info', title = '', message = '', duration = 5000) {
        this.ensureContainer();

        const alertId = 'alert-' + Date.now();
        
        const alert = document.createElement('div');
        alert.id = alertId;
        alert.className = `alert alert-${type}`;
        
        // Icon basierend auf Typ
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        alert.innerHTML = `
            <div class="alert-icon">${icons[type] || icons.info}</div>
            <div class="alert-content">
                ${title ? `<div class="alert-title">${title}</div>` : ''}
                ${message ? `<div class="alert-message">${message}</div>` : ''}
            </div>
            <button class="alert-close" aria-label="Close alert">✕</button>
        `;

        this.container.appendChild(alert);

        // Close Button
        alert.querySelector('.alert-close').addEventListener('click', () => {
            this.remove(alertId);
        });

        // Auto-remove nach duration
        if (duration > 0) {
            setTimeout(() => {
                this.remove(alertId);
            }, duration);
        }

        return alertId;
    }

    /**
     * Entferne einen Alert
     */
    remove(alertId) {
        const alert = document.getElementById(alertId);
        if (alert) {
            alert.classList.add('removing');
            setTimeout(() => {
                alert.remove();
            }, 300);
        }
    }

    /**
     * Schnelle Methoden
     */
    success(title, message = '', duration = 5000) {
        return this.show('success', title, message, duration);
    }

    error(title, message = '', duration = 5000) {
        return this.show('error', title, message, duration);
    }

    warning(title, message = '', duration = 5000) {
        return this.show('warning', title, message, duration);
    }

    info(title, message = '', duration = 5000) {
        return this.show('info', title, message, duration);
    }
}

// Globale Instanz erstellen - warte bis DOM bereit ist
let alerts;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        alerts = new AlertManager();
    });
} else {
    alerts = new AlertManager();
}
