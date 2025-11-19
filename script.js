// Add to script.js - Enhanced Form Validation System

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.fields = {};
        this.init();
    }

    init() {
        if (!this.form) return;

        // Define validation rules for each field
        this.setupValidationRules();
        
        // Add event listeners
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.setupRealTimeValidation();
    }

    setupValidationRules() {
        this.fields = {
            name: {
                element: document.getElementById('name'),
                error: document.getElementById('nameError'),
                rules: ['required', 'minLength:2', 'maxLength:50']
            },
            email: {
                element: document.getElementById('email'),
                error: document.getElementById('emailError'),
                rules: ['required', 'email']
            },
            phone: {
                element: document.getElementById('phone'),
                error: document.getElementById('phoneError'),
                rules: ['phone']
            },
            subject: {
                element: document.getElementById('subject'),
                error: document.getElementById('subjectError'),
                rules: ['required']
            },
            message: {
                element: document.getElementById('message'),
                error: document.getElementById('messageError'),
                rules: ['required', 'minLength:10', 'maxLength:1000']
            }
        };
    }

    setupRealTimeValidation() {
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            field.element.addEventListener('blur', () => this.validateField(fieldName));
            field.element.addEventListener('input', () => this.clearFieldError(fieldName));
        });
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const value = field.element.value.trim();
        let isValid = true;
        let errorMessage = '';

        field.rules.forEach(rule => {
            if (!isValid) return;

            const [ruleName, ruleValue] = rule.split(':');
            
            switch (ruleName) {
                case 'required':
                    if (!value) {
                        isValid = false;
                        errorMessage = 'This field is required';
                    }
                    break;
                
                case 'minLength':
                    if (value.length < parseInt(ruleValue)) {
                        isValid = false;
                        errorMessage = `Must be at least ${ruleValue} characters`;
                    }
                    break;
                
                case 'maxLength':
                    if (value.length > parseInt(ruleValue)) {
                        isValid = false;
                        errorMessage = `Must be less than ${ruleValue} characters`;
                    }
                    break;
                
                case 'email':
                    if (value && !this.isValidEmail(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                
                case 'phone':
                    if (value && !this.isValidPhone(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid phone number';
                    }
                    break;
            }
        });

        this.displayFieldError(fieldName, isValid, errorMessage);
        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    displayFieldError(fieldName, isValid, message) {
        const field = this.fields[fieldName];
        
        if (isValid) {
            field.element.classList.remove('error');
            field.error.textContent = '';
            field.error.style.display = 'none';
        } else {
            field.element.classList.add('error');
            field.error.textContent = message;
            field.error.style.display = 'block';
        }
    }

    clearFieldError(fieldName) {
        const field = this.fields[fieldName];
        field.element.classList.remove('error');
        field.error.textContent = '';
        field.error.style.display = 'none';
    }

    validateAll() {
        let isValid = true;
        
        Object.keys(this.fields).forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const submitBtn = this.form.querySelector('#submitBtn');
        const originalText = submitBtn.textContent;
        
        if (!this.validateAll()) {
            this.showNotification('Please fix the errors before submitting.', 'error');
            return;
        }

        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            await this.submitForm();
        } catch (error) {
            this.showNotification('There was an error sending your message. Please try again.', 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    async submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Simulate AJAX request to server
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // In real implementation, this would be:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(data)
                // })
                
                // Simulate server response
                const success = Math.random() > 0.2; // 80% success rate for demo
                
                if (success) {
                    this.showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                    this.form.reset();
                    resolve();
                } else {
                    reject(new Error('Server error'));
                }
            }, 1500); // Simulate network delay
        });
    }

    showNotification(message, type = 'success') {
        // Use existing notification system or create new one
        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            border-radius: 4px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Initialize form validation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form validation
    const contactFormValidator = new FormValidator('contactForm');
    
    // Initialize newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!contactFormValidator.isValidEmail(email)) {
                contactFormValidator.showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // AJAX subscription
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';
            
            setTimeout(() => {
                contactFormValidator.showNotification('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1000);
        });
    }
});