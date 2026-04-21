document.addEventListener('alpine:init', () => {
    Alpine.data('contactForm', () => ({
        formData: { name: '', email: '', message: '' },
        loading: false,
        success: false,
        async submitForm() {
            this.loading = true;
            const target = (typeof _sys_config !== 'undefined') ? _sys_config.api_endpoint : '';

            if (!target) {
                console.error("LỖI: Chưa nạp được URL từ config.js!");
                alert("Cấu hình hệ thống chưa sẵn sàng.");
                this.loading = false;
                return;
            }

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