/* Booking.css
   - Fixes white sidebars by setting page background
   - Adds glassmorphism + interactive focus/hover effects
   - Mobile-first and responsive
*/

/* Make the page background full-bleed so there are no white sidebars */
html, body, #root {
  background: linear-gradient(180deg, #050505 0%, #000 100%);
  min-height: 100%;
  margin: 0;
  color: #fff;
}

/* Page container adjustments (keeps Bootstrap container centered) */
.container.py-5.bg-black {
  background: transparent; /* allow global background to show */
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

/* Form shell: glassmorphism */
.booking-form,
.bg-dark.p-4.rounded.shadow-lg {
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow:
    0 6px 18px rgba(0,0,0,0.65),
    inset 0 1px 0 rgba(255,255,255,0.02);
  backdrop-filter: blur(8px) saturate(120%);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  transition: transform .14s ease, box-shadow .14s ease, background .2s ease;
  overflow: hidden;
}

/* Slight hover lift on large screens */
@media (min-width: 992px) {
  .booking-form:hover {
    transform: translateY(-6px);
    box-shadow:
      0 28px 60px rgba(0,0,0,0.75),
      inset 0 1px 0 rgba(255,255,255,0.02);
  }
}

/* Two-column responsive grid for inputs */
.row-gap {
  display: grid;
  gap: .75rem;
}

/* mobile: stacked */
@media (max-width: 767.98px) {
  .row-gap {
    grid-template-columns: 1fr;
  }
}

/* tablet+ : two columns */
@media (min-width: 768px) {
  .row-gap {
    grid-template-columns: 1fr 1fr;
  }
}

/* Input / select / textarea base */
.booking-form .form-control,
.booking-form .form-select,
.bg-dark.p-4.rounded.shadow-lg .form-control,
.bg-dark.p-4.rounded.shadow-lg .form-select {
  background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(8,8,8,0.48)) !important;
  color: #f5f5f5 !important;
  border: 1px solid rgba(255,255,255,0.04);
  padding: 0.72rem 0.9rem;
  border-radius: 10px;
  font-size: 0.98rem;
  width: 100%;
  transition: transform .08s ease, box-shadow .14s ease, border-color .12s ease;
  -webkit-appearance: none;
  appearance: none;
}

/* Input focus: glow and raise */
.booking-form .form-control:focus,
.booking-form .form-select:focus,
.bg-dark.p-4.rounded.shadow-lg .form-control:focus,
.bg-dark.p-4.rounded.shadow-lg .form-select:focus {
  border-color: rgba(220,53,69,0.95);
  box-shadow: 0 12px 30px rgba(220,53,69,0.10);
  transform: translateY(-2px);
  outline: none;
}

/* Focus-visible for keyboard users */
.booking-form .form-control:focus-visible,
.booking-form .form-select:focus-visible {
  outline: 3px solid rgba(220,53,69,0.12);
  outline-offset: 3px;
}

/* Select dropdown arrow polish */
.booking-form .form-select {
  padding-right: 2.5rem;
  background-image:
    linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.04) 50%),
    linear-gradient(135deg, rgba(255,255,255,0.04) 50%, transparent 50%);
  background-position: calc(100% - 18px) calc(1.1em - 2px),
                     calc(100% - 13px) calc(1.1em - 2px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
}

/* Labels */
.booking-form .form-label,
.bg-dark.p-4.rounded.shadow-lg .form-label {
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 600;
  color: #eee;
  font-size: 0.95rem;
}

/* Placeholders */
.booking-form ::placeholder,
.bg-dark.p-4.rounded.shadow-lg ::placeholder {
  color: rgba(255,255,255,0.55);
}

/* Button with interactive effect and gloss */
.booking-form .btn-danger,
.bg-dark.p-4.rounded.shadow-lg .btn-danger {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ff4f4f 0%, #c81b1b 100%);
  border: none;
  color: #fff;
  padding: 0.62rem 1.05rem;
  border-radius: 12px;
  font-weight: 700;
  letter-spacing: .2px;
  box-shadow: 0 10px 30px rgba(200,40,40,0.14);
  transition: transform .12s ease, box-shadow .12s ease;
}

/* Button hover - lift and subtle shine */
.booking-form .btn-danger:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 50px rgba(200,40,40,0.18);
}

/* Shiny gloss pseudo-element */
.booking-form .btn-danger::after {
  content: "";
  position: absolute;
  top: -40%;
  left: -30%;
  width: 60%;
  height: 180%;
  background: linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02));
  transform: rotate(25deg);
  transition: transform .6s cubic-bezier(.2,.9,.2,1);
  pointer-events: none;
}

.booking-form .btn-danger:hover::after {
  transform: translateX(150%) rotate(25deg);
}

/* Small hint / note */
.booking-hint,
.booking-note {
  color: rgba(255,255,255,0.72);
  font-size: 0.92rem;
}

/* Alerts */
.alert {
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.alert-success {
  background: linear-gradient(90deg, rgba(40,167,69,0.08), rgba(40,167,69,0.03));
  color: #d9f7e0;
  border: 1px solid rgba(40,167,69,0.08);
}

.alert-danger {
  background: linear-gradient(90deg, rgba(220,53,69,0.06), rgba(220,53,69,0.02));
  color: #ffd7d9;
  border: 1px solid rgba(220,53,69,0.06);
}

/* invalid input */
.is-invalid {
  border-color: rgba(255,100,100,0.9) !important;
  box-shadow: 0 6px 18px rgba(255,100,100,0.04) !important;
}
.invalid-feedback {
  color: #ffbdbd;
  font-size: 0.88rem;
}

/* Responsive container width */
@media (min-width: 992px) {
  .container .booking-form {
    max-width: 820px;
    margin: 0 auto;
    padding: 1.2rem;
  }
}

/* Extra polish: animated heading accent */
h2.text-danger {
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
}
h2.text-danger::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 48%;
  background: linear-gradient(90deg,#ff4f4f,#c82020);
  border-radius: 3px;
  opacity: 0.95;
  transform-origin: left;
  transform: scaleX(1);
  transition: transform .28s ease;
}
.booking-form:hover + .booking-note,
.booking-form:focus-within + .booking-note {
  transform: translateY(-2px);
  transition: transform .18s ease;
}

/* minor layout spacing tweaks */
.booking-form .d-flex.justify-content-between {
  gap: 1rem;
  align-items: center;
}

/* ensure good line-height for inputs on small screens */
.booking-form .form-control { line-height: 1.4; }