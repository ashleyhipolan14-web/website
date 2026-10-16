import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ students = [] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        student_id: '',
        name: '',
        email: '',
        grade_level: '',
        section: '',
    });

    function submit(e) {
        e.preventDefault();

        post('/students', {
            onSuccess: () => reset(),
        });
    }

    function deleteStudent(id) {
        if (window.confirm('Are you sure you want to delete this student?')) {
            // Submit the delete request through a normal Inertia form.
            import('@inertiajs/react').then(({ router }) => {
                router.delete(`/students/${id}`);
            });
        }
    }

    return (
        <>
            <Head title="Student Management" />

            <div className="min-h-screen bg-slate-100 p-6 md:p-10">
                <div className="mx-auto max-w-6xl">
                    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="font-semibold text-blue-700">
                                SCHOOL PORTAL
                            </p>
                            <h1 className="mt-2 text-3xl font-bold text-slate-900">
                                Student Management
                            </h1>
                            <p className="mt-2 text-slate-600">
                                Manage your student records.
                            </p>
                        </div>

                        <Link
                            href="/dashboard"
                            className="rounded-lg bg-white px-4 py-3 shadow hover:bg-slate-50"
                        >
                            Dashboard
                        </Link>
                    </header>

                    <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
                        <h2 className="mb-5 text-xl font-bold">
                            Add New Student
                        </h2>

                        <form onSubmit={submit}>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Student ID
                                    </label>
                                    <input
                                        value={data.student_id}
                                        onChange={e => setData('student_id', e.target.value)}
                                        className="w-full rounded-lg border p-3"
                                        placeholder="e.g. STU-001"
                                        required
                                    />
                                    {errors.student_id && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.student_id}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full rounded-lg border p-3"
                                        placeholder="Student full name"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full rounded-lg border p-3"
                                        placeholder="student@example.com"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Grade Level
                                    </label>
                                    <select
                                        value={data.grade_level}
                                        onChange={e => setData('grade_level', e.target.value)}
                                        className="w-full rounded-lg border bg-white p-3"
                                        required
                                    >
                                        <option value="">Select grade</option>
                                        {['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(grade => (
                                            <option key={grade} value={grade}>
                                                {grade}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.grade_level && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.grade_level}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Section
                                    </label>
                                    <input
                                        value={data.section}
                                        onChange={e => setData('section', e.target.value)}
                                        className="w-full rounded-lg border p-3"
                                        placeholder="e.g. Rizal"
                                        required
                                    />
                                    {errors.section && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.section}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-5 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Add Student'}
                            </button>
                        </form>
                    </section>

                    <section className="rounded-xl bg-white p-6 shadow-sm">
                        <h2 className="mb-5 text-xl font-bold">
                            Student Records ({students.length})
                        </h2>

                        {students.length === 0 ? (
                            <p className="rounded-lg bg-slate-50 p-6 text-center text-slate-500">
                                No students yet. Add your first student above.
                            </p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-3">Student ID</th>
                                            <th className="p-3">Name</th>
                                            <th className="p-3">Email</th>
                                            <th className="p-3">Grade</th>
                                            <th className="p-3">Section</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map(student => (
                                            <tr key={student.id} className="border-t">
                                                <td className="p-3">{student.student_id}</td>
                                                <td className="p-3">{student.name}</td>
                                                <td className="p-3">{student.email}</td>
                                                <td className="p-3">{student.grade_level}</td>
                                                <td className="p-3">{student.section}</td>
                                                <td className="p-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => deleteStudent(student.id)}
                                                        className="rounded bg-red-100 px-3 py-2 font-medium text-red-700 hover:bg-red-200"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}
