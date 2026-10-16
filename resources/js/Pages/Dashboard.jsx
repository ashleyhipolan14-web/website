
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const announcements = [
        {
            icon: '📢',
            category: 'SCHOOL NEWS',
            title: 'Welcome to the School Portal',
            description:
                'Check this page regularly for school information and important updates.',
            date: 'School Update',
        },
        {
            icon: '📝',
            category: 'ACADEMIC',
            title: 'Academic Records',
            description:
                'Your grades and academic records can be displayed here when connected to the database.',
            date: 'Student Information',
        },
        {
            icon: '📅',
            category: 'REMINDER',
            title: 'Class Schedule',
            description:
                'Check with your teachers for your official class schedule and room assignments.',
            date: 'Class Reminder',
        },
    ];

    const quickLinks = [
        {
            icon: '📚',
            title: 'My Grades',
            description: 'View academic performance',
        },
        {
            icon: '📅',
            title: 'Class Schedule',
            description: 'Check classes and subjects',
        },
        {
            icon: '🗓️',
            title: 'Attendance',
            description: 'Review attendance records',
        },
        {
            icon: '👤',
            title: 'My Profile',
            description: 'View account information',
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <p className="text-sm font-medium text-blue-700">
                        STUDENT PORTAL
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                        Dashboard
                    </h2>
                </div>
            }
        >
            <Head title="School Portal Dashboard" />

            <div className="min-h-screen bg-slate-50 py-8">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    {/* Welcome Banner */}
                    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-800 p-8 shadow-lg md:p-10">
                        <div className="relative z-10 max-w-3xl">
                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                                🎓 School Portal
                            </span>

                            <h1 className="mt-6 text-3xl font-extrabold text-white md:text-4xl">
                                Welcome back, {user?.name || 'Student'}!
                            </h1>

                            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                                Welcome to your school dashboard. Access your
                                student information, academic resources, and
                                important school announcements in one place.
                            </p>

                            <p className="mt-5 text-sm text-blue-200">
                                Have a great day of learning!
                            </p>
                        </div>

                        <div className="absolute -right-8 -top-10 text-[180px] opacity-10">
                            🎓
                        </div>
                    </section>

                    {/* Account Summary */}
                    <section>
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-slate-900">
                                Account Overview
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Your school portal account at a glance.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                        👤
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Account Name
                                        </p>
                                        <p className="mt-1 font-bold text-slate-900">
                                            {user?.name || 'Student'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                                        ✉️
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-slate-500">
                                            Email Address
                                        </p>
                                        <p className="mt-1 break-all font-bold text-slate-900">
                                            {user?.email || 'No email available'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                                        ✅
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Account Status
                                        </p>
                                        <p className="mt-1 font-bold text-emerald-700">
                                            Logged In
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Access */}
                    <section>
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-slate-900">
                                Quick Access
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Your frequently used school services.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {quickLinks.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-4 font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {item.description}
                                    </p>

                                    <span className="mt-4 inline-block text-sm font-semibold text-blue-700">
                                        Coming soon
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Announcements */}
                    <section>
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">
                                    School Announcements
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Important information for students.
                                </p>
                            </div>

                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                                Latest Updates
                            </span>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-3">
                            {announcements.map((item) => (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl">
                                            {item.icon}
                                        </span>
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                                            {item.category}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {item.description}
                                    </p>

                                    <p className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-400">
                                        {item.date}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Student Support */}
                    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="text-xl font-bold text-blue-950">
                                    Need Help?
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                                    For questions about your account, grades,
                                    enrollment, or school activities, please
                                    contact your teacher or school administrator.
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
                        <p className="font-semibold text-slate-700">
                            ACITE SCHOOL PORTAL
                        </p>
                        <p className="mt-2">
                            Learning • Growth • Excellence
                        </p>
                    </footer>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

