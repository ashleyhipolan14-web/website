
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const schoolName = 'ACITE NATIONAL HIGH SCHOOL';

    const services = [
        {
            icon: '📊',
            title: 'Academic Records',
            text: 'Keep track of your learning progress.',
            color: 'from-blue-500 to-cyan-400',
        },
        {
            icon: '📅',
            title: 'Class Schedule',
            text: 'Stay organized throughout the school week.',
            color: 'from-violet-500 to-purple-400',
        },
        {
            icon: '🕒',
            title: 'Attendance',
            text: 'Build good habits, one day at a time.',
            color: 'from-emerald-500 to-teal-400',
        },
        {
            icon: '👤',
            title: 'Student Account',
            text: 'Manage your portal account details.',
            color: 'from-amber-500 to-orange-400',
        },
    ];

    const announcements = [
        {
            tag: 'SCHOOL LIFE',
            title: 'A New School Year Begins',
            text: 'Prepare for a new chapter filled with learning, friendship, and opportunities.',
            icon: '🎒',
            color: 'bg-blue-50',
        },
        {
            tag: 'ACADEMICS',
            title: 'Make Every Lesson Count',
            text: 'Stay connected with your teachers and keep up with your academic activities.',
            icon: '📚',
            color: 'bg-amber-50',
        },
        {
            tag: 'COMMUNITY',
            title: 'Growing Together',
            text: 'Be respectful, support your classmates, and take pride in your school.',
            icon: '🤝',
            color: 'bg-emerald-50',
        },
    ];

    const portalUrl = auth?.user
        ? route('dashboard')
        : route('login');

    return (
        <>
            <Head title="ACITE | School Portal" />

            <div className="min-h-screen overflow-hidden bg-white text-slate-800">
                {/* Navigation */}
                <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-2xl text-white shadow-lg shadow-blue-950/20">
                                🎓
                            </div>

                            <div>
                                <h1 className="text-sm font-black leading-tight tracking-wide text-blue-950 sm:text-base">
                                    ACITE NATIONAL
                                    <br />
                                    HIGH SCHOOL
                                </h1>
                                <p className="mt-1 text-[10px] font-bold tracking-[0.25em] text-blue-600">
                                    STUDENT PORTAL
                                </p>
                            </div>
                        </Link>

                        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
                            <a href="#home" className="text-blue-700">Home</a>
                            <a href="#services" className="transition hover:text-blue-700">Services</a>
                            <a href="#about" className="transition hover:text-blue-700">About</a>
                            <a href="#news" className="transition hover:text-blue-700">News</a>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-xl bg-blue-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                                >
                                    My Portal →
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-xl px-3 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50 sm:px-4"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="rounded-xl bg-blue-950 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800"
                                    >
                                        Join Us
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Hero */}
                <main>
                    <section id="home" className="relative isolate overflow-hidden bg-blue-950">
                        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
                        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />

                        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24 lg:px-8">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                                    Welcome to ACITE
                                </div>

                                <h2 className="mt-7 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                    Building Dreams.
                                    <span className="mt-2 block text-amber-400">
                                        Shaping Futures.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
                                    Discover a place where curiosity grows,
                                    potential is developed, and every learner
                                    can take a step toward a brighter future.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        href={portalUrl}
                                        className="rounded-xl bg-amber-400 px-6 py-4 font-extrabold text-blue-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-1 hover:bg-amber-300"
                                    >
                                        Enter Student Portal →
                                    </Link>

                                    <a
                                        href="#about"
                                        className="rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                                    >
                                        Discover ACITE
                                    </a>
                                </div>

                                <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
                                    <div>
                                        <p className="text-lg font-black text-white">Learn</p>
                                        <p className="mt-1 text-xs text-blue-200">With purpose</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-white">Grow</p>
                                        <p className="mt-1 text-xs text-blue-200">With confidence</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-white">Achieve</p>
                                        <p className="mt-1 text-xs text-blue-200">Your potential</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mx-auto w-full max-w-xl">
                                <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-cyan-400/20" />

                                <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                                        alt="Students celebrating their school journey"
                                        className="h-72 w-full rounded-[1.5rem] object-cover sm:h-96"
                                    />

                                    <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/95 p-5 shadow-xl">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                                            Our Belief
                                        </p>
                                        <p className="mt-2 text-lg font-extrabold text-blue-950 sm:text-xl">
                                            Every student has the power to make a difference.
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -right-3 -top-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-3xl shadow-xl sm:-right-5 sm:h-20 sm:w-20">
                                    ✨
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services */}
                    <section id="services" className="bg-slate-50 px-5 py-20 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                        Your digital campus
                                    </p>
                                    <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                                        Everything starts here.
                                    </h2>
                                </div>

                                <p className="max-w-md leading-7 text-slate-500">
                                    One convenient place to find your school
                                    information and student services.
                                </p>
                            </div>

                            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {services.map((service, index) => (
                                    <div
                                        key={service.title}
                                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10"
                                    >
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-2xl shadow-md`}>
                                            {service.icon}
                                        </div>

                                        <p className="mt-6 text-xs font-bold tracking-widest text-slate-400">
                                            SERVICE 0{index + 1}
                                        </p>

                                        <h3 className="mt-2 text-xl font-extrabold text-blue-950">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 min-h-14 text-sm leading-6 text-slate-500">
                                            {service.text}
                                        </p>

                                        <Link
                                            href={portalUrl}
                                            className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:gap-3"
                                        >
                                            Explore portal <span>→</span>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-5 text-xs text-slate-500">
                                Note: Grades, schedules, and attendance require
                                their own database features before they can display
                                real student records.
                            </p>
                        </div>
                    </section>

                    {/* About */}
                    <section id="about" className="px-5 py-20 lg:px-8">
                        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                            <div className="relative">
                                <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-blue-100" />
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                                    alt="Students learning together in a classroom"
                                    className="relative h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
                                />
                                <div className="absolute -bottom-5 right-5 rounded-2xl bg-amber-400 px-5 py-4 shadow-lg">
                                    <p className="text-lg font-black text-blue-950">
                                        Learn. Grow. Achieve.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 md:pt-0">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                    More than a classroom
                                </p>

                                <h2 className="mt-4 text-3xl font-black leading-tight text-blue-950 sm:text-4xl">
                                    Education that opens doors to opportunity.
                                </h2>

                                <p className="mt-6 leading-8 text-slate-600">
                                    {schoolName} is presented here as a community
                                    focused on learning, personal development,
                                    responsibility, and preparation for the future.
                                </p>

                                <div className="mt-7 space-y-4">
                                    {[
                                        'Encourage curiosity and creativity',
                                        'Develop responsibility and confidence',
                                        'Support a positive learning community',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                                                ✓
                                            </span>
                                            <p className="font-semibold text-slate-700">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={portalUrl}
                                    className="mt-8 inline-flex rounded-xl bg-blue-950 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
                                >
                                    Explore the Portal →
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Announcements */}
                    <section id="news" className="bg-blue-50/70 px-5 py-20 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="text-center">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                    From our community
                                </p>
                                <h2 className="mt-3 text-3xl font-black text-blue-950 sm:text-4xl">
                                    Campus Bulletin
                                </h2>
                                <p className="mt-4 text-slate-500">
                                    A place for school updates and reminders.
                                </p>
                            </div>

                            <div className="mt-10 grid gap-6 md:grid-cols-3">
                                {announcements.map((item) => (
                                    <article
                                        key={item.title}
                                        className="rounded-3xl border border-white bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-3xl`}>
                                            {item.icon}
                                        </div>

                                        <p className="mt-6 text-xs font-black tracking-[0.15em] text-blue-600">
                                            {item.tag}
                                        </p>

                                        <h3 className="mt-3 text-xl font-extrabold text-blue-950">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-500">
                                            {item.text}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            <p className="mt-6 text-center text-xs text-slate-500">
                                These are sample announcements. Replace them with
                                verified updates from your school.
                            </p>
                        </div>
                    </section>

                    {/* Call to action */}
                    <section className="px-5 py-16 lg:px-8">
                        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-950 px-6 py-12 text-center sm:px-12 sm:py-16">
                            <div className="absolute -left-20 -top-28 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
                            <div className="absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

                            <div className="relative">
                                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                                    Your journey begins here
                                </p>
                                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black text-white sm:text-4xl">
                                    Ready to take the next step?
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
                                    Sign in to your account and explore the
                                    student portal.
                                </p>

                                <Link
                                    href={portalUrl}
                                    className="mt-8 inline-flex rounded-xl bg-amber-400 px-7 py-4 font-extrabold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-amber-300"
                                >
                                    {auth?.user ? 'Open My Dashboard →' : 'Enter the Student Portal →'}
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-slate-950 px-5 py-10 text-slate-300 lg:px-8">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="font-black tracking-wide text-white">
                                {schoolName}
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                                Learn. Grow. Achieve.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 text-sm">
                            <a href="#home" className="transition hover:text-amber-400">Home</a>
                            <a href="#services" className="transition hover:text-amber-400">Services</a>
                            <a href="#about" className="transition hover:text-amber-400">About</a>
                            <a href="#news" className="transition hover:text-amber-400">News</a>
                        </div>

                        <p className="text-xs text-slate-500">
                            © {new Date().getFullYear()} ACITE School Portal
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
