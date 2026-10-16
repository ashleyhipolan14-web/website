
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        school_id: '',
        password: '',
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    }

    return (
        <>
            <Head title="Student Login | ACITE" />

            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#10071f] px-4 py-12 text-white">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-700/30 blur-[100px]" />
                <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[100px]" />

                <Link href="/" className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/20 text-2xl">
                        🎓
                    </div>
                    <div>
                        <p className="text-sm font-black tracking-wide">ACITE NATIONAL</p>
                        <p className="text-xs tracking-[0.2em] text-violet-300">STUDENT PORTAL</p>
                    </div>
                </Link>

                <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-violet-300/20 bg-white/[0.04] shadow-2xl shadow-violet-950/50 backdrop-blur-xl md:grid-cols-2">
                    <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-800 via-violet-950 to-[#170b2b] p-10 md:flex">
                        <div className="absolute -right-16 top-20 h-64 w-64 rounded-full border border-violet-300/20" />
                        <div className="absolute -right-5 top-32 h-44 w-44 rounded-full border border-violet-300/20" />

                        <div className="relative">
                            <span className="rounded-full border border-violet-200/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
                                Your future starts here
                            </span>

                            <h1 className="mt-10 text-4xl font-black leading-tight">
                                Welcome back,
                                <span className="mt-2 block text-violet-300">
                                    future achiever.
                                </span>
                            </h1>

                            <p className="mt-5 leading-7 text-violet-100/70">
                                Sign in to your student account to access
                                the school portal and the services available
                                to you.
                            </p>
                        </div>

                        <div className="relative mt-12 rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm font-bold text-violet-200">
                                LEARN · GROW · ACHIEVE
                            </p>
                            <p className="mt-2 text-sm text-violet-100/60">
                                ACITE National High School
                            </p>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 md:p-12">
                        <div className="mb-8">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-300">
                                Student access
                            </p>
                            <h2 className="mt-3 text-3xl font-black">
                                Sign in
                            </h2>
                            <p className="mt-2 text-sm text-violet-100/60">
                                Use your registered School ID and password.
                            </p>
                        </div>

                        {status && (
                            <div className="mb-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label htmlFor="school_id" className="mb-2 block text-sm font-bold text-violet-100">
                                    School ID
                                </label>
                                <input
                                    id="school_id"
                                    type="text"
                                    autoComplete="username"
                                    value={data.school_id}
                                    onChange={(e) => setData('school_id', e.target.value)}
                                    placeholder="Enter your School ID"
                                    required
                                    autoFocus
                                    className="w-full rounded-xl border border-violet-300/20 bg-[#1b1030] px-4 py-4 text-white outline-none transition placeholder:text-violet-200/30 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                                />
                                {errors.school_id && (
                                    <p className="mt-2 text-sm text-rose-300">{errors.school_id}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-bold text-violet-100">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full rounded-xl border border-violet-300/20 bg-[#1b1030] px-4 py-4 text-white outline-none transition placeholder:text-violet-200/30 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-rose-300">{errors.password}</p>
                                )}
                            </div>

                            <label className="flex items-center gap-3 text-sm text-violet-100/70">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 rounded border-violet-300/30 bg-[#1b1030] accent-violet-500"
                                />
                                Remember me
                            </label>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 font-extrabold shadow-lg shadow-violet-900/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? 'Signing in...' : 'Enter Student Portal →'}
                            </button>
                        </form>

                        {canResetPassword && (
                            <div className="mt-5 text-center">
                                <Link href={route('password.request')} className="text-sm font-semibold text-violet-300 hover:text-white">
                                    Forgot your password?
                                </Link>
                            </div>
                        )}

                        <div className="my-7 border-t border-white/10" />

                        <p className="text-center text-sm text-violet-100/60">
                            New student?
                            {' '}
                            <Link href={route('register')} className="font-extrabold text-violet-300 hover:text-white">
                                Register with your School ID
                            </Link>
                        </p>

                        <p className="mt-6 text-center text-xs text-violet-200/30">
                            © {new Date().getFullYear()} ACITE School Portal
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
