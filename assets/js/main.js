document.addEventListener('alpine:init', () => {
    Alpine.data('contactForm', () => ({
        formData: { name: '', email: '', message: '' },
        loading: false,
        success: false,
        async submitForm() {
            this.loading = true;
            const target = _sys_config.api_endpoint;
            try {
                const p = new URLSearchParams();
                p.append('name', this.formData.name);
                p.append('email', this.formData.email);
                p.append('message', this.formData.message);
                await fetch(target, {
                    method: 'POST',
                    body: p,
                    mode: 'no-cors'
                });
                this.success = true;
                this.formData = { name: '', email: '', message: '' };
            } catch (e) {
                console.error(e);
                alert('Connection error.');
            } finally {
                this.loading = false;
                setTimeout(() => this.success = false, 5000);
            }
        }
    }));
});