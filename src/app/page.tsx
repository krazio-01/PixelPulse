'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
    Sparkles,
    Image as ImageIcon,
    Code,
    Key,
    LayoutGrid,
    HelpCircle,
    Shield,
} from 'lucide-react';

export default function Home() {
    const [prompt, setPrompt] = useState('');

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        console.log('Generating:', prompt);
    };

    return (
        <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50 selection:bg-zinc-800">
            <section className="mx-auto max-w-5xl px-4 pt-24 pb-20 text-center">
                <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                    Text-to-image generation built for developers.
                </h1>
                <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed font-normal text-zinc-400 sm:text-lg">
                    An open interface to generate and manage high-fidelity
                    assets using asynchronous model endpoints.
                </p>

                <Card className="mx-auto max-w-3xl rounded-xl border-zinc-800 bg-zinc-900/30 text-left shadow-2xl backdrop-blur-md">
                    <CardContent className="space-y-4 p-6">
                        <form onSubmit={handleGenerate} className="space-y-4">
                            <Textarea
                                placeholder="Describe the asset rules... (e.g., 'Minimalist vector illustration of an isometric database node, clean lines, dark theme')"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="min-h-[120px] w-full resize-none rounded-lg border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm leading-relaxed text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
                            />

                            <div className="flex items-center justify-between border-t border-zinc-900 pt-2">
                                <span className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                                    <ImageIcon className="h-3.5 w-3.5 text-zinc-600" />
                                    Default resolution: 1024x1024
                                </span>

                                <Button
                                    type="submit"
                                    disabled={!prompt.trim()}
                                    className="h-9 rounded-md bg-zinc-100 px-4 text-xs font-medium text-zinc-950 shadow transition-all hover:bg-zinc-200 disabled:opacity-30"
                                >
                                    <Sparkles className="mr-1.5 h-3.5 w-3.5 fill-current" />
                                    Generate Asset
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </section>

            <section className="border-t border-zinc-900 bg-zinc-900/10 py-24">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="mb-12">
                        <h2 className="mb-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
                            Specifications
                        </h2>
                        <p className="text-xl font-medium text-zinc-200">
                            Engineered for lightweight application workflows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="space-y-2">
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400">
                                <Code className="h-4 w-4" />
                            </div>
                            <h3 className="text-sm font-medium text-zinc-200">
                                Asynchronous Fetch Architecture
                            </h3>
                            <p className="text-xs leading-relaxed font-normal text-zinc-500">
                                Direct integration with low-latency media
                                servers bypasses local processing weight
                                entirely.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400">
                                <Key className="h-4 w-4" />
                            </div>
                            <h3 className="text-sm font-medium text-zinc-200">
                                Client-Side Authentication
                            </h3>
                            <p className="text-xs leading-relaxed font-normal text-zinc-500">
                                Decoupled API credential handlers ensure keys
                                remain encrypted and isolated from public client
                                bundles.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400">
                                <LayoutGrid className="h-4 w-4" />
                            </div>
                            <h3 className="text-sm font-medium text-zinc-200">
                                Bento Grid Cache Layout
                            </h3>
                            <p className="text-xs leading-relaxed font-normal text-zinc-500">
                                Local rendering feeds are dynamically structured
                                to prevent layout shifts during image state
                                changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-zinc-900 py-24">
                <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="mb-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
                            API Metrics
                        </h2>
                        <h3 className="mb-4 text-2xl font-semibold text-zinc-100">
                            Transparent resource tracking.
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed font-normal text-zinc-400">
                            Track your exact model operational metrics in
                            real-time. The application directly calculates asset
                            weight against remaining wallet token balances
                            automatically.
                        </p>
                        <div className="space-y-3 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2">
                                <Shield className="h-3.5 w-3.5 text-zinc-600" />
                                <span>
                                    Zero hidden usage tiers or passive
                                    expiration traps.
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <HelpCircle className="h-3.5 w-3.5 text-zinc-600" />
                                <span>
                                    Standard models draw accurately down to four
                                    decimal places.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs text-zinc-500">
                            <span>ENDPOINT SUITE</span>
                            <span className="text-emerald-500">
                                SYSTEM READY
                            </span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between rounded border border-zinc-900 bg-zinc-950 p-2.5 font-mono text-xs">
                                <span className="text-zinc-400">
                                    Image Generation / Standard
                                </span>
                                <span className="text-zinc-500">
                                    0.0000 Pollen
                                </span>
                            </div>
                            <div className="flex justify-between rounded border border-zinc-900 bg-zinc-950 p-2.5 font-mono text-xs">
                                <span className="text-zinc-400">
                                    Image Generation / Premium
                                </span>
                                <span className="text-zinc-500">
                                    Variable / Demand
                                </span>
                            </div>
                            <div className="flex justify-between rounded border border-zinc-900 bg-zinc-950 p-2.5 font-mono text-xs">
                                <span className="text-zinc-400">
                                    Model Response Cache Time
                                </span>
                                <span className="text-zinc-500">3600s TTL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-zinc-900 py-12 text-center font-mono text-xs text-zinc-600">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
                    <p>© 2026 PixelPulse. All systems operational.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-zinc-400">
                            Documentation
                        </span>
                        <span className="cursor-pointer hover:text-zinc-400">
                            Repository
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
