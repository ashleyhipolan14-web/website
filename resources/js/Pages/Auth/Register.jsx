
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        school_id: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    }

    const fieldClass =
        'w-full rounded-xl border border-violet-300/20 bg-[#1b1030] px-4 py-3.5 text-white outline-none transition placeholder:text-violet-200/30 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20';

    return (
        <>
            <Head title="Student Registration | ACITE" />

            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#10071f] px-4 py-12 text-white">
                <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-violet-700/30 blur-[100px]" />
                <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[100px]" />

                <div className="relative w-full max-w-2xl rounded-[2rem] border border-violet-300/20 bg-white/[0.04] p-6 shadow-2xl shadow-violet-950/50 backdrop-blur-xl sm:p-10">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/20 text-2xl">
                            🎓
                        </div>
                        <div>
                            <p className="text-sm font-black">ACITE NATIONAL</p>
                            <p className="text-xs tracking-[0.2em] text-violet-300">STUDENT PORTAL</p>
                        </div>
                    </Link>

                    <div className="mb-8 mt-9">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-300">
                            Become a member
                        </p>
                        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
                            Create your account.
                        </h1>
                        <p className="mt-3 leading-7 text-violet-100/60">
                            Register using your school details to create a
                            student portal account.
                        </p>
                    </div>

                    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="mb-2 block text-sm font-bold text-violet-100">
                                Full name
                            </label>
                            <input
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className={fieldClass}
                                placeholder="Enter your full name"
                                autoComplete="name"
                                required
                            />
                            {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="school_id" className="mb-2 block text-sm font-bold text-violet-100">
                                School ID
                            </label>
                            <input
                                id="school_id"
                                value={data.school_id}
                                onChange={(e) => setData('school_id', e.target.value)}
                                className={fieldClass}
                                placeholder="e.g. ACITE-2026-001"
                                autoComplete="username"
                                required
                            />
                            {errors.school_id && <p className="mt-2 text-sm text-rose-300">{errors.school_id}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-bold text-violet-100">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className={fieldClass}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                            {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-bold text-violet-100">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className={fieldClass}
                                placeholder="Create a password"
                                autoComplete="new-password"
                                required
                            />
                            {errors.password && <p className="mt-2 text-sm text-rose-300">{errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="password_confirmation" className="mb-2 block text-sm font-bold text-violet-100">
                                Confirm password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className={fieldClass}
                                placeholder="Repeat your password"
                                autoComplete="new-password"
                                required
                            />
                            {errors.password_confirmation && (
                                <p className="mt-2 text-sm text-rose-300">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        <div className="sm:col-span-2">
                            <p className="mb-5 rounded-xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100/80">
                                Use your own School ID and a password you
                                have not shared with anyone.
                            </p>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 font-extrabold shadow-lg shadow-violet-900/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-60"
                            >
                                {processing ? 'Creating account...' : 'Create Student Account →'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-7 text-center text-sm text-violet-100/60">
                        Already registered?
                        {' '}
                        <Link href={route('login')} className="font-extrabold text-violet-300 hover:text-white">
                            Sign in here
                        </Link>
                    </p>

                    <p className="mt-5 text-center text-xs text-violet-200/30">
                        © {new Date().getFullYear()} ACITE School Portal
                    </p>
                </div>
            </div>
        </>
    );
}
