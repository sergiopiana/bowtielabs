import React from 'react';
import {
    Code2,
    ChevronRight,
    Smartphone,
    Globe,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalog = () => {
    return (
        <div className="section" style={{ paddingBottom: '160px' }}>
            <div className="container">
                <header style={{ marginBottom: '80px', borderBottom: '1px solid var(--border-light)', paddingBottom: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ marginBottom: '10px' }}>Component Catalog</h1>
                            <p>Design System & UI Components for BowTieLabs.</p>
                        </div>
                        <Link to="/" className="btn btn-primary">Back to Website</Link>
                    </div>
                </header>

                {/* --- Colors --- */}
                <section style={{ marginBottom: '80px' }}>
                    <h2 style={{ marginBottom: '40px' }}>01. Colors & Theme</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                        <ColorCard name="Background" variable="--bg-primary" />
                        <ColorCard name="Secondary BG" variable="--bg-secondary" />
                        <ColorCard name="Tertiary BG" variable="--bg-tertiary" />
                        <ColorCard name="Accent" variable="--accent" />
                        <ColorCard name="Foreground" variable="--fg-primary" />
                        <ColorCard name="Secondary FG" variable="--fg-secondary" />
                    </div>
                </section>

                {/* --- Typography --- */}
                <section style={{ marginBottom: '80px' }}>
                    <h2 style={{ marginBottom: '40px' }}>02. Typography</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', background: 'var(--bg-secondary)', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                        <div>
                            <p className="text-label" style={{ marginBottom: '10px' }}>Heading XL</p>
                            <h1 className="heading-xl">Engineering the Future.</h1>
                        </div>
                        <div>
                            <p className="text-label" style={{ marginBottom: '10px' }}>Heading 2</p>
                            <h2>What We Do.</h2>
                        </div>
                        <div>
                            <p className="text-label" style={{ marginBottom: '10px' }}>Heading 3</p>
                            <h3>Software Development</h3>
                        </div>
                        <div>
                            <p className="text-label" style={{ marginBottom: '10px' }}>Body / Text Base</p>
                            <p>This is the default body text. It's clean, readable, and uses the Outfit typeface.</p>
                        </div>
                    </div>
                </section>

                {/* --- Buttons --- */}
                <section style={{ marginBottom: '80px' }}>
                    <h2 style={{ marginBottom: '40px' }}>03. Buttons</h2>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'var(--bg-secondary)', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                        <button className="btn btn-primary">Primary Button</button>
                        <button className="btn btn-link">
                            Link Button <ChevronRight size={16} />
                        </button>
                    </div>
                </section>

                {/* --- Components --- */}
                <section style={{ marginBottom: '80px' }}>
                    <h2 style={{ marginBottom: '40px' }}>04. Reusable Components</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                        <div className="bento-card">
                            <div style={{ color: 'var(--accent)', marginBottom: 'var(--space-5)' }}><Code2 size={32} /></div>
                            <div>
                                <h3>Software Development</h3>
                                <p>Enterprise grade solutions with modern technology stacks.</p>
                            </div>
                        </div>
                        <div className="bento-card">
                            <div style={{ color: '#32d74b', marginBottom: 'var(--space-5)' }}><Smartphone size={32} /></div>
                            <div>
                                <h3>Mobile Apps</h3>
                                <p>High performance native experiences for iOS and Android.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const ColorCard = ({ name, variable }) => (
    <div style={{
        background: 'var(--bg-elevated)',
        padding: '15px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)'
    }}>
        <div style={{
            height: '80px',
            background: `var(${variable})`,
            borderRadius: 'var(--radius-sm)',
            marginBottom: '10px',
            border: '1px solid var(--border-light)'
        }} />
        <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: 'var(--fg-primary)' }}>{name}</p>
        <code style={{ fontSize: '12px', color: 'var(--fg-secondary)' }}>{variable}</code>
    </div>
);

export default Catalog;
